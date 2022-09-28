import deployment from '@react-dapp/protocol/deployment.json';
import { utils } from 'ethers';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface DepositEtherProps {
  onSuccess?: (data: unknown) => void;
}

export function DepositEther({ onSuccess }: DepositEtherProps) {
  const [value, setValue] = useState('');
  const { config } = usePrepareSendTransaction({
    request: {
      to: deployment.etherWallet.address,
      value: value ? utils.parseEther(value) : undefined,
    },
  });
  const { isLoading, isSuccess, reset, sendTransaction } = useSendTransaction({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setValue('');
    },
  });

  /**
   * Don't touch the code below and keep it as is.
   */
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSuccess) {
        return reset();
      }

      sendTransaction?.();
    },
    [isSuccess, reset, sendTransaction],
  );

  return (
    <form
      className="flex w-full max-w-md flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <NumberInput
        disabled={isLoading || isSuccess}
        id="value"
        label="Amount in ETH"
        onChange={(event) => setValue(event.target.value)}
        required
        value={value}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}

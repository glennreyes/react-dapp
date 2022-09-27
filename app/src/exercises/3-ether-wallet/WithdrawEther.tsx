import etherWallet from '@react-dapp/protocol/artifacts/contracts/EtherWallet.sol/EtherWallet.json';
import { utils } from 'ethers';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';
import { classNames } from '../../utils';
import { etherWalletAddress } from './constants';

export interface WithdrawEtherProps {
  onSuccess?: (data: unknown) => void;
}

export function WithdrawEther({ onSuccess }: WithdrawEtherProps) {
  const [value, setValue] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: etherWalletAddress,
    args: [value ? utils.parseEther(value) : undefined],
    contractInterface: etherWallet.abi,
    functionName: 'withdraw',
  });
  const { isLoading, isSuccess, reset, write } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setValue('');
    },
  });

  const buttonClasses = classNames(
    'btn-lg btn-primary',
    isLoading ? 'loading' : '',
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSuccess) {
        return reset();
      }

      write?.();
    },
    [isSuccess, reset, write],
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
      <Button className={buttonClasses} disabled={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}

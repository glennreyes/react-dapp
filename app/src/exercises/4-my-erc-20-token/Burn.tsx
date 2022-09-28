import myToken from '@react-dapp/protocol/artifacts/contracts/MyToken.sol/MyToken.json';
import deployment from '@react-dapp/protocol/deployment.json';
import { constants, utils } from 'ethers';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface BurnProps {
  onSuccess?: (data: unknown) => void;
}

export function Burn({ onSuccess }: BurnProps) {
  const [amount, setAmount] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: deployment.myToken.address,
    args: [amount ? utils.parseUnits(amount, 18) : constants.Zero],
    contractInterface: myToken.abi,
    functionName: 'burn',
  });
  const { isLoading, isSuccess, reset, write } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setAmount('');
    },
  });

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

  /**
   * Don't touch the code below and keep it as is.
   */
  return (
    <form
      className="flex w-full max-w-md flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <NumberInput
        disabled={isLoading || isSuccess}
        id="amount"
        label="Amount of tokens to burn"
        onChange={(event) => setAmount(event.target.value)}
        required
        value={amount}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}

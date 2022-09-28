import myToken from '@react-dapp/protocol/artifacts/contracts/MyToken.sol/MyToken.json';
import deployment from '@react-dapp/protocol/deployment.json';
import { constants, utils } from 'ethers';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { AddressInput } from '../../components/ui/AddressInput';
import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';

export interface TransferProps {
  onSuccess?: (data: unknown) => void;
}

export function Transfer({ onSuccess }: TransferProps) {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: deployment.myToken.address,
    args: [to, amount ? utils.parseUnits(amount, 18) : constants.Zero],
    contractInterface: myToken.abi,
    enabled: utils.isAddress(to),
    functionName: 'transfer',
  });
  const { isLoading, isSuccess, reset, write } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setAmount('');
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

      write?.();
    },
    [isSuccess, reset, write],
  );

  return (
    <form
      className="flex w-full max-w-md flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <AddressInput
        disabled={isLoading || isSuccess}
        id="to"
        label="To address"
        onChange={(event) => setTo(event.target.value)}
        required
        value={to}
      />
      <NumberInput
        disabled={isLoading || isSuccess}
        id="amount"
        label="Amount"
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

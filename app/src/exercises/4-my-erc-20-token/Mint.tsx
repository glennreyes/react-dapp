import myToken from '@react-dapp/protocol/artifacts/contracts/MyToken.sol/MyToken.json';
import { constants, utils } from 'ethers';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { NumberInput } from '../../components/ui/NumberInput';
import { classNames } from '../../utils';
import { decimals, myTokenAddress } from './constants';

export interface MintProps {
  onSuccess?: (data: unknown) => void;
}

export function Mint({ onSuccess }: MintProps) {
  const [amount, setAmount] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: myTokenAddress,
    args: [amount ? utils.parseUnits(amount, decimals) : constants.Zero],
    contractInterface: myToken.abi,
    functionName: 'mint',
  });
  const { isLoading, isSuccess, reset, write } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setAmount('');
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
        id="amount"
        label="Amount of tokens to mint"
        onChange={(event) => setAmount(event.target.value)}
        required
        value={amount}
      />
      <Button className={buttonClasses} disabled={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}

import greeter from '@react-dapp/protocol/artifacts/contracts/Greeter.sol/Greeter.json';
import deployment from '@react-dapp/protocol/deployment.json';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Alert } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { TextInput } from '../../components/ui/TextInput';

export interface SendGreetingDataTransactionProps {
  onSuccess?: (data: unknown) => void;
}

export function SendGreetingDataTransaction({
  onSuccess,
}: SendGreetingDataTransactionProps) {
  const [greeting, setGreeting] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: deployment.greeter.address,
    args: [greeting],
    contractInterface: greeter.abi,
    functionName: 'setGreeting',
  });
  const { isLoading, isSuccess, reset, write } = useContractWrite({
    ...config,
    onSuccess: (data) => {
      onSuccess?.(data);
      setGreeting('');
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
      <TextInput
        disabled={isLoading || isSuccess}
        id="greeting"
        label="Greeting"
        minLength={2}
        maxLength={56}
        onChange={(event) => setGreeting(event.target.value)}
        required
        value={greeting}
      />
      <Button disabled={isLoading} loading={isLoading} type="submit">
        {isSuccess ? 'Send new transaction' : 'Submit'}
      </Button>
      {isSuccess && <Alert>Transaction successful!</Alert>}
    </form>
  );
}

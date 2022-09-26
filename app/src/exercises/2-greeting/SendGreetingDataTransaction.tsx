import greeter from '@react-dapp/protocol/artifacts/contracts/Greeter.sol/Greeter.json';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Button } from '../../components/ui/Button';
import { TextInput } from '../../components/ui/TextInput';
import { classNames } from '../../utils';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export interface SendGreetingDataTransactionProps {
  onSuccess?: (data: unknown) => void;
}

export function SendGreetingDataTransaction({
  onSuccess,
}: SendGreetingDataTransactionProps) {
  const [greeting, setGreeting] = useState('');
  const { config } = usePrepareContractWrite({
    addressOrName: contractAddress,
    args: [greeting],
    contractInterface: greeter.abi,
    functionName: 'setGreeting',
    onSuccess,
  });
  const { isLoading, write } = useContractWrite(config);

  const buttonClasses = classNames(
    'btn-lg btn-primary',
    isLoading ? 'loading' : '',
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      write?.();
    },
    [write],
  );

  return (
    <form
      className="flex w-full max-w-md flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <TextInput
        disabled={isLoading}
        id="greeting"
        label="Greeting"
        onChange={(event) => setGreeting(event.target.value)}
        value={greeting}
      />
      <Button className={buttonClasses} disabled={isLoading} type="submit">
        Submit
      </Button>
    </form>
  );

  // return (
  //   <div className="text-center">
  //     <h3>Nothing to display yet.</h3>
  //     <p>
  //       Implement me in{' '}
  //       <code>src/exercises/2-greeting/SendGreetingDataTransaction.tsx</code>!
  //     </p>
  //   </div>
  // );
}

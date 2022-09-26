import { ArrowPathIcon } from '@heroicons/react/24/solid';
import greeter from '@react-dapp/protocol/artifacts/contracts/Greeter.sol/Greeter.json';
import { useContractRead } from 'wagmi';

import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { contractAddress } from './constants';

export interface ReadGreetingDataProps {
  onSuccess?: (data: unknown) => void;
}

export function ReadGreetingData({ onSuccess }: ReadGreetingDataProps) {
  const { data, isError, isLoading, refetch } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: greeter.abi,
    functionName: 'greet',
    onSuccess,
  });

  if (isError) {
    return <h3>N/A</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h3>{data}</h3>
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </>
  );

  // return (
  //   <div className="text-center">
  //     <h3>Nothing to display yet.</h3>
  //     <p>
  //       Implement me in{' '}
  //       <code>src/exercises/2-greeting/ReadGreetingData.tsx</code>!
  //     </p>
  //   </div>
  // );
}

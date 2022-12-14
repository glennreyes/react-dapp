import { ArrowPathIcon } from '@heroicons/react/24/solid';
import greeter from '@react-dapp/protocol/artifacts/contracts/Greeter.sol/Greeter.json';
import deployment from '@react-dapp/protocol/deployment.json';
import { useContractRead } from 'wagmi';

import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';

export interface ReadGreetingDataProps {
  onSuccess?: (data: unknown) => void;
}

export function ReadGreetingData({ onSuccess }: ReadGreetingDataProps) {
  const { data, isError, isLoading, refetch } = useContractRead({
    addressOrName: deployment.greeter.address,
    contractInterface: greeter.abi,
    functionName: 'greet',
    onSuccess,
  });

  /**
   * Don't touch the code below and keep it as is.
   */
  if (isError) {
    return <h3>N/A</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {typeof data === 'string' && <Stat title="Greeting">{data}</Stat>}
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </>
  );
}

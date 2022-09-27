import { ArrowPathIcon } from '@heroicons/react/24/solid';
import etherWallet from '@react-dapp/protocol/artifacts/contracts/EtherWallet.sol/EtherWallet.json';
import { BigNumber } from 'ethers';
import { useContractRead } from 'wagmi';

import { BigNumberDisplay } from '../../components/ui/BigNumberDisplay';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';
import { etherWalletAddress } from './constants';

export interface GetBalanceProps {
  onSuccess?: (data: unknown) => void;
}

export function GetBalance({ onSuccess }: GetBalanceProps) {
  const { data, isError, isLoading, refetch } = useContractRead({
    addressOrName: etherWalletAddress,
    contractInterface: etherWallet.abi,
    functionName: 'getBalance',
    onSuccess,
  });

  if (isError) {
    return <h3>N/A</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const value = BigNumber.isBigNumber(data) ? BigNumber.from(data) : undefined;

  return (
    <>
      <Stat title="Balance">
        <BigNumberDisplay
          className="font-bold"
          numberFormat={{
            currency: 'ETH',
            // Amount of decimals that Ether can have
            maximumFractionDigits: 18,
            style: 'currency',
          }}
          value={value}
        />
      </Stat>
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </>
  );
}

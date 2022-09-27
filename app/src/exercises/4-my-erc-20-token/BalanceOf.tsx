import { ArrowPathIcon } from '@heroicons/react/24/solid';
import myToken from '@react-dapp/protocol/artifacts/contracts/MyToken.sol/MyToken.json';
import deployment from '@react-dapp/protocol/deployment.json';
import { BigNumber } from 'ethers';
import { useState } from 'react';
import { useContractRead } from 'wagmi';

import { AddressInput } from '../../components/ui/AddressInput';
import { BigNumberDisplay } from '../../components/ui/BigNumberDisplay';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Loading } from '../../components/ui/Loading';
import { Stat } from '../../components/ui/Stat';

export interface BalanceOfProps {
  onSuccess?: (data: unknown) => void;
}

export function BalanceOf({ onSuccess }: BalanceOfProps) {
  const [account, setAccount] = useState('');
  const { data, isLoading, refetch } = useContractRead({
    addressOrName: deployment.myToken.address,
    args: [account],
    contractInterface: myToken.abi,
    enabled: /^0x[0-9a-fA-F]{40}$/.test(account),
    functionName: 'balanceOf',
    onSuccess,
  });
  const balance = BigNumber.isBigNumber(data)
    ? BigNumber.from(data)
    : undefined;

  const symbolResult = useContractRead({
    addressOrName: deployment.myToken.address,
    contractInterface: myToken.abi,
    functionName: 'symbol',
    onSuccess,
  });
  const symbol =
    typeof symbolResult.data === 'string' ? symbolResult.data : undefined;

  return (
    <div className="flex w-full max-w-md flex-col space-y-4">
      <AddressInput
        disabled={isLoading}
        id="to"
        label="View balance of account"
        onChange={(event) => setAccount(event.target.value)}
        required
        value={account}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Stat title="Balance">
          <BigNumberDisplay
            className="font-bold"
            numberFormat={{
              currency: symbol,
              // Amount of decimals that Ether can have
              maximumFractionDigits: 18,
              style: 'currency',
            }}
            value={balance}
          />
        </Stat>
      )}
      <Button className="gap-3" onClick={() => refetch()}>
        <Icon icon={ArrowPathIcon} />
        Refetch
      </Button>
    </div>
  );
}

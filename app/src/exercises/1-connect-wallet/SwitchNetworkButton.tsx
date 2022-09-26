import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import { useCallback, useMemo } from 'react';
import { allChains, chain, useNetwork, useSwitchNetwork } from 'wagmi';

import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { classNames } from '../../utils';

type SwitchNetworkButtonProps = ButtonProps;

export function SwitchNetworkButton({
  className,
  ...props
}: SwitchNetworkButtonProps) {
  // TODO: Solve these missing parts
  const network = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const handleSwitchNetworkClick = useCallback(
    () => switchNetwork?.(chain.hardhat.id),
    [switchNetwork],
  );
  const isHardhatNetwork = network.chain?.id === chain.hardhat.id;
  const chainName = useMemo(() => {
    if (isHardhatNetwork) {
      return (
        <>
          {network.chain?.name}
          <Icon className="text-success" icon={CheckCircleIcon} />
        </>
      );
    }

    return (
      <>
        {
          allChains.find(
            (currentChain) => currentChain.id === network.chain?.id,
          )?.name
        }
        <Icon className="text-success" icon={ExclamationCircleIcon} />
      </>
    );
  }, [isHardhatNetwork, network.chain]);

  if (!switchNetwork || !network.chain) {
    return null;
  }

  const classes = classNames('btn-warning', className);
  const textClasses = classNames(
    'btn btn-ghost btn-disabled text-base-content no-animation normal-case gap-2',
    className,
  );

  return (
    <div className="flex items-center gap-1">
      <p className={textClasses}>
        Connected to{' '}
        <span className="text-accent-content inline-flex items-center gap-1">
          {chainName}
        </span>
      </p>
      {!isHardhatNetwork && (
        <Button
          className={classes}
          onClick={handleSwitchNetworkClick}
          {...props}
        >
          Switch Network
        </Button>
      )}
    </div>
  );
}

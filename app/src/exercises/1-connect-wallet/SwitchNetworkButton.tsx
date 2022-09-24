import { useCallback } from 'react';
import { chain, useNetwork, useSwitchNetwork } from 'wagmi';

import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';

type SwitchNetworkButtonProps = ButtonProps;

export function SwitchNetworkButton({
  className,
  ...props
}: SwitchNetworkButtonProps) {
  // TODO: Solve these missing parts
  const network = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const handleSwitchNetworkClick = useCallback(() => {
    if (network.chain?.id === chain.hardhat.id) {
      return;
    }

    return switchNetwork?.(chain.hardhat.id);
  }, [network.chain?.id, switchNetwork]);

  if (network.chain?.id === chain.hardhat.id) {
    const textClasses = classNames(
      'btn btn-ghost btn-disabled text-primary-content no-animation normal-case gap-2',
      className,
    );

    return (
      <p className={textClasses}>
        Connected to{' '}
        <span className="text-secondary-content">{network.chain.name}</span>
      </p>
    );
  }

  const classes = classNames('normal-case', 'btn-warning', className);

  if (!switchNetwork) {
    return null;
  }

  return (
    <Button className={classes} onClick={handleSwitchNetworkClick} {...props}>
      Switch Network
    </Button>
  );
}

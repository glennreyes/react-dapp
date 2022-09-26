import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { Address } from '../../components/ui/Address';
import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';

type ConnectWalletButtonProps = ButtonProps;

export function ConnectWalletButton({
  className,
  ...props
}: ConnectWalletButtonProps) {
  // TODO: Solve these missing parts
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new MetaMaskConnector() });
  const { disconnect } = useDisconnect();

  const classes = classNames(
    isConnected ? 'btn-secondary' : 'btn-primary',
    className,
  );

  if (isConnected) {
    const textClasses = classNames(
      'btn btn-ghost btn-disabled text-base-content no-animation normal-case gap-2',
      className,
    );

    return (
      <div className="flex items-center gap-1">
        <p className={textClasses}>
          {address ? (
            <>
              <span>Connected to:</span>
              <Address className="text-accent-focus">{address}</Address>
            </>
          ) : (
            <span>Connected</span>
          )}
        </p>
        <Button className={classes} onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button className={classes} onClick={() => connect()} {...props}>
      Connect Wallet
    </Button>
  );
}

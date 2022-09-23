import { Address } from '../../components/ui/Address';
import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';
import { useAccount } from './useAccount';
import { useConnect } from './useConnect';
import { useDisconnect } from './useDisconnect';

type ConnectWalletButtonProps = ButtonProps;

export function ConnectWalletButton({
  className,
  ...props
}: ConnectWalletButtonProps) {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const classes = classNames(
    isConnected ? 'btn-secondary' : 'btn-primary',
    className,
  );

  if (isConnected) {
    const textClasses = classNames(
      'btn btn-ghost btn-disabled no-animation normal-case gap-1',
      className,
    );

    return (
      <div className="flex items-center">
        <p className={textClasses}>
          {address ? (
            <>
              <span>Connected to: </span>
              <Address className="text-primary-content">{address}</Address>
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

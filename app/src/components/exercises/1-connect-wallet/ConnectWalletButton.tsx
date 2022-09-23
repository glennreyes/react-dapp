import { classNames } from '../../../utils';
import type { ButtonProps } from '../../ui/Button';
import { Button } from '../../ui/Button';

type ConnectWalletButtonProps = ButtonProps;

export function ConnectWalletButton({
  className,
  ...props
}: ConnectWalletButtonProps) {
  const classes = classNames('btn-primary', className);

  return (
    <Button className={classes} {...props}>
      Connect Wallet
    </Button>
  );
}

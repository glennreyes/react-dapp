import type { ButtonProps } from '../../components/ui/Button';
import { Button } from '../../components/ui/Button';
import { classNames } from '../../utils';

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

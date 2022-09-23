import { ListBulletIcon } from '@heroicons/react/24/solid';

import { classNames } from '../../utils';
import type { ButtonProps } from '../ui/Button';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ScreenReader } from '../ui/ScreenReader';
import { useDrawer } from './Drawer';

type DrawerButtonProps = ButtonProps;

export function DrawerButton({
  children,
  className,
  ...props
}: DrawerButtonProps) {
  const { open } = useDrawer();
  const classes = classNames('btn-ghost', className);

  return (
    <Button className={classes} onClick={open} {...props}>
      <Icon icon={ListBulletIcon} className="text-base-content" />
      <ScreenReader>{children}</ScreenReader>
    </Button>
  );
}

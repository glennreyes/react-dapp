import { ListBulletIcon } from '@heroicons/react/24/solid';

import type { ButtonProps } from '../ui/Button';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ScreenReader } from '../ui/ScreenReader';
import { useDrawerContext } from './Drawer';

type DrawerButtonProps = ButtonProps;

export function DrawerButton({ children, ...props }: DrawerButtonProps) {
  const { open } = useDrawerContext();

  return (
    <Button onClick={open} {...props}>
      <Icon icon={ListBulletIcon} className="text-primary-content" />
      <ScreenReader>{children}</ScreenReader>
    </Button>
  );
}

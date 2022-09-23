import type { ComponentProps } from 'react';

type DrawerMenuItemProps = ComponentProps<'li'>;

export function DrawerMenuItem(props: DrawerMenuItemProps) {
  return <li {...props} />;
}

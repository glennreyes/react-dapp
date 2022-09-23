import type { ComponentProps } from 'react';

type DrawerMenuProps = ComponentProps<'ul'>;

export function DrawerMenu(props: DrawerMenuProps) {
  return (
    <ul
      className="menu bg-base-100 text-base-content w-80 overflow-y-auto p-4"
      {...props}
    />
  );
}

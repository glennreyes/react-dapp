import type { MouseEvent } from 'react';
import { useCallback } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useDrawer } from './DrawerContext';

type DrawerMenuLinkProps = LinkProps;

export function DrawerMenuLink({
  children,
  onClick,
  ...props
}: DrawerMenuLinkProps) {
  const { close } = useDrawer();
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      close();
      onClick?.(event);
    },
    [close, onClick],
  );

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}

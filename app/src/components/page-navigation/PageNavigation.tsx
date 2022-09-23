import type { ComponentProps } from 'react';

import { classNames } from '../../utils';
import { Divider } from '../ui/Divider';

type PageNavigationProps = ComponentProps<'nav'>;

export function PageNavigation({
  children,
  className,
  ...props
}: PageNavigationProps) {
  const classes = classNames(
    'flex flex-col justify-between gap-4 lg:flex-row',
    className,
  );

  return (
    <>
      <Divider />
      <nav className={classes} {...props}>
        {children}
      </nav>
    </>
  );
}

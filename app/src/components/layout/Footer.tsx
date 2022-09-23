import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type FooterProps = ComponentProps<'footer'>;

export function Footer({ children, className, ...props }: FooterProps) {
  const classes = classNames(
    'footer footer-center bg-base-200 text-base-content p-5 border-t border-base-300',
    className,
  );

  return (
    <footer className={classes} {...props}>
      <div>{children}</div>
    </footer>
  );
}

import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type SubheadingProps = ComponentProps<'h4'>;

export function Subheading({ children, className, ...props }: SubheadingProps) {
  const classes = classNames('text-primary', className);

  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  );
}

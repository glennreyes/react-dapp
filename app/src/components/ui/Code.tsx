import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type CodeProps = ComponentProps<'div'>;

export function Code({ children, className, ...props }: CodeProps) {
  const classes = classNames('mockup-code not-prose', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type WindowProps = ComponentProps<'div'>;

export function Window({ children, className, ...props }: WindowProps) {
  const classes = classNames('mockup-window bg-base-300 not-prose', className);

  return (
    <div className={classes} {...props}>
      <div className="bg-base-200 flex justify-center px-4 py-16">
        {children}
      </div>
    </div>
  );
}

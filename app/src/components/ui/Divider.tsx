import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type DividerProps = ComponentProps<'div'>;

export function Divider({ className, ...props }: DividerProps) {
  const classes = classNames('divider', className);

  return <div className={classes} {...props} />;
}

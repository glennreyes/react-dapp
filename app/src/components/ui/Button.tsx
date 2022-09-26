import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

export type ButtonProps = ComponentProps<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  const classes = classNames('btn normal-case', className);

  return <button className={classes} {...props} />;
}

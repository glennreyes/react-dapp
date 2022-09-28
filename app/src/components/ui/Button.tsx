import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

export interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean;
}

export function Button({ className, loading = false, ...props }: ButtonProps) {
  const classes = classNames(
    'btn normal-case',
    loading ? 'loading' : '',
    className,
  );

  return <button className={classes} {...props} />;
}

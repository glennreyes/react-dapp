import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type TextGradientProps = ComponentProps<'span'>;

export function TextGradient({ className, ...props }: TextGradientProps) {
  const classes = classNames(
    'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary',
    className,
  );

  return <span className={classes} {...props} />;
}

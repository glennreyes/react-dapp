import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type ScreenReaderProps = ComponentProps<'span'>;

export function ScreenReader({ className, ...props }: ScreenReaderProps) {
  const classes = classNames('sr-only', className);

  return <span className={classes} {...props} />;
}

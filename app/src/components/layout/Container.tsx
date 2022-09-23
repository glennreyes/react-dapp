import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type ContainerProps = ComponentProps<'div'>;

export function Container({ className, ...props }: ContainerProps) {
  const classes = classNames('container mx-auto', className);

  return <div className={classes} {...props} />;
}

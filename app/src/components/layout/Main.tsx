import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

type MainProps = ComponentProps<'main'>;

export function Main({ className, ...props }: MainProps) {
  const classes = classNames('py-8 lg:py-16 flex-1', className);

  return <main className={classes} {...props} />;
}

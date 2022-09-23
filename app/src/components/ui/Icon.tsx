import type { ComponentProps, ComponentType } from 'react';

import { classNames } from '../../utils';

export interface IconProps extends ComponentProps<'svg'> {
  icon: ComponentType<ComponentProps<'svg'>>;
  size?: 24;
}

export function Icon({
  className,
  icon: SvgIcon,
  size = 24,
  ...props
}: IconProps) {
  const classes = classNames('flex-none', className);

  return <SvgIcon className={classes} height={size} width={size} {...props} />;
}

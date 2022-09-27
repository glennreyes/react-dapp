import type { ComponentProps, ReactElement } from 'react';

import { classNames } from '../../utils';

interface StatProps extends ComponentProps<'div'> {
  actions?: ReactElement;
  children: ReactElement | string;
  title: string;
}

export function Stat({
  actions,
  children,
  className,
  title,
  ...props
}: StatProps) {
  const classes = classNames('stats shadow', className);

  return (
    <div className={classes} {...props}>
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-accent">{children}</div>
        <div className="stat-actions">{actions}</div>
      </div>
    </div>
  );
}

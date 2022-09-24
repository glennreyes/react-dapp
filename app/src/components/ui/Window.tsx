import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { ComponentProps } from 'react';

import { classNames } from '../../utils';
import { Icon } from './Icon';

interface WindowProps extends ComponentProps<'div'> {
  isCompleted?: boolean;
}

export function Window({
  children,
  className,
  isCompleted,
  ...props
}: WindowProps) {
  const classes = classNames(
    'mockup-window bg-base-300 not-prose relative',
    className,
  );

  return (
    <div className={classes} {...props}>
      <div className="absolute top-3 right-3">
        {isCompleted ? (
          <Icon className="text-success-content" icon={CheckCircleIcon} />
        ) : isCompleted === false ? (
          <Icon className="text-error-content" icon={XCircleIcon} />
        ) : null}
      </div>

      <div className="bg-base-200 flex items-center justify-center gap-2 px-4 py-16">
        <div>{children}</div>
      </div>
    </div>
  );
}

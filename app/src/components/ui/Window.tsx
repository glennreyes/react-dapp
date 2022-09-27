import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { ComponentProps } from 'react';

import { classNames } from '../../utils';
import { Icon } from './Icon';

interface WindowProps extends ComponentProps<'div'> {
  isCompleted?: boolean;
  onMarkComplete?: () => void;
}

export function Window({
  children,
  className,
  isCompleted,
  onMarkComplete,
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
          <Icon className="text-success" icon={CheckCircleIcon} />
        ) : isCompleted === false ? (
          <Icon className="text-error" icon={XCircleIcon} />
        ) : null}
      </div>

      <div className="bg-base-200 flex flex-col items-center justify-center gap-2 px-4 py-16">
        {children}
      </div>
      {onMarkComplete && (
        <div className="absolute bottom-2 right-3">
          <button
            className="btn btn-xs btn-outline btn-secondary normal-case"
            onClick={onMarkComplete}
          >
            {isCompleted ? 'Undo mark as completed' : 'Mark as completed'}
          </button>
        </div>
      )}
    </div>
  );
}

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { Icon } from './Icon';

interface AlertProps {
  children: string;
}

export function Alert({ children }: AlertProps) {
  return (
    <div className="alert alert-success shadow-lg">
      <div>
        <Icon icon={CheckCircleIcon} />
        <span>{children}</span>
      </div>
    </div>
  );
}

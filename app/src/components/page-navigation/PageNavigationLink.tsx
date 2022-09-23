import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { classNames } from '../../utils';
import { Icon } from '../ui/Icon';

interface PageNavigationLinkProps extends LinkProps {
  direction?: 'back' | 'next';
}

export function PageNavigationLink({
  children,
  className,
  direction = 'next',
  ...props
}: PageNavigationLinkProps) {
  const classes = classNames(
    'btn btn-secondary btn-outline btn-lg gap-4 normal-case',
    className,
  );

  return (
    <Link className={classes} {...props}>
      {direction === 'back' && <Icon icon={ChevronLeftIcon} />}
      <span className="max-w-[300px] truncate">{children}</span>
      {direction === 'next' && <Icon icon={ChevronRightIcon} />}
    </Link>
  );
}

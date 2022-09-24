import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from '../../utils';

interface NavbarProps extends ComponentProps<'nav'> {
  title: string;
}

export function Navbar({ children, className, title, ...props }: NavbarProps) {
  const classes = classNames(
    'navbar bg-base-200/50 backdrop-blur-xl sticky top-0 z-10',
    className,
  );

  return (
    <nav className={classes} {...props}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-lg normal-case" to="/">
          {title}
        </Link>
      </div>
      <div className="flex flex-none items-center space-x-2">{children}</div>
    </nav>
  );
}

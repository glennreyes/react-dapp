import type { ComponentProps } from 'react';
import { useAccount, useBalance } from 'wagmi';

import { classNames } from '../../utils';

type BalanceDisplayProps = ComponentProps<'p'>;

export function BalanceDisplay({ className, ...props }: BalanceDisplayProps) {
  const { address } = useAccount();
  const { data } = useBalance({ addressOrName: address });

  const textClasses = classNames(
    'btn btn-ghost btn-disabled text-base-content no-animation normal-case gap-2',
    className,
  );

  if (!address) {
    return null;
  }

  return (
    <p className={textClasses} {...props}>
      Balance:{' '}
      <span className="text-accent-content">
        {data ? `${data.formatted} ${data.symbol}` : 'N/A'}
      </span>
    </p>
  );
}

import type { ComponentProps } from 'react';
import { useAccount, useBalance } from 'wagmi';

import { NumberDisplay } from '../../components/ui/NumberDisplay';
import { classNames } from '../../utils';

export interface AccountBalanceProps extends ComponentProps<'p'> {
  onSuccess?: (data: unknown) => void;
}

export function AccountBalance({
  className,
  onSuccess,
  ...props
}: AccountBalanceProps) {
  const { address } = useAccount();
  const { data } = useBalance({ addressOrName: address, onSuccess });

  /**
   * Don't touch the code below and keep it as is.
   */
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
        {data ? (
          <NumberDisplay
            numberFormat={{
              currency: 'ETH',
              maximumFractionDigits: 18,
              style: 'currency',
            }}
            value={data.formatted}
          />
        ) : (
          'N/A'
        )}
      </span>
    </p>
  );
}

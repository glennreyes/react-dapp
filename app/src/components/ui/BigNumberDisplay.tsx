import type { BigNumber } from 'ethers';
import { utils } from 'ethers';

import type { NumberDisplayProps } from './NumberDisplay';
import { NumberDisplay } from './NumberDisplay';

interface BigNumberDisplayProps extends Omit<NumberDisplayProps, 'value'> {
  value?: BigNumber;
}

export function BigNumberDisplay({ value, ...props }: BigNumberDisplayProps) {
  return (
    <NumberDisplay
      value={value ? utils.formatEther(value) : undefined}
      {...props}
    />
  );
}

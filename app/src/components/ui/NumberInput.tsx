import type { NumericFormatProps } from 'react-number-format';
import { NumericFormat } from 'react-number-format';

import { classNames } from '../../utils';
import { InputLabel } from './InputLabel';

interface NumberInputProps extends NumericFormatProps {
  description?: string;
  id: string;
  label: string;
}

export function NumberInput({
  className,
  id,
  label,
  ...props
}: NumberInputProps) {
  const classes = classNames('input input-lg input-bordered w-full', className);

  return (
    <InputLabel id={id} label={label}>
      <NumericFormat
        allowedDecimalSeparators={[',', '.']}
        allowNegative={false}
        className={classes}
        decimalScale={18}
        id={id}
        placeholder="Type here"
        type="text"
        {...props}
      />
    </InputLabel>
  );
}

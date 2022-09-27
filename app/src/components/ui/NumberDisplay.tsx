import type { NumericFormatProps } from 'react-number-format';
import { NumberFormatBase, NumericFormat } from 'react-number-format';

export interface NumberDisplayProps extends NumericFormatProps {
  numberFormat?: Intl.NumberFormatOptions;
}

export function NumberDisplay({ numberFormat, ...props }: NumberDisplayProps) {
  if (props.value === undefined || props.value === null) {
    return <>-</>;
  }

  if (numberFormat) {
    return (
      <NumberFormatBase
        displayType="text"
        format={(value) =>
          new Intl.NumberFormat('en-US', numberFormat).format(Number(value))
        }
        getCaretBoundary={() => []}
        removeFormatting={(value) =>
          value.split(' ').filter((item) => !Number.isNaN(item))[0]
        }
        {...props}
      />
    );
  }

  return <NumericFormat displayType="text" {...props} />;
}

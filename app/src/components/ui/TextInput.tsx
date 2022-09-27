import type { ComponentProps } from 'react';

import { classNames } from '../../utils';
import { InputLabel } from './InputLabel';

export interface TextInputProps extends ComponentProps<'input'> {
  description?: string;
  id: string;
  label: string;
}

export function TextInput({ className, id, label, ...props }: TextInputProps) {
  const classes = classNames('input input-lg input-bordered w-full', className);

  return (
    <InputLabel id={id} label={label}>
      <input
        id={id}
        className={classes}
        placeholder="Type here"
        type="text"
        {...props}
      />
    </InputLabel>
  );
}

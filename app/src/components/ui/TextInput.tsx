import type { ComponentProps } from 'react';

import { classNames } from '../../utils';

interface TextInputProps extends ComponentProps<'input'> {
  id: string;
  label: string;
}

export function TextInput({ className, id, label, ...props }: TextInputProps) {
  const classes = classNames('input input-lg input-bordered w-full', className);

  return (
    <div>
      <label htmlFor={id} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={id}
        className={classes}
        placeholder="Type here"
        type="text"
        {...props}
      />
    </div>
  );
}

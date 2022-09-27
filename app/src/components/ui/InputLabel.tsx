import type { ComponentProps, ReactElement } from 'react';

export interface InputLabelProps extends ComponentProps<'label'> {
  children: ReactElement<HTMLInputElement>;
  id: string;
  label: string;
}

export function InputLabel({ children, id, label, ...props }: InputLabelProps) {
  return (
    <div>
      <label htmlFor={id} className="label" {...props}>
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
}

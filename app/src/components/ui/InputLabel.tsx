import type { ComponentProps, ReactElement } from 'react';

export interface InputLabelProps extends ComponentProps<'label'> {
  children: ReactElement<HTMLInputElement>;
  description?: string;
  id: string;
  label: string;
}

export function InputLabel({
  children,
  description,
  id,
  label,
  ...props
}: InputLabelProps) {
  return (
    <div>
      <label htmlFor={id} className="label" {...props}>
        <span className="label-text">{label}</span>
      </label>
      {children}
      {description && (
        <div className="label">
          <span className="label-text-alt">Alt label</span>
        </div>
      )}
    </div>
  );
}

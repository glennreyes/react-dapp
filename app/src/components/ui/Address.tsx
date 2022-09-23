import type { ComponentProps } from 'react';

interface AddressProps extends ComponentProps<'code'> {
  minimal?: boolean;
  children: string;
}

export function Address({ children, minimal = true, ...props }: AddressProps) {
  const address = minimal
    ? `${children.slice(0, 6)}...${children.slice(-4)}`
    : children;

  return <code {...props}>{address}</code>;
}

import type { ComponentProps } from 'react';

type CodeLineProps = ComponentProps<'pre'>;

export function CodeLine({ children, prefix = '$', ...props }: CodeLineProps) {
  return (
    <pre data-prefix={prefix} {...props}>
      <code>{children}</code>
    </pre>
  );
}

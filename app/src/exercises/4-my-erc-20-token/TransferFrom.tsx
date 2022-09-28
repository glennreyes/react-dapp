import type { FormEvent } from 'react';
import { useCallback } from 'react';

export interface TransferFromProps {
  onSuccess?: (data: unknown) => void;
}

export function TransferFrom({ onSuccess }: TransferFromProps) {
  // TODO
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO
  }, []);
  console.info(onSuccess);

  return (
    <form
      className="flex w-full max-w-md flex-col items-center space-y-4"
      onSubmit={handleSubmit}
    >
      Your turn to get this fully implemented.
    </form>
  );
}

import type { FormEvent } from 'react';
import { useCallback } from 'react';

export interface TransferFromProps {
  onSuccess?: (data: unknown) => void;
}

export function TransferFrom({ onSuccess }: TransferFromProps) {
  /**
   * TODO
   * - Implement `approve` and `transferFrom` and it's interaction with the smart contracts within this component in its
   *   entirety.
   */

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  // This can be removed once onSuccess is applied
  console.info(onSuccess);

  return (
    <form
      className="flex w-full max-w-md flex-col items-center space-y-4"
      onSubmit={handleSubmit}
    >
      <p>Now it's your turn to get this fully implemented.</p>
      <p>
        Check out the <code>ERC20.sol</code> smart contract to learn more about
        the <code>approve</code> and <code>transferFrom</code> function.
      </p>
    </form>
  );
}

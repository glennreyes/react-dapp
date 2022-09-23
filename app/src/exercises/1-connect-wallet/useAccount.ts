interface UseAccountReturn {
  address?: string;
  isConnected: boolean;
}

const address = undefined;

export function useAccount(): UseAccountReturn {
  // TODO: Implement this

  return {
    address,
    isConnected: false,
  };
}

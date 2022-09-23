import { getDefaultProvider } from 'ethers';
import type { ReactElement } from 'react';
import { createClient, WagmiConfig } from 'wagmi';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

interface WagmiProps {
  children: ReactElement;
}

export function Wagmi(props: WagmiProps) {
  return <WagmiConfig client={client} {...props} />;
}

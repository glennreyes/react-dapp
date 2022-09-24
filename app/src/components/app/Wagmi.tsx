import type { ReactElement } from 'react';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.hardhat],
  [jsonRpcProvider({ rpc: () => ({ http: 'http://localhost:8545' }) })],
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

interface WagmiProps {
  children: ReactElement;
}

export function Wagmi(props: WagmiProps) {
  return <WagmiConfig client={client} {...props} />;
}

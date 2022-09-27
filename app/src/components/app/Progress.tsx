import type { ReactElement } from 'react';
import { createContext, useContext, useState } from 'react';
import { chain, useAccount, useNetwork } from 'wagmi';

import type { ReadGreetingDataProps } from '../../exercises/2-greeting/ReadGreetingData';
import type { SendGreetingDataTransactionProps } from '../../exercises/2-greeting/SendGreetingDataTransaction';
import type { DepositEtherProps } from '../../exercises/3-ether-wallet/DepositEther';
import type { GetBalanceProps } from '../../exercises/3-ether-wallet/GetBalance';
import type { WithdrawEtherProps } from '../../exercises/3-ether-wallet/WithdrawEther';
import type { BurnProps } from '../../exercises/4-my-erc-20-token/Burn';
import type { MintProps } from '../../exercises/4-my-erc-20-token/Mint';
import type { TransferProps } from '../../exercises/4-my-erc-20-token/Transfer';
import type { TransferFromProps } from '../../exercises/4-my-erc-20-token/TransferFrom';

interface ProgressContextValues {
  handleBurnCompleted: BurnProps['onSuccess'];
  handleDepositCompleted: DepositEtherProps['onSuccess'];
  handleGetBalanceCompleted: GetBalanceProps['onSuccess'];
  handleMintCompleted: MintProps['onSuccess'];
  handleReadGreetingCompleted: ReadGreetingDataProps['onSuccess'];
  handleSendGreetingTransactionCompleted: SendGreetingDataTransactionProps['onSuccess'];
  handleTransferCompleted: TransferProps['onSuccess'];
  handleTransferFromCompleted: TransferFromProps['onSuccess'];
  handleWithdrawCompleted: WithdrawEtherProps['onSuccess'];
  isBurnCompleted: boolean;
  isConnectWalletCompleted: boolean;
  isDepositCompleted: boolean;
  isGetBalanceCompleted: boolean;
  isMintCompleted: boolean;
  isReadGreetingCompleted: boolean;
  isSendGreetingTransactionCompleted: boolean;
  isSwitchNetworkCompleted: boolean;
  isTransferCompleted: boolean;
  isTransferFromCompleted: boolean;
  isWithdrawCompleted: boolean;
}

const ProgressContext = createContext<ProgressContextValues | undefined>(
  undefined,
);

export function useProgress() {
  const context = useContext(ProgressContext);

  if (context === undefined) {
    throw new Error('useProgress must be used within a Progress');
  }

  return context;
}

interface ProgressProps {
  children: ReactElement;
}

export function Progress({ children }: ProgressProps) {
  // Exercise 1 — Connect Wallet
  const { isConnected } = useAccount();
  const network = useNetwork();
  const isConnectWalletCompleted = isConnected;
  const isSwitchNetworkCompleted = network.chain?.id === chain.hardhat.id;

  // Exercise 2 — Greeter
  const [isReadGreetingCompleted, setReadGreetingCompleted] = useState(false);
  const [
    isSendGreetingTransactionCompleted,
    setSendGreetingTransactionCompleted,
  ] = useState(false);

  // Exercise 3 — Ether Wallet
  const [isDepositCompleted, setDepositCompleted] = useState(false);
  const [isGetBalanceCompleted, setGetBalanceCompleted] = useState(false);
  const [isWithdrawCompleted, setWithdrawCompleted] = useState(false);

  // Exercise 4 — My ERC-20 Token
  const [isMintCompleted, setMintCompleted] = useState(false);
  const [isTransferCompleted, setTransferCompleted] = useState(false);
  const [isBurnCompleted, setBurnCompleted] = useState(false);
  const [isTransferFromCompleted, setTransferFromCompleted] = useState(false);

  return (
    <ProgressContext.Provider
      value={{
        handleBurnCompleted: (data) => {
          if (data && !isBurnCompleted) {
            setBurnCompleted(true);
          }
        },
        handleDepositCompleted: (data) => {
          if (data && !isDepositCompleted) {
            setDepositCompleted(true);
          }
        },
        handleGetBalanceCompleted: (data) => {
          if (data && !isGetBalanceCompleted) {
            setGetBalanceCompleted(true);
          }
        },
        handleMintCompleted: (data) => {
          if (data && !isMintCompleted) {
            setMintCompleted(true);
          }
        },
        handleReadGreetingCompleted: (data) => {
          if (data && !isReadGreetingCompleted) {
            setReadGreetingCompleted(true);
          }
        },
        handleSendGreetingTransactionCompleted: (data) => {
          if (data && !isSendGreetingTransactionCompleted) {
            setSendGreetingTransactionCompleted(true);
          }
        },
        handleTransferCompleted: (data) => {
          if (data && !isTransferCompleted) {
            setTransferCompleted(true);
          }
        },
        handleTransferFromCompleted: (data) => {
          if (data && !isTransferFromCompleted) {
            setTransferFromCompleted(true);
          }
        },
        handleWithdrawCompleted: (data) => {
          if (data && !isWithdrawCompleted) {
            setWithdrawCompleted(true);
          }
        },
        isBurnCompleted,
        isConnectWalletCompleted,
        isDepositCompleted,
        isGetBalanceCompleted,
        isMintCompleted,
        isReadGreetingCompleted,
        isSendGreetingTransactionCompleted,
        isSwitchNetworkCompleted,
        isTransferCompleted,
        isTransferFromCompleted,
        isWithdrawCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

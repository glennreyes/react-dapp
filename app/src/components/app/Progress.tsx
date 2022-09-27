import type { ReactElement } from 'react';
import { createContext, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { chain, useAccount, useNetwork } from 'wagmi';

import type { AccountBalanceProps } from '../../exercises/1-connect-wallet/AccountBalance';
import type { ReadGreetingDataProps } from '../../exercises/2-greeting/ReadGreetingData';
import type { SendGreetingDataTransactionProps } from '../../exercises/2-greeting/SendGreetingDataTransaction';
import type { DepositEtherProps } from '../../exercises/3-ether-wallet/DepositEther';
import type { GetBalanceProps } from '../../exercises/3-ether-wallet/GetBalance';
import type { WithdrawEtherProps } from '../../exercises/3-ether-wallet/WithdrawEther';
import type { BalanceOfProps } from '../../exercises/4-my-erc-20-token/BalanceOf';
import type { BurnProps } from '../../exercises/4-my-erc-20-token/Burn';
import type { MintProps } from '../../exercises/4-my-erc-20-token/Mint';
import type { TransferProps } from '../../exercises/4-my-erc-20-token/Transfer';
import type { TransferFromProps } from '../../exercises/4-my-erc-20-token/TransferFrom';

interface ProgressContextValues {
  handleAccountBalanceCompleted: AccountBalanceProps['onSuccess'];
  handleBalanceOfCompleted: BalanceOfProps['onSuccess'];
  handleBurnCompleted: BurnProps['onSuccess'];
  handleDepositCompleted: DepositEtherProps['onSuccess'];
  handleGetBalanceCompleted: GetBalanceProps['onSuccess'];
  handleMintCompleted: MintProps['onSuccess'];
  handleReadGreetingCompleted: ReadGreetingDataProps['onSuccess'];
  handleSendGreetingTransactionCompleted: SendGreetingDataTransactionProps['onSuccess'];
  handleTransferCompleted: TransferProps['onSuccess'];
  handleTransferFromCompleted: TransferFromProps['onSuccess'];
  handleWithdrawCompleted: WithdrawEtherProps['onSuccess'];
  isAccountBalanceCompleted?: boolean;
  isBalanceOfCompleted?: boolean;
  isBurnCompleted?: boolean;
  isConnectWalletCompleted?: boolean;
  isDepositCompleted?: boolean;
  isGetBalanceCompleted?: boolean;
  isMintCompleted?: boolean;
  isReadGreetingCompleted?: boolean;
  isSendGreetingTransactionCompleted?: boolean;
  isSwitchNetworkCompleted?: boolean;
  isTransferCompleted?: boolean;
  isTransferFromCompleted?: boolean;
  isWithdrawCompleted?: boolean;
  toggleAccountBalanceCompleted: () => void;
  toggleBalanceOfCompleted: () => void;
  toggleBurnCompleted: () => void;
  toggleDepositCompleted: () => void;
  toggleGetBalanceCompleted: () => void;
  toggleMintCompleted: () => void;
  toggleReadGreetingCompleted: () => void;
  toggleSendGreetingTransactionCompleted: () => void;
  toggleTransferCompleted: () => void;
  toggleTransferFromCompleted: () => void;
  toggleWithdrawCompleted: () => void;
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
  const [isAccountBalanceCompleted, setAccountBalanceCompleted] =
    useLocalStorage('isAccountBalanceCompleted', false);

  // Exercise 2 — Greeter
  const [isReadGreetingCompleted, setReadGreetingCompleted] = useLocalStorage(
    'isReadGreetingCompleted',
    false,
  );
  const [
    isSendGreetingTransactionCompleted,
    setSendGreetingTransactionCompleted,
  ] = useLocalStorage('isSendGreetingTransactionCompleted', false);

  // Exercise 3 — Ether Wallet
  const [isDepositCompleted, setDepositCompleted] = useLocalStorage(
    'isDepositCompleted',
    false,
  );
  const [isGetBalanceCompleted, setGetBalanceCompleted] = useLocalStorage(
    'isGetBalanceCompleted',
    false,
  );
  const [isWithdrawCompleted, setWithdrawCompleted] = useLocalStorage(
    'isWithdrawCompleted',
    false,
  );

  // Exercise 4 — My ERC-20 Token
  const [isMintCompleted, setMintCompleted] = useLocalStorage(
    'isMintCompleted',
    false,
  );
  const [isBalanceOfCompleted, setBalanceOfCompleted] = useLocalStorage(
    'isBalanceOfCompleted',
    false,
  );
  const [isTransferCompleted, setTransferCompleted] = useLocalStorage(
    'isTransferCompleted',
    false,
  );
  const [isBurnCompleted, setBurnCompleted] = useLocalStorage(
    'isBurnCompleted',
    false,
  );
  const [isTransferFromCompleted, setTransferFromCompleted] = useLocalStorage(
    'isTransferFromCompleted',
    false,
  );

  return (
    <ProgressContext.Provider
      value={{
        handleAccountBalanceCompleted: (data) => {
          if (data && !isAccountBalanceCompleted) {
            setAccountBalanceCompleted(true);
          }
        },
        handleBalanceOfCompleted: (data) => {
          if (data && !isBalanceOfCompleted) {
            setBalanceOfCompleted(true);
          }
        },
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
        isAccountBalanceCompleted,
        isBalanceOfCompleted,
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
        toggleAccountBalanceCompleted: () =>
          setAccountBalanceCompleted(!isAccountBalanceCompleted),
        toggleBalanceOfCompleted: () =>
          setBalanceOfCompleted(!isBalanceOfCompleted),
        toggleBurnCompleted: () => setBurnCompleted(!isBurnCompleted),
        toggleDepositCompleted: () => setDepositCompleted(!isDepositCompleted),
        toggleGetBalanceCompleted: () =>
          setGetBalanceCompleted(!isGetBalanceCompleted),
        toggleMintCompleted: () => setMintCompleted(!isMintCompleted),
        toggleReadGreetingCompleted: () =>
          setReadGreetingCompleted(!isReadGreetingCompleted),
        toggleSendGreetingTransactionCompleted: () =>
          setSendGreetingTransactionCompleted(
            !isSendGreetingTransactionCompleted,
          ),
        toggleTransferCompleted: () =>
          setTransferCompleted(!isTransferCompleted),
        toggleTransferFromCompleted: () =>
          setTransferFromCompleted(!isTransferFromCompleted),
        toggleWithdrawCompleted: () =>
          setWithdrawCompleted(!isWithdrawCompleted),
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

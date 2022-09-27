import { useTitle } from 'react-use';

import { BalanceOf } from '../../exercises/4-my-erc-20-token/BalanceOf';
import { Burn } from '../../exercises/4-my-erc-20-token/Burn';
import { Mint } from '../../exercises/4-my-erc-20-token/Mint';
import { Transfer } from '../../exercises/4-my-erc-20-token/Transfer';
import { TransferFrom } from '../../exercises/4-my-erc-20-token/TransferFrom';
import { useProgress } from '../app/Progress';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function MyERC20TokenPage() {
  useTitle('ERC-20 Token | React Dapp');
  const {
    handleBalanceOfCompleted,
    handleBurnCompleted,
    handleMintCompleted,
    handleTransferCompleted,
    handleTransferFromCompleted,
    isBalanceOfCompleted,
    isBurnCompleted,
    isMintCompleted,
    isTransferCompleted,
    isTransferFromCompleted,
    toggleBalanceOfCompleted,
    toggleBurnCompleted,
    toggleMintCompleted,
    toggleTransferCompleted,
    toggleTransferFromCompleted,
  } = useProgress();

  return (
    <>
      <Subheading>Exercise 4</Subheading>
      <h1>Create an ERC-20 Token</h1>
      <p>In this exercise we are going to create a simple ERC-20 token.</p>

      <blockquote>
        Check out the official OpenZeppelin token standard for further
        reference:{' '}
        <a
          href="https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20
        </a>
      </blockquote>

      <h2>Task 1 — Mint some token</h2>
      <Window
        isCompleted={isMintCompleted}
        onMarkComplete={toggleMintCompleted}
      >
        <Mint onSuccess={handleMintCompleted} />
      </Window>
      {isMintCompleted && (
        <>
          <h2>Task 2 — View Balance of an Address</h2>
          <Window
            isCompleted={isBalanceOfCompleted}
            onMarkComplete={toggleBalanceOfCompleted}
          >
            <BalanceOf onSuccess={handleBalanceOfCompleted} />
          </Window>
        </>
      )}
      {isBalanceOfCompleted && (
        <>
          <h2>Task 3 — Transfer some token</h2>
          <Window
            isCompleted={isTransferCompleted}
            onMarkComplete={toggleTransferCompleted}
          >
            <Transfer onSuccess={handleTransferCompleted} />
          </Window>
        </>
      )}
      {isTransferCompleted && (
        <>
          <h2>Task 4 — Burn some token</h2>
          <Window
            isCompleted={isBurnCompleted}
            onMarkComplete={toggleBurnCompleted}
          >
            <Burn onSuccess={handleBurnCompleted} />
          </Window>
        </>
      )}
      {isBurnCompleted && (
        <>
          <h2>⭐️ Bonus Task — Transfer from another address</h2>
          <Window
            isCompleted={isTransferFromCompleted}
            onMarkComplete={toggleTransferFromCompleted}
          >
            <TransferFrom onSuccess={handleTransferFromCompleted} />
          </Window>
        </>
      )}
      <PageNavigation>
        <PageNavigationLink direction="back" to="/ether-wallet">
          Exercise 3 — Deposit and Withdraw Ether
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

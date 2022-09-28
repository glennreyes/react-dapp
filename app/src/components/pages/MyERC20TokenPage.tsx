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
      <pre>
        <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address payable private _owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _owner = payable(msg.sender);
    }

    // TODO: Implement mint()

    // TODO: Implement burn()
}`}</code>
      </pre>
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

      <h2>Task 1 — 🌱 Mint some token</h2>
      <p>
        In order to increase the total supply of our own token, we need to mint
        them (<em>create</em> them out of nowhere). The goal of this task is
        create a function in the contract that wraps the internal{' '}
        <code>_mint</code> function for creating new tokens.
      </p>
      <pre>
        <code>
          {`function mint(uint amount) external {
    _mint(msg.sender, amount);
}`}
        </code>
      </pre>
      <p>
        Since the function above allows everyone to mint new tokens, it is not a
        bad idea to only allow a handful of accounts to mint tokens. In this
        task let's only allow the deployer (account that deployed the contract)
        to mint tokens:
      </p>
      <pre>
        <code>
          {`function mint(uint amount) external {
    require(msg.sender == _owner, "Only the owner can mint new tokens");
    _mint(msg.sender, amount);
}`}
        </code>
      </pre>

      <Window
        isCompleted={isMintCompleted}
        onMarkComplete={toggleMintCompleted}
      >
        <Mint onSuccess={handleMintCompleted} />
      </Window>
      {isMintCompleted && (
        <>
          <h2>Task 2 — 💰 View Balance of an Address</h2>
          <p>
            By default, the bare ERC20 implementation allows to read the balance
            from any account. The goal of this task would be to implement the{' '}
            <code>balanceOf</code> contract method in the React application.
          </p>
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
          <h2>Task 3 — 💳 Transfer some token</h2>
          <p>
            Implement transfer token so that we can transfer the token from the
            current connected account to another account.
          </p>
          <blockquote>
            To verify, send the token to another account as provided by the
            default accounts.
          </blockquote>
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
          <h2>Task 4 — 🔥 Burn some token</h2>
          <p>
            The more tokens are minted as the total supply of the tokens
            increase, the more they typically decrease in value.
          </p>
          <p>
            Burning the tokens ("remove" them and decrease the total supply)
            allows us to drive against that. Similarly to <code>mint</code>, the
            goal here is to create a contract function that wraps the internal{' '}
            <code>_burn</code> function of our ERC20 smart contract.
          </p>
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
          <h2>⭐️ Bonus Task — 🤖 Transfer from another address</h2>
          <p>
            In this task, we want to delegate a token transfer of a certain
            amount but from another address.
          </p>
          <p>
            This can be accomplished by following two steps and transactions:
          </p>
          <ol>
            <li>
              Provide another address a certain amount (allowance) to transfer
              tokens (<code>approve</code>)
            </li>
            <li>
              Execute a transaction with an amount on behalf of an address (
              <code>transferFrom</code>)
            </li>
          </ol>
          <p>
            ERC-20 comes with the following two functions that allows us to do
            that:
          </p>
          <pre>
            <code>
              {`function approve(address spender, uint256 amount) public virtual override returns (bool)

function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool)`}
            </code>
          </pre>
          <p>
            Check out the implementation in the OpenZeppelin ERC20 smart
            contract and implement it along with the React components from the
            previous exercises that we are already familiar with.
          </p>
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

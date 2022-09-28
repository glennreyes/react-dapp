import { useTitle } from 'react-use';

import { DepositEther } from '../../exercises/3-ether-wallet/DepositEther';
import { GetBalance } from '../../exercises/3-ether-wallet/GetBalance';
import { WithdrawEther } from '../../exercises/3-ether-wallet/WithdrawEther';
import { useProgress } from '../app/Progress';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function EtherWalletPage() {
  useTitle('Ether Wallet | React Dapp');

  const {
    handleDepositCompleted,
    handleGetBalanceCompleted,
    handleWithdrawCompleted,
    isDepositCompleted,
    isGetBalanceCompleted,
    isWithdrawCompleted,
    toggleDepositCompleted,
    toggleGetBalanceCompleted,
    toggleWithdrawCompleted,
  } = useProgress();

  return (
    <>
      <Subheading>Exercise 3</Subheading>
      <h1>Deposit and Withdraw Ether</h1>
      <p>
        Now that we know how to read and write to the blockchain, it is time for
        us to learn how to send and receive Ether to and from a smart contract.
      </p>
      <p>
        Let's get started by adding following smart contract to our protocol:
      </p>
      <pre>
        <code>
          {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "caller is not owner");
        payable(msg.sender).transfer(_amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}`}
        </code>
      </pre>
      <h2>Task 1 — 💰 Deposit Ether</h2>
      <p>
        Deposit some Ether to the contract by sending a transaction and passing
        the value.
      </p>
      <Window
        isCompleted={isDepositCompleted}
        onMarkComplete={toggleDepositCompleted}
      >
        <DepositEther onSuccess={handleDepositCompleted} />
      </Window>
      {isDepositCompleted && (
        <>
          <h2>Task 2 — 🏧 Check the balance</h2>
          <p>
            Check the balance of the contract by calling the{' '}
            <code>getBalance</code> function.
          </p>
          <Window
            isCompleted={isGetBalanceCompleted}
            onMarkComplete={toggleGetBalanceCompleted}
          >
            <GetBalance onSuccess={handleGetBalanceCompleted} />
          </Window>
        </>
      )}
      {isGetBalanceCompleted && (
        <>
          <h2>Task 3 — 💸 Withdraw Ether</h2>
          <p>
            Withdraw some Ether from the contract by sending a transaction with
            the amount you want to withdraw.
          </p>
          <Window
            isCompleted={isWithdrawCompleted}
            onMarkComplete={toggleWithdrawCompleted}
          >
            <WithdrawEther onSuccess={handleWithdrawCompleted} />
          </Window>
        </>
      )}
      {isWithdrawCompleted && (
        <>
          <h2>⭐️ Bonus Task — ✨ Explore require statements & conditions</h2>
          <ol>
            <li>
              Sign in with a different wallet in MetaMask and try to withdraw
              Ether to see what happens when invoking the error.
            </li>
            <li>
              Add a condition in the <code>getBalance</code> function to only
              allow a displaying the balance from a specific address
            </li>
          </ol>
          <blockquote>
            Check out{' '}
            <a
              href="https://solidity-by-example.org"
              target="_blank"
              rel="noreferrer"
            >
              Solidy By Example
            </a>{' '}
            to find out more about the <code>require</code> syntax for error
            conditions
          </blockquote>
        </>
      )}
      <PageNavigation>
        <PageNavigationLink direction="back" to="/greeter">
          Exercise 2 — Deposit and Withdraw Ether
        </PageNavigationLink>
        <PageNavigationLink to="/my-erc-20-token">
          Exercise 4 — Create an ERC-20 token
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

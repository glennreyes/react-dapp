import { useTitle } from 'react-use';

import { DepositEther } from '../../exercises/3-ether-wallet/DepositEther';
import { GetBalance } from '../../exercises/3-ether-wallet/GetBalance';
import { WithdrawEther } from '../../exercises/3-ether-wallet/WithdrawEther';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function EtherWalletPage() {
  useTitle('Ether Wallet | React Dapp');

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
      <h2>Task 1 — Deposit Ether</h2>
      <p>
        Deposit some Ether to the contract by sending a transaction and passing
        the value.
      </p>
      <Window>
        <DepositEther />
      </Window>
      <h2>Task 2 — Check the balance</h2>
      <p>
        Check the balance of the contract by calling the <code>getBalance</code>{' '}
        function.
      </p>
      <Window>
        <GetBalance />
      </Window>
      <h2>Task 3 — Withdraw Ether</h2>
      <p>
        Withdraw some Ether from the contract by sending a transaction with the
        amount you want to withdraw.
      </p>
      <Window>
        <WithdrawEther />
      </Window>
      <h2>⭐️ Bonus Task — Explore withdrawing from a different wallet</h2>
      <p>
        Sign in to MetaMask with a different wallet and try to withdraw Ether to
        see what happens.
      </p>
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

import { useTitle } from 'react-use';

import { ReadGreetingData } from '../../exercises/2-greeting/ReadGreetingData';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function GreeterPage() {
  useTitle('Greeter | React Dapp');

  return (
    <>
      <Subheading>Exercise 2</Subheading>
      <h1>Read and send transactions</h1>
      <p>
        In this exercise, you will learn how to read and send transactions to
        the blockchain. Before we begin, we are going to add following smart
        contract to the protocol:
      </p>
      <pre>
        <code>
          {`//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import 'hardhat/console.sol';

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log('Deploying a Greeter with greeting:', _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
`}
        </code>
      </pre>
      <h2>Task 1 — Compile the smart contract</h2>
      <ol>
        <li>
          Copy the code above and save it under{' '}
          <code>protocol/contracts/Greeter.sol</code>
        </li>
        <li>
          Next, compile the code by running <code>pnpm compile</code>. This
          command will run <code>hardhat compile</code> under the hood and it
          will generate artifacts such as the byte code and an ABI (application
          binary interface) that will be necessary to interact with it in the
          frontend .
        </li>
      </ol>
      <h2>Task 2 — Deploy the smart contract</h2>
      <blockquote>
        Make sure you have the local Ethereum network running. You can start by
        the command <code>pnpm run deploy</code>.
      </blockquote>
      <h2>Task 3 — Reading smart contract data</h2>
      <ol>
        <li>
          Open <code>app/src/exercises/2-greeting/ReadGreetingData.tsx</code>{' '}
          and implement reading the greeting from the smart contract.
        </li>
      </ol>
      <Window>
        <ReadGreetingData />
      </Window>
      <h2>Task 4 — Sending transactions</h2>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/">
          Exercise 1 — Connect Wallet
        </PageNavigationLink>
        <PageNavigationLink to="/ether-wallet">
          Exercise 3 — Deposit and Withdraw Ether
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

import { useTitle } from 'react-use';

import { ReadGreetingData } from '../../exercises/2-greeting/ReadGreetingData';
import { SendGreetingDataTransaction } from '../../exercises/2-greeting/SendGreetingDataTransaction';
import { useProgress } from '../app/Progress';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function GreeterPage() {
  useTitle('Greeter | React Dapp');

  const {
    handleReadGreetingCompleted,
    handleSendGreetingTransactionCompleted,
    isReadGreetingCompleted,
    isSendGreetingTransactionCompleted,
    toggleReadGreetingCompleted,
    toggleSendGreetingTransactionCompleted,
  } = useProgress();

  return (
    <>
      <Subheading>Exercise 2</Subheading>
      <h1>Read and send transactions</h1>
      <p>
        In this exercise, we are going to learn how to read and send
        transactions to the blockchain. So we will start by adding the smart
        contract to our protocol under{' '}
        <code>/protocol/contracts/Greeter.sol</code>:
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
      <h2>Task 1 — ⚙️ Compile, test and deploy the smart contract</h2>
      <ol>
        <li>
          Next, compile the code by running <code>pnpm compile</code>. This
          command will run <code>hardhat compile</code> under the hood and it
          will generate artifacts such as the byte code and an ABI (application
          binary interface) that will be necessary to interact with it in the
          frontend .
        </li>
        <li>
          Once the smart contract is compiled, typically you would want to add
          tests to verify that the contract works as intended and to cover as
          much bugs as possible. Learn more about testing smart contracts{' '}
          <a
            href="https://hardhat.org/hardhat-runner/docs/guides/test-contracts"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . In this workshop we are going to skip this phase and move on with
          deploying the contract.
        </li>
        <li>
          <p>
            For that, we have to add following lines to our deploy script at
            <code>protocol/scripts/deploy.ts</code> to get the contract
            deployed:
          </p>
          <pre>
            <code>
              {`const Greeter = await ethers.getContractFactory('Greeter');
const greeter = await Greeter.deploy('Hello, React Alicante!');
await greeter.deployed();

console.info(\`Greeter deployed to \${greeter.address}\`);`}
            </code>
          </pre>
        </li>
      </ol>
      <h2>Task 2 — 📖 Reading smart contract data</h2>
      <p>
        In this task we are going to implement the <code>greet()</code> function
        of the contract. The goal is that the box below is displaying the
        returned data of that function.
      </p>
      <blockquote>
        ℹ️ Before to begin, make sure the deployment for{' '}
        <code>Greeter.sol</code> is set up. Make sure you have the local
        Ethereum network running (started via `pnpm node`) and it is deployed on
        the Hardhat network via `pnpm run deploy`.
      </blockquote>
      <p>
        Open <code>app/src/exercises/2-greeting/ReadGreetingData.tsx</code> and
        implement reading the greeting from the smart contract.
      </p>
      <h3>Required parameters</h3>
      <ol>
        <li>Contract address</li>
        <li>Contract ABI</li>
        <li>Function name</li>
      </ol>
      <p>
        Check out <a href="https://wagmi.sh/docs">wagmi Docs</a> for further
        help on getting this implemented.
      </p>
      <Window
        isCompleted={isReadGreetingCompleted}
        onMarkComplete={toggleReadGreetingCompleted}
      >
        <ReadGreetingData onSuccess={handleReadGreetingCompleted} />
      </Window>
      {isReadGreetingCompleted && (
        <>
          <h2>Task 3 — ✉️ Sending transactions</h2>
          <p>
            Open{' '}
            <code>
              app/src/exercises/2-greeting/SendGreetingDataTransaction.tsx
            </code>{' '}
            and implement reading the greeting from the smart contract.
          </p>
          <h3>Required parameters</h3>
          <ol>
            <li>Contract address</li>
            <li>Contract ABI</li>
            <li>Function name</li>
            <li>Function arguments</li>
          </ol>
          <p>
            Check out <a href="https://wagmi.sh/docs">wagmi Docs</a> for further
            help on getting this implemented.
          </p>
          <Window
            isCompleted={isSendGreetingTransactionCompleted}
            onMarkComplete={toggleSendGreetingTransactionCompleted}
          >
            <SendGreetingDataTransaction
              onSuccess={handleSendGreetingTransactionCompleted}
            />
          </Window>
        </>
      )}
      {isSendGreetingTransactionCompleted && (
        <>
          <h2>
            ⭐️ Bonus Task — ♻️ Refetch right after successful transaction
          </h2>
          <p>
            Once a transaction has been successfully submitted, ideally we see
            the updated values right away in the UI. There are multiple ways to
            accomplish that, go ahead and explore on how to do that.
          </p>
        </>
      )}
      <PageNavigation>
        <PageNavigationLink direction="back" to="/connect-wallet">
          Exercise 1 — Connect Wallet
        </PageNavigationLink>
        <PageNavigationLink to="/ether-wallet">
          Exercise 3 — Deposit and Withdraw Ether
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

import { Link } from 'react-router-dom';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Code } from '../ui/Code';
import { CodeLine } from '../ui/CodeLine';
import { Subheading } from '../ui/SubHeading';

export function HomePage() {
  return (
    <>
      <Subheading>Welcome to the</Subheading>
      <h1>React Dapp Workshop! ☀️ 🇪🇸</h1>
      <p>
        In this workshop we will be working on a simple Ethereum Dapp using
        React. We will walk through various exercises starting by getting an
        overview of the stack.
      </p>
      <p>
        After we feel comfortable working with the stack, we will be compiling
        Ethereum smart contracts and deploy them to a local Ethereum Network. We
        will then interact with the contracts on the Ethereum blockchain using a
        React app.
      </p>
      <h2>📚 Table of contents</h2>
      <ol>
        <li>
          <Link to="/connect-wallet">Exercise 1 — Connect Wallet</Link>
        </li>
        <li>
          <Link to="/greeter">Exercise 2 — Read and Send Transactions</Link>
        </li>
        <li>
          <Link to="/ether-wallet">
            Exercise 3 — Deposit and Withdraw Ether
          </Link>
        </li>
        <li>
          <Link to="/my-erc-20-token">Exercise 4 — Create an ERC-20 Token</Link>
        </li>
      </ol>
      <h2>🍽 The tech stack</h2>
      <ul>
        <li>
          <code>/app</code>: React application using{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            Vite
          </a>
        </li>
        <li>
          <code>/protocol</code>: Ethereum development environment using{' '}
          <a href="https://hardhat.org" target="_blank" rel="noreferrer">
            Hardhat
          </a>
        </li>
      </ul>
      <h2>⌨️ Useful commands</h2>
      <h3>🦄 App</h3>
      <h4>Start development server</h4>
      <Code>
        <CodeLine>pnpm dev</CodeLine>
      </Code>
      <h3>🚀 Protocol</h3>
      <h4>Compile contracts</h4>
      <Code>
        <CodeLine>pnpm compile</CodeLine>
      </Code>
      <h4>Start network</h4>
      <Code>
        <CodeLine>pnpm node</CodeLine>
      </Code>
      <h4>Deploy contracts</h4>
      <Code>
        <CodeLine>pnpm run deploy</CodeLine>
      </Code>
      <PageNavigation className="lg:flex-row-reverse">
        <PageNavigationLink to="/connect-wallet">
          Exercise 1 — Connect Wallet
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

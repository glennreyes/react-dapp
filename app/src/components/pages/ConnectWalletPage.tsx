import { useTitle } from 'react-use';
import { chain, useAccount, useNetwork } from 'wagmi';

import { BalanceDisplay } from '../../exercises/1-connect-wallet/BalanceDisplay';
import { ConnectWalletButton } from '../../exercises/1-connect-wallet/ConnectWalletButton';
import { SwitchNetworkButton } from '../../exercises/1-connect-wallet/SwitchNetworkButton';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function ConnectWalletPage() {
  useTitle('Connect Wallet | React Dapp');
  const { isConnected } = useAccount();
  const network = useNetwork();

  const isFirstTaskCompleted = isConnected;
  const isSecondTaskCompleted = network.chain?.id === chain.hardhat.id;

  return (
    <>
      <Subheading>Exercise 1</Subheading>
      <h1>Connect Wallet</h1>
      <blockquote className="not-italic">
        Before to proceed, make sure:
        <ul>
          <li>MetaMask is installed</li>
          <li>Hardhat network is running</li>
          <li>Account #0 is imported to MetaMask</li>
        </ul>
      </blockquote>
      <p>
        Once we have MetaMask installed and our account imported, we can start
        implement the logic of our Dapp. The first thing we need to do is
        connect the wallet.
      </p>
      <h2>Task 1 — Connect Wallet</h2>
      <ol>
        <li>
          To get started, check out{' '}
          <code>
            /app/src/exercises/1-connect-wallet/ConnectWalletButton.tsx
          </code>{' '}
          to solve the missing pieces.
        </li>
      </ol>
      <Window isCompleted={isFirstTaskCompleted}>
        <ConnectWalletButton className="btn-lg btn" />
      </Window>
      {isFirstTaskCompleted && (
        <>
          <h2>Task 2 — Switch Network</h2>
          <p>
            We will be using the Hardhat network on localhost. In this step we
            want to make sure that the wallet uses the selected network.
          </p>
          <blockquote>
            This button will display a <em>Switch Network</em> button if the
            wallet is connected to a different network. It will display a{' '}
            <em>Connected to Hardhat</em> text if the wallet is connected to the
            Hardhat network.
          </blockquote>
          <ol>
            <li>
              Head to{' '}
              <code>
                /app/src/exercises/1-connect-wallet/SwitchNetworkButton.tsx
              </code>{' '}
              and try to get this right.
            </li>
          </ol>
          <blockquote>
            In case it worked without doing anything, try to switch to a
            different network in MetaMask and see what happens in the app.
          </blockquote>
          <Window isCompleted={isSecondTaskCompleted}>
            <SwitchNetworkButton className="btn-lg btn" />
          </Window>
        </>
      )}
      {isSecondTaskCompleted && (
        <>
          <h2>⭐️ Bonus Task — Display Balance</h2>
          <ol>
            <li>
              Go to{' '}
              <code>
                /app/src/exercises/1-connect-wallet/BalanceDisplay.tsx
              </code>{' '}
              and try to get this right.
            </li>
          </ol>
          <Window>
            <BalanceDisplay className="btn-lg btn" />
          </Window>
          <PageNavigation>
            <PageNavigationLink direction="back" to="/">
              Home
            </PageNavigationLink>
            <PageNavigationLink to="/greeter">
              Exercise 2 — Read and Send Transactions
            </PageNavigationLink>
          </PageNavigation>
        </>
      )}
    </>
  );
}

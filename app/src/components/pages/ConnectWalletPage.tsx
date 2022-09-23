import { useTitle } from 'react-use';

import { ConnectWalletButton } from '../../exercises/1-connect-wallet/ConnectWalletButton';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function ConnectWalletPage() {
  useTitle('Connect Wallet | React Dapp');

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
        connect
      </p>
      <p>
        In order to , switch over to{' '}
        <code>/app/src/exercises/1-connect-wallet</code> and implement the
        missing TODOs
      </p>
      <Window>
        <ConnectWalletButton className="btn-lg btn" />
      </Window>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/">
          Home
        </PageNavigationLink>
        <PageNavigationLink to="/ether-wallet">
          Exercise 2 — Read and Send Transactions
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

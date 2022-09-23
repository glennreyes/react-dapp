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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nesciunt, tenetur quae illum esse fuga tempora expedita accusantium?
        Amet maxime aperiam doloremque dignissimos consequatur corrupti
        praesentium aspernatur placeat esse laboriosam.
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

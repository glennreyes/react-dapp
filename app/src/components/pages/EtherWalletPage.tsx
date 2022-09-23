import { useTitle } from 'react-use';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';

export function EtherWalletPage() {
  useTitle('Ether Wallet | React Dapp');

  return (
    <>
      <Subheading>Exercise 3</Subheading>
      <h1>Deposit and Withdraw Ether</h1>
      {/* TODO: Add instructions */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nesciunt, tenetur quae illum esse fuga tempora expedita accusantium?
        Amet maxime aperiam doloremque dignissimos consequatur corrupti
        praesentium aspernatur placeat esse laboriosam.
      </p>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/greeter">
          Exercise 2 — Deposit and Withdraw Ether
        </PageNavigationLink>
        <PageNavigationLink to="/erc-20-token">
          Exercise 4 — Create an ERC-20 token
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

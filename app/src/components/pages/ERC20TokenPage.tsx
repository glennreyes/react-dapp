import { useTitle } from 'react-use';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';

export function ERC20TokenPage() {
  useTitle('ERC-20 Token | React Dapp');

  return (
    <>
      <Subheading>Exercise 4</Subheading>
      <h1>Create an ERC-20 Token</h1>
      {/* TODO: Add instructions */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nesciunt, tenetur quae illum esse fuga tempora expedita accusantium?
        Amet maxime aperiam doloremque dignissimos consequatur corrupti
        praesentium aspernatur placeat esse laboriosam.
      </p>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/ether-wallet">
          Exercise 3 — Deposit and Withdraw Ether
        </PageNavigationLink>
        <PageNavigationLink to="/erc-721-nft">
          Exercise 5 — Create an NFT
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

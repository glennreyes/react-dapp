import { useTitle } from 'react-use';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';

export function ERC721NonFungibleTokenPage() {
  useTitle('ERC-721 NFT | React Dapp');

  return (
    <>
      <Subheading>Exercise 5</Subheading>
      <h1>Create an NFT</h1>
      {/* TODO: Add instructions */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nesciunt, tenetur quae illum esse fuga tempora expedita accusantium?
        Amet maxime aperiam doloremque dignissimos consequatur corrupti
        praesentium aspernatur placeat esse laboriosam.
      </p>
      <h2>Task 1 — Mint some NFT</h2>
      <h2>Task 1 — Mint some NFT</h2>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/erc-20-token">
          Exercise 4 — Create an ERC-20 Token
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

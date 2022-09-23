import { useTitle } from 'react-use';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';

export function GreeterPage() {
  useTitle('Greeter | React Dapp');

  return (
    <>
      <Subheading>Exercise 2</Subheading>
      <h1>Read and send transactions</h1>
      {/* TODO: Add instructions */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nesciunt, tenetur quae illum esse fuga tempora expedita accusantium?
        Amet maxime aperiam doloremque dignissimos consequatur corrupti
        praesentium aspernatur placeat esse laboriosam.
      </p>
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

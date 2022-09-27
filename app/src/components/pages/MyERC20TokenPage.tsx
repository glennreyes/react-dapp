import { useTitle } from 'react-use';

import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';

export function MyERC20TokenPage() {
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
      <h2>Task 1 — Mint some token</h2>
      <h2>Task 2 — Transfer some token</h2>
      <h2>Task 3 — Burn some token</h2>
      <h2>Task 4 — Transfer from another address</h2>
      <h2>⭐️ Bonus Task — tbd</h2>
      <p>
        Check out:{' '}
        <ul>
          <li>
            <a
              href="https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20
            </a>
          </li>
        </ul>
      </p>
      <PageNavigation>
        <PageNavigationLink direction="back" to="/ether-wallet">
          Exercise 3 — Deposit and Withdraw Ether
        </PageNavigationLink>
        <PageNavigationLink to="/my-erc-721-nft">
          Exercise 5 — Create an NFT
        </PageNavigationLink>
      </PageNavigation>
    </>
  );
}

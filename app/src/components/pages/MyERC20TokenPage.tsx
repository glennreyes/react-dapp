import { useTitle } from 'react-use';

import { Burn } from '../../exercises/4-my-erc-20-token/Burn';
import { Mint } from '../../exercises/4-my-erc-20-token/Mint';
import { Transfer } from '../../exercises/4-my-erc-20-token/Transfer';
import { TransferFrom } from '../../exercises/4-my-erc-20-token/TransferFrom';
import { useProgress } from '../app/Progress';
import { PageNavigation } from '../page-navigation/PageNavigation';
import { PageNavigationLink } from '../page-navigation/PageNavigationLink';
import { Subheading } from '../ui/SubHeading';
import { Window } from '../ui/Window';

export function MyERC20TokenPage() {
  useTitle('ERC-20 Token | React Dapp');
  const {
    handleBurnCompleted,
    handleMintCompleted,
    handleTransferCompleted,
    handleTransferFromCompleted,
    isBurnCompleted,
    isMintCompleted,
    isTransferCompleted,
  } = useProgress();

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
      <Window>
        <Mint onSuccess={handleMintCompleted} />
      </Window>
      {isMintCompleted && (
        <>
          <h2>Task 2 — Transfer some token</h2>
          <Window>
            <Transfer onSuccess={handleTransferCompleted} />
          </Window>
        </>
      )}
      {isTransferCompleted && (
        <>
          <h2>Task 3 — Burn some token</h2>
          <Window>
            <Burn onSuccess={handleBurnCompleted} />
          </Window>
        </>
      )}
      {isBurnCompleted && (
        <>
          <h2>Task 4 — Transfer from another address</h2>
          <Window>
            <TransferFrom onSuccess={handleTransferFromCompleted} />
          </Window>
        </>
      )}
      <blockquote>
        Check out the official OpenZeppelin token standard for further
        reference:{' '}
        <a
          href="https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20
        </a>
      </blockquote>
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

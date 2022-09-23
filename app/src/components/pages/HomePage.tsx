export function HomePage() {
  return (
    <>
      <h1 className="text-center">Welcome to the React Dapp</h1>
      <p>
        In this workshop we will build a simple Dapp using React and Ethereum.
        We will walk through various exercises starting by getting familiar with
        the stack, then compiling and deploying a simple smart contract and then
        interact with it in the React app.
      </p>
      <p>
        In order to perform transactions we will need to set up a wallet (in
        this workshop we will be using MetaMask) and connect it to the dapp.
      </p>
      <p>
        Towards the end we will be creating a simple ERC20 token and ERC721
        token (NFT) and interact with it.
      </p>
    </>
  );
}

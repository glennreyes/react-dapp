import { ethers } from 'hardhat';

async function main() {
  // /**
  //  * GREETER
  //  */
  // const Greeter = await ethers.getContractFactory('Greeter');
  // const greeter = await Greeter.deploy('Hello, React Alicante!');
  // await greeter.deployed();
  // console.info(`Greeter deployed to ${greeter.address}`);

  // /**
  //  * ETHER WALLET
  //  */
  // const EtherWallet = await ethers.getContractFactory('EtherWallet');
  // const etherWallet = await EtherWallet.deploy();
  // await etherWallet.deployed();
  // console.info(`EtherWallet deployed to ${etherWallet.address}`);

  /**
   * MY ERC20 TOKEN
   */
  const MyToken = await ethers.getContractFactory('MyToken');
  const myToken = await MyToken.deploy('Glenn Token', 'GLN');
  await myToken.deployed();
  console.info(`MyToken deployed to ${myToken.address}`);

  console.info('Deployment completed! 🚀');
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

import { ethers } from 'hardhat';
import { writeFile } from 'node:fs/promises';

async function main() {
  /**
   * GREETER
   */
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello, React Alicante!');
  await greeter.deployed();
  console.info(`Greeter deployed to ${greeter.address}`);

  /**
   * ETHER WALLET
   */
  const EtherWallet = await ethers.getContractFactory('EtherWallet');
  const etherWallet = await EtherWallet.deploy();
  await etherWallet.deployed();
  console.info(`EtherWallet deployed to ${etherWallet.address}`);

  /**
   * MY ERC20 TOKEN
   */
  const MyToken = await ethers.getContractFactory('MyToken');
  const myToken = await MyToken.deploy('Glenn Token', 'GLN');
  await myToken.deployed();
  console.info(`MyToken deployed to ${myToken.address}`);

  // Write the contract addresses to a file
  await writeFile(
    'deployment.json',
    JSON.stringify(
      {
        etherWallet: { address: etherWallet.address },
        greeter: { address: greeter.address },
        myToken: { address: myToken.address },
      },
      null,
      2,
    ),
  );

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

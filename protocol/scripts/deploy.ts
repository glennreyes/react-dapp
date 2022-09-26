import { ethers } from 'hardhat';

async function main() {
  /**
   * LOCK
   */
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  // const lockedAmount = ethers.utils.parseEther('1');
  // const Lock = await ethers.getContractFactory('Lock');
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  // await lock.deployed();
  // console.info(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.deployTransaction.from}`,
  // );

  /**
   * GREETER
   */
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello, React Alicante!');
  await greeter.deployed();
  console.info(`Greeter deployed to ${greeter.deployTransaction.from}`);

  /**
   * ETHER WALLET
   */
  const EtherWallet = await ethers.getContractFactory('EtherWallet');
  const etherWallet = await EtherWallet.deploy();
  await etherWallet.deployed();
  console.info(`EtherWallet deployed to ${greeter.deployTransaction.from}`);

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

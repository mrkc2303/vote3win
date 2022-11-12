// require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { PRIVATE_KEY } = process.env;
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// const privateKey = new Buffer(process.env.["PRIVATE_KEY"], "hex"));
var privateKey = `0x${PRIVATE_KEY}`



// const privateKey = "70e05ead1595c72e4610f1c51d72817e81d28ff8481fefde11328bdcbcd89215";
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // harmonytestnet: {
    //   url: `https://api.s0.b.hmny.io`,
    //   accounts: [privateKey],
    // },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [privateKey],
    },
  },
};
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "process.api.QUICKNODE_API_KEY_URL",
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};

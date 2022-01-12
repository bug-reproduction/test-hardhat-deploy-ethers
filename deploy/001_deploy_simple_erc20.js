
const {parseEther} = require('ethers/lib/utils');

const func = async function (hre) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, simpleERC20Beneficiary} = await getNamedAccounts();

  await deploy('SimpleERC20', {
    from: deployer,
    args: [simpleERC20Beneficiary, parseEther('1000000000')],
    log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
  });
};
module.exports = func;
func.tags = ['SimpleERC20'];

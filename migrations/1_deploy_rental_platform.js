const fs = require("fs");

const RentalPlatform = artifacts.require("RentalPlatform");

module.exports = async function (deployer) {
  await deployer.deploy(RentalPlatform);
  const instance = await RentalPlatform.deployed();
  let rentalPlatformAddress = await instance.address;
  console.log("rentalPlatformAddress = ", rentalPlatformAddress);

  let config = `export const rentalPlatformAddress = "${rentalPlatformAddress}"`;

  let data = JSON.stringify(config);

  fs.writeFileSync("config.js", JSON.parse(data));
};
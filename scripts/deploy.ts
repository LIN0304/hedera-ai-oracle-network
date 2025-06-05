import { ethers } from "hardhat";

async function main() {
  const Oracle = await ethers.getContractFactory("AIOracle");
  const oracle = await Oracle.deploy();
  await oracle.deployed();
  console.log("AIOracle deployed to:", oracle.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { expect } from "chai";
import { ethers } from "hardhat";

describe("AIOracle", function () {
  it("emits event on submit", async function () {
    const Oracle = await ethers.getContractFactory("AIOracle");
    const oracle = await Oracle.deploy();
    await oracle.deployed();
    await expect(oracle.submitData("0x01"))
      .to.emit(oracle, "DataSubmitted");
  });
});

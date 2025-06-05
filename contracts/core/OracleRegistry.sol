// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract OracleRegistry {
    mapping(bytes32 => address) public oracles;

    function registerOracle(bytes32 id, address oracle) external {
        oracles[id] = oracle;
    }

    function getOracle(bytes32 id) external view returns (address) {
        return oracles[id];
    }
}

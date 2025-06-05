// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IDataFeed {
    function latestData() external view returns (bytes memory);
}

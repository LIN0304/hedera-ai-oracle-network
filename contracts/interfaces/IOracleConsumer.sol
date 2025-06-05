// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IOracleConsumer {
    function receiveData(bytes calldata data) external;
}

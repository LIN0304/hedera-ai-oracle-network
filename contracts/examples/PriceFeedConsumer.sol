// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../interfaces/IOracleConsumer.sol";

contract PriceFeedConsumer is IOracleConsumer {
    bytes public latest;

    function receiveData(bytes calldata data) external override {
        latest = data;
    }
}

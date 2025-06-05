// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title AIOracle
/// @notice Minimal oracle contract placeholder
contract AIOracle {
    event DataSubmitted(address indexed agent, bytes data);

    function submitData(bytes calldata data) external {
        emit DataSubmitted(msg.sender, data);
    }
}

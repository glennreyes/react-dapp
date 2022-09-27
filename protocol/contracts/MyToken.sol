// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address payable private _owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _owner = payable(msg.sender);
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 100 * 18**uint(decimals()));
    }

    function mint(uint amount) external {
        require(msg.sender == _owner, "Only the owner can mint new tokens");
        _mint(msg.sender, amount);
    }
}

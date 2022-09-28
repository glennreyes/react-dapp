// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    address payable private _owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _owner = payable(msg.sender);
    }

    function burn(uint amount) external {
        require(msg.sender == _owner, "Only the owner can burn new tokens");
        _burn(msg.sender, amount);
    }

    function mint(uint amount) external {
        require(msg.sender == _owner, "Only the owner can mint new tokens");
        _mint(msg.sender, amount);
    }
}

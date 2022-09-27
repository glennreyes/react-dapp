import { DrawerMenu } from '../drawer/DrawerMenu';
import { DrawerMenuItem } from '../drawer/DrawerMenuItem';
import { DrawerMenuLink } from '../drawer/DrawerMenuLink';

export function Menu() {
  return (
    <DrawerMenu>
      <DrawerMenuItem>
        <DrawerMenuLink to="/">Home</DrawerMenuLink>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <DrawerMenuLink to="/connect-wallet">
          1️⃣ — Connect Wallet
        </DrawerMenuLink>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <DrawerMenuLink to="/greeter">2️⃣ — Greeter</DrawerMenuLink>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <DrawerMenuLink to="/ether-wallet">
          3️⃣ — Deposit & Withdraw Ether
        </DrawerMenuLink>
      </DrawerMenuItem>
      <DrawerMenuItem>
        <DrawerMenuLink to="/my-erc-20-token">
          4️⃣ — Create an ERC-20 Token
        </DrawerMenuLink>
      </DrawerMenuItem>
    </DrawerMenu>
  );
}

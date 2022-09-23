import { Link } from 'react-router-dom';

import { useDrawerContext } from './Drawer';

export function DrawerMenu() {
  const { close } = useDrawerContext();

  return (
    <ul className="menu bg-base-100 text-base-content w-80 overflow-y-auto p-4">
      <li>
        <Link onClick={close} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={close} to="/connect-wallet">
          1 — Connect Wallet
        </Link>
      </li>
      <li>
        <Link onClick={close} to="/greeter">
          2 — Greeter
        </Link>
      </li>
      <li>
        <Link onClick={close} to="/ether-wallet">
          3 — Ether Wallet
        </Link>
      </li>
      <li>
        <Link onClick={close} to="/erc-20">
          4 — My ERC20 Token
        </Link>
      </li>
      <li>
        <Link onClick={close} to="/erc-721">
          5 — My ERC721 Token (NFT)
        </Link>
      </li>
    </ul>
  );
}

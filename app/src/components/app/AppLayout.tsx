import { Outlet } from 'react-router-dom';

import { ConnectWalletButton } from '../../exercises/1-connect-wallet/ConnectWalletButton';
import { Drawer } from '../drawer/Drawer';
import { DrawerButton } from '../drawer/DrawerButton';
import { Article } from '../layout/Article';
import { Container } from '../layout/Container';
import { Main } from '../layout/Main';
import { Navbar } from '../layout/Navbar';
import { Menu } from './Menu';

export function AppLayout() {
  return (
    <Drawer menu={<Menu />}>
      <Navbar title="React Dapp">
        <ConnectWalletButton />
        <DrawerButton>Open Drawer</DrawerButton>
      </Navbar>
      <Main>
        <Container>
          <Article>
            <Outlet />
          </Article>
        </Container>
      </Main>
    </Drawer>
  );
}

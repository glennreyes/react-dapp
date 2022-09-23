import { Outlet } from 'react-router-dom';

import { ConnectWalletButton } from '../../exercises/1-connect-wallet/ConnectWalletButton';
import { Drawer } from '../drawer/Drawer';
import { DrawerButton } from '../drawer/DrawerButton';
import { DrawerMenu } from '../drawer/DrawerMenu';
import { Article } from './Article';
import { Container } from './Container';
import { Main } from './Main';
import { Navbar } from './Navbar';

export function AppLayout() {
  return (
    <Drawer menu={<DrawerMenu />}>
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

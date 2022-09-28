import { Outlet } from 'react-router-dom';

import { AccountBalance } from '../../exercises/1-connect-wallet/AccountBalance';
import { ConnectWallet } from '../../exercises/1-connect-wallet/ConnectWallet';
import { SwitchNetwork } from '../../exercises/1-connect-wallet/SwitchNetwork';
import { Drawer } from '../drawer/Drawer';
import { DrawerButton } from '../drawer/DrawerButton';
import { Article } from '../layout/Article';
import { Container } from '../layout/Container';
import { Footer } from '../layout/Footer';
import { Main } from '../layout/Main';
import { Navbar } from '../layout/Navbar';
import { Menu } from './Menu';

export function AppLayout() {
  return (
    <Drawer menu={<Menu />}>
      <Navbar title="React Dapp">
        <SwitchNetwork />
        <AccountBalance />
        <ConnectWallet />
        <DrawerButton>Open Drawer</DrawerButton>
      </Navbar>
      <Main>
        <Container>
          <Article>
            <Outlet />
          </Article>
        </Container>
      </Main>
      <Footer>
        <p>
          Made with 🤍 by Glenn Reyes — 
          <a
            className="link link-accent link-hover"
            href="https://twitter.com/glnnrys"
            target="_blank"
            rel="noreferrer"
          >
            Follow @glnnrys on Twitter
          </a>
        </p>
      </Footer>
    </Drawer>
  );
}

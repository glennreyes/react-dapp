import { Outlet } from 'react-router-dom';

import { BalanceDisplay } from '../../exercises/1-connect-wallet/BalanceDisplay';
import { ConnectWalletButton } from '../../exercises/1-connect-wallet/ConnectWalletButton';
import { SwitchNetworkButton } from '../../exercises/1-connect-wallet/SwitchNetworkButton';
import { Drawer } from '../drawer/Drawer';
import { DrawerButton } from '../drawer/DrawerButton';
import { Article } from '../layout/Article';
import { Container } from '../layout/Container';
import { Footer } from '../layout/Footer';
import { Main } from '../layout/Main';
import { Navbar } from '../layout/Navbar';
import { Menu } from './Menu';
import { Progress } from './Progress';

export function AppLayout() {
  return (
    <Drawer menu={<Menu />}>
      <Navbar title="React Dapp">
        <SwitchNetworkButton />
        <BalanceDisplay />
        <ConnectWalletButton />
        <DrawerButton>Open Drawer</DrawerButton>
      </Navbar>
      <Main>
        <Container>
          <Article>
            <Progress>
              <Outlet />
            </Progress>
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

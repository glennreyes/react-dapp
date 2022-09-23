import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { ConnectWalletPage } from '../pages/ConnectWalletPage';
import { ERC20TokenPage } from '../pages/ERC20TokenPage';
import { ERC721NonFungibleTokenPage } from '../pages/ERC721NonFungibleTokenPage';
import { EtherWalletPage } from '../pages/EtherWalletPage';
import { GreeterPage } from '../pages/GreeterPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AppLayout } from './AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route element={<HomePage />} index />
      <Route element={<ConnectWalletPage />} path="connect-wallet" />
      <Route element={<GreeterPage />} path="greeter" />
      <Route element={<EtherWalletPage />} path="ether-wallet" />
      <Route element={<ERC20TokenPage />} path="erc-20-token" />
      <Route element={<ERC721NonFungibleTokenPage />} path="erc-721-nft" />
      <Route element={<NotFoundPage />} path="*" />
    </Route>,
  ),
);

export function Router() {
  return <RouterProvider router={router} />;
}

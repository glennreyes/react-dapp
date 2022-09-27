import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { ConnectWalletPage } from '../pages/ConnectWalletPage';
import { EtherWalletPage } from '../pages/EtherWalletPage';
import { GreeterPage } from '../pages/GreeterPage';
import { HomePage } from '../pages/HomePage';
import { MyERC20TokenPage } from '../pages/MyERC20TokenPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AppLayout } from './AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route element={<HomePage />} index />
      <Route element={<ConnectWalletPage />} path="connect-wallet" />
      <Route element={<GreeterPage />} path="greeter" />
      <Route element={<EtherWalletPage />} path="ether-wallet" />
      <Route element={<MyERC20TokenPage />} path="my-erc-20-token" />
      <Route element={<NotFoundPage />} path="*" />
    </Route>,
  ),
);

export function Router() {
  return <RouterProvider router={router} />;
}

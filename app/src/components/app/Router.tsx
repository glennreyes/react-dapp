import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { AppLayout } from '../layout/AppLayout';
import { ConnectWalletPage } from '../pages/ConnectWalletPage';
import { HomePage } from '../pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route element={<HomePage />} index />
      <Route element={<ConnectWalletPage />} path="connect-wallet" />
    </Route>,
  ),
);

export function Router() {
  return <RouterProvider router={router} />;
}

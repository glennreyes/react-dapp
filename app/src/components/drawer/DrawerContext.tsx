import { createContext, useContext } from 'react';

interface DrawerContextValues {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export const DrawerContext = createContext<DrawerContextValues | null>(null);

export function useDrawer() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerContext');
  }

  return context;
}

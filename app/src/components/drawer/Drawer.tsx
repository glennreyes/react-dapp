import type { ComponentProps, ReactElement } from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { classNames } from '../../utils';
import { DrawerContext } from './DrawerContext';

export function useDrawer() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used within a Drawer');
  }

  return context;
}

interface DrawerProps extends ComponentProps<'div'> {
  menu: ReactElement;
}

export function Drawer({ children, className, menu, ...props }: DrawerProps) {
  const classes = classNames('drawer drawer-end', className);
  const [isOpen, setOpen] = useState(false);
  const close = () => setOpen(false);
  const open = () => setOpen(true);

  // Scroll to top
  const location = useLocation();
  const drawerContent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (drawerContent.current) {
      drawerContent.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <DrawerContext.Provider value={{ close, isOpen, open }}>
      <div className={classes} {...props}>
        <input
          checked={isOpen}
          onChange={() => undefined}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col" ref={drawerContent}>
          {children}
        </div>
        <div className="drawer-side">
          <button className="drawer-overlay" onClick={close} />
          {menu}
        </div>
      </div>
    </DrawerContext.Provider>
  );
}

import type { ComponentProps, ReactElement } from 'react';
import { useContext, useState } from 'react';

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

export function Drawer({
  children,
  className,
  id,
  menu,
  ...props
}: DrawerProps) {
  const classes = classNames('drawer drawer-end', className);
  const [isOpen, setOpen] = useState(false);
  const close = () => setOpen(false);
  const open = () => setOpen(true);

  return (
    <DrawerContext.Provider value={{ close, isOpen, open }}>
      <div className={classes} {...props}>
        <input
          checked={isOpen}
          id={id}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">{children}</div>
        <div className="drawer-side">
          <button className="drawer-overlay" onClick={close} />
          {menu}
        </div>
      </div>
    </DrawerContext.Provider>
  );
}

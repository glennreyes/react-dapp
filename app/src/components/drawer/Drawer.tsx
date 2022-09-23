import type { ComponentProps, ReactElement } from 'react';
import { createContext, useContext, useState } from 'react';

import { classNames } from '../../utils';

interface DrawerContextValues {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

const DrawerContext = createContext<DrawerContextValues | null>(null);

export function useDrawerContext() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerContext');
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
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
          <button className="drawer-overlay" onClick={close} />
          {menu}
        </div>
      </div>
    </DrawerContext.Provider>
  );
}

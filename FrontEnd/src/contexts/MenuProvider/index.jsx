import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [openMenus, setOpenMenus] = useState({});

  return (
    <MenuContext.Provider value={{ openMenus, setOpenMenus }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

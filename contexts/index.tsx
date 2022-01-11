import { createContext, useState } from 'react';

interface ContextProps {
  displaySideMenu: boolean
  toggleSideMenu: () => void
}

const IndiceContext = createContext<ContextProps>(undefined);

const IndiceProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  return (
    <IndiceContext.Provider
      value={{
        displaySideMenu,
        toggleSideMenu,
      }}
    >
      {children}
    </IndiceContext.Provider>
  );
};

export { IndiceProvider, IndiceContext };

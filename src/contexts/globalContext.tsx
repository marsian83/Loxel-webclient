import React, { ReactNode, createContext, useContext, useState } from "react";

interface GlobalContextType {
  modalState: {
    modal: ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  popupDrawerState: {
    value: ReactNode;
    setter: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactNode>();
  const [popupDrawer, setPopupDrawer] = useState<ReactNode>();

  const value = {
    modalState: { modal, setModal },
    popupDrawerState: { value: popupDrawer, setter: setPopupDrawer },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}

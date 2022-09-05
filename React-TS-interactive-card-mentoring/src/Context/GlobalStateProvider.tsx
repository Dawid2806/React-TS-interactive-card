import React, { createContext, useState, useContext } from "react";
import { FormTypes } from "../components/Form/FormTypes";

interface CardInfoProvider {
  state: FormTypes | null;
  handleSetFormTypes: (formTypes: FormTypes) => void;
}

const GlobalStateContext = createContext<CardInfoProvider | null>(null);

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<FormTypes | null>(null);
  const handleSetFormTypes = (formTypes: FormTypes) => {
    setState((prevState) => ({ ...prevState, ...formTypes }));
  };
  return (
    <GlobalStateContext.Provider value={{ state, handleSetFormTypes }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };

//5354563104462369

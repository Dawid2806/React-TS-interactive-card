import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { FormTypes } from "../components/Form/FormTypes";

const GlobalStateContext = createContext({
  state: {} as Partial<FormTypes>,
  setState: {} as Dispatch<SetStateAction<Partial<FormTypes>>>,
});

const GlobalStateProvider = ({
  children,
  value = {} as FormTypes,
}: {
  children: React.ReactNode;
  value?: Partial<FormTypes>;
}) => {
  const [state, setState] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
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

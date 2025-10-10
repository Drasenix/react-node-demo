import React, {
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

interface StateSelectedCategoryContextType {
  selectedCategoryId: number;
  setSelectedCategoryId: Dispatch<SetStateAction<number>>;
}

export const SelectedCategoryContext =
  createContext<StateSelectedCategoryContextType>({
    selectedCategoryId: -1,
    setSelectedCategoryId: () => {},
  });

type SelectedCategoryContextProviderProps = {
  children?: ReactNode;
};

export const SelectedCategoryContextProvider = ({
  children,
}: SelectedCategoryContextProviderProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

  return (
    <SelectedCategoryContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
      }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export const useSelectedCategoryContext = () =>
  useContext(SelectedCategoryContext);

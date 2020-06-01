import React, { createContext, FC } from "react";
import { EDITING_MODE_STORAGE_KEY } from "./settings";
import useStorageState from "./hooks/useStorageState";

export const EditingContext = createContext(null);

export const EditingContextProvider: FC = ({ children }) => {
  const [editingMode, setEditingMode] = useStorageState(
    false,
    EDITING_MODE_STORAGE_KEY
  );

  return (
    <EditingContext.Provider value={[editingMode, setEditingMode]}>
      {children}
    </EditingContext.Provider>
  );
};

export default EditingContextProvider;

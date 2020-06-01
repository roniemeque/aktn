import { useContext } from "react";
import { EditingContext } from "../EditingContextProvider";

const useEditingMode = (): [boolean, (setTo: boolean) => void] =>
  useContext(EditingContext);

export default useEditingMode;

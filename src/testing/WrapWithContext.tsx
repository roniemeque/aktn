import React, { FunctionComponent } from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";
import EditingContextProvider from "../EditingContextProvider";

const WrapWithContext: FunctionComponent = ({ children }) => {
  return (
    <EditingContextProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EditingContextProvider>
  );
};

export default WrapWithContext;

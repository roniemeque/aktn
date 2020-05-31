import React, { FunctionComponent } from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../styles/theme";

const WrapWithContext: FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WrapWithContext;

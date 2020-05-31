import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "emotion-theming";
import { globalStyles } from "../styles/global";
import { Global } from "@emotion/core";
import styled from "../styles/styled";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles}></Global>
    <App>
      <nav>nav</nav>
      <Main>
        <Component {...pageProps} />
      </Main>
    </App>
  </ThemeProvider>
);

const App = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  padding: 1rem;
`;

const Main = styled.main`
  display: grid;
  gap: 1rem;
`;

export default CustomApp;

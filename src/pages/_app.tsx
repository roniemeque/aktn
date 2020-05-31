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
`;

const Main = styled.main`
  width: calc(900px + 2 * ${({ theme }) => theme.gutter});
  max-width: 100vw;
  margin: 1rem auto 0;
  display: grid;
  row-gap: 1rem;
  align-content: start;
  grid-template-columns: ${({ theme }) => theme.gutter} 1fr ${({ theme }) =>
      theme.gutter};
  & > * {
    grid-column: 2 / -2;
  }
  & > .full {
    grid-column: span 3;
  }
  .gap-in-full {
    grid-column: 1 / -1;
  }
  .fixed-padding {
    padding: 0 1rem;
  }
`;

export default CustomApp;

import { css } from "@emotion/core";
import { theme } from "./theme";

export const globalStyles = () => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    /* text-rendering: optimizeLegibility; */
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: "SF Pro Text", "Helvetica Neue", "Helvetica", "Arial",
      sans-serif;
    color: ${theme.colors.black};
    /* background-color: #f4f4f4;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23e1e1e1' fill-opacity='0.1'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E"); */
  }
  ul[class],
  ol[class],
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.blue};
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  input {
    border: none;
  }
`;

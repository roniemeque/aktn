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
  }
  ul[class],
  ol[class],
  li {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
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

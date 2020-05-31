const defaultTheme = {
  colors: {
    grey: "#f5f5f5",
    greyDarker: "#D9D9D9",
    greyEvenDarker: "#A6A6A6",
    black: "#333",
    blue: "#0070F3",
    purple: "#B10DC9",
  },
  border: {
    normal: "10px",
    small: "5px",
    smaller: "3px",
  },
  shadows: {
    light: "0 1px 2px #C9C9C9",
    bluesh: "0 1px 3px rgba(136, 136, 255, 0.34)",
    normal: "0 4px 7px #ababab",
  },
  gutter: "1rem",
};

export const theme = defaultTheme;

export type Theme = typeof theme;

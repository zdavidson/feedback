import { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 2.25,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
  },
};

export const COLORS = {
  primary: {
    blue: "#4661E6",
    navy: "#373F68",
    magenta: "#AD1FEA",
    white: "#FFFFFF",
  },
  secondary: {
    grey: {
      s60: "#F7F8FD",
      s100: "#F2F4FF",
    },
    lightNavy: "#647196",
    navy: "#3A4374",
  },
  tertiary: {
    lightBlue: "#62BCFA",
    tangerine: "#F49F85",
  },
  background: "#f2f4ff",
};

export default themeOptions;

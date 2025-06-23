import { createTheme } from "@mui/material";

const getThemeFunction = (mode) => ({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    background: {
      default: mode === "light" ? "#FFFFFF" : "#121212",
      blueCard: mode === "light" ? "#429FD5" : "#648293",
      greyCard: mode === "light" ? "#DFE3E8" : "#2C2C2C",
      whiteCard: mode === "light" ? "#FFFFFF" : "#648293",
    },
  },
});

export const getTheme = (mode) => createTheme(getThemeFunction(mode));

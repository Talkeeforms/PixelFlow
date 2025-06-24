import { createTheme, Typography } from "@mui/material";
import BlauerNue from "../styles/BLAUER FONT/BlauerNue-ExtraBold.ttf";

//Função responsável pelas definições entre temas;
const getThemeFunction = (mode) => ({
  typography: {
    fontFamily: "BlauerNue",
  },

  components: {
    MuiCssBaseLine: {
      styleOverrides: `@font-face {
          font-family: 'BluaerNue';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('BluaerNue'), local('BluaerNue-Regular'), url(${BlauerNue}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },

  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  }, //Objeto responsável por armazenar estado atual da aplicação;
  colorSchemes: { light: true, dark: true }, //Habilita os temas;
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    }, //Define os breakpoints da responsividade (Padrão: xs -> mobile, md -> desktop);
  },
  palette: {
    mode,
    background: {
      default: mode === "light" ? "#FFFFFF" : "#121212",
      socialCard: mode === "light" ? "#DFE3E8" : "#2C2C2C",
      channelCard: mode === "light" ? "#164BF7" : "#164BF7",
      greyCard: mode === "light" ? "#DBDBDB" : "#2C2C2C",
      whiteCard: mode === "light" ? "#FFFFFF" : "#648293",
      popupCard: mode === "light" ? "#E3EEFA" : "#2C2C2C",
    },
    paper: {
      default: mode === "light" ? 3 : 3,
    },
    font: {
      default: mode === "light" ? "#121212" : "#FFFFFF",
      alternative: mode === "light" ? "#FFFFFF" : "#121212",
    },
  }, //Armazena variáveis para esquematização de cor de acordo com o tema;
});

export const getTheme = (mode) => createTheme(getThemeFunction(mode));

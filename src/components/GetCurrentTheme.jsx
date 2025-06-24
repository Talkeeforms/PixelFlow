import { createTheme, Typography } from "@mui/material";
import KumbhSans from "../styles/KUMBH SANS/KumbhSans-Light.ttf";

//Função responsável pelas definições entre temas;
const getThemeFunction = (mode) => ({
  typography: {
    fontFamily: "KumbhSans",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
          font-family: "KumbhSans";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('KumbhSans'), local('KumbhSans-Regular'), url(${KumbhSans}) format('truetype');
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
      paper: mode === "light" ? "#FFFFFF" : "#121212",
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

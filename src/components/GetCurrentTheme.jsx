import { createTheme, Typography } from "@mui/material";
import KumbhSans from "../styles/KUMBH SANS/KumbhSans-Regular.ttf";
import KumbhSansExtraLight from "../styles/KUMBH SANS/KumbhSans-Light.ttf";
import KumbhSansBold from "../styles/KUMBH SANS/KumbhSans-Bold.ttf";
import BlauerNue from "../styles/BLAUER FONT/BlauerNue-Light.ttf";

//Função responsável pelas definições entre temas;
const getThemeFunction = (mode) => ({
  typography: {
    fontFamily: "KumbhSans",
    fontWeight: 700,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }, //Define os breakpoints da responsividade (Padrão: xs -> mobile, md -> desktop);
  },

  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingRight: 0,
          paddingLeft: 0,
          [theme.breakpoints.up("md")]: {
            paddingLeft: theme.spacing(4),
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `@font-face {
            font-family: "KumbhSans";
            font-weight: 300;
            src: url(${KumbhSansExtraLight}) format("truetype");
          }
          @font-face {
            font-family: "KumbhSans";
            font-weight: 400;
            src: url(${KumbhSans}) format("truetype");
          }
          @font-face {
            font-family: "KumbhSans";
            font-weight: 700;
            src: url(${KumbhSansBold}) format("truetype");
          }
      @font-face {
          font-family: "BlauerNue";
          font-weight: 400;
          src: local('BlauerNue'), local('BlauerNue-Regular'), url(${BlauerNue}) format('truetype');
        }
      `,
    },

    MuiListItemButton: {
      // Muda cor dos botões da barra lateral;
      styleOverrides: {
        root: {
          "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: mode === "light" ? "" : "",
            color: mode === "light" ? "#fff" : "#000",
          },
        },
      },
    },
  },

  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  }, //Objeto responsável por armazenar estado atual da aplicação;

  colorSchemes: { light: true, dark: true }, //Habilita os temas;

  palette: {
    mode,
    background: {
      default: mode === "light" ? "#FFFFFF" : "#121212", // Muda cor da interface geral;
      paper: mode === "light" ? "#FFFFFF" : "#121212", // Muda cor da interface geral;
      socialCard: mode === "light" ? "#DFE3E8" : "#2C2C2C",
      channelCard: mode === "light" ? "#164BF7" : "#164BF7",
      deviceCard: mode === "light" ? "#00C9FF" : "#00C9FF",
      greyCard: mode === "light" ? "#DBDBDB" : "#2C2C2C",
      whiteCard: mode === "light" ? "#FFFFFF" : "#648293",
      popupCard: mode === "light" ? "#E3EEFA" : "#2C2C2C",
      kanban: mode === "light" ? "#FAFAFA" : "#2C2C2C",
      kanbanCard: mode === "light" ? "#F1F1F1" : "#2D2D2D",
    },
    paper: {
      default: mode === "light" ? 3 : 3,
    },
    font: {
      default: mode === "light" ? "#121212" : "#FFFFFF",
      alternative: mode === "light" ? "#FFFFFF" : "#121212",
      socialCard: mode === "light" ? "#164BF7" : "#FFFFFF",
    },

    border: {
      kanbanBorder: mode === "light" ? "#FFFFFF" : "#121212",
    },
  }, //Armazena variáveis para esquematização de cor de acordo com o tema;
});

export const getTheme = (mode) => createTheme(getThemeFunction(mode));

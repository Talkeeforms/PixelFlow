import { createTheme } from "@mui/material";

//Função responsável pelas definições entre temas;
const getThemeFunction = (mode) => ({
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
      blueCard: mode === "light" ? "#429FD5" : "#648293",
      greyCard: mode === "light" ? "#DFE3E8" : "#2C2C2C",
      whiteCard: mode === "light" ? "#FFFFFF" : "#648293",
      popupCard: mode === "light" ? "#E3EEFA" : "#2C2C2C",
    },
  }, //Armazena variáveis para esquematização de cor de acordo com o tema;
});

export const getTheme = (mode) => createTheme(getThemeFunction(mode));

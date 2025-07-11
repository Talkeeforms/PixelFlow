import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import sellIcon2 from "@/styles/ICONS/Sell/sell.svg";
import sellIcon from "@/styles/ICONS/Sell/sell2.svg";
import billingIcon from "@/styles/ICONS/Sell/billing.svg";
import billingIcon2 from "@/styles/ICONS/Sell/billing2.svg";

const variants = [
  {
    name: "Total de Vendas",
    icon: sellIcon,
    iconDark: sellIcon2,
  },
  {
    name: "Faturamento Total (R$)",
    icon: billingIcon,
    iconDark: billingIcon2,
  },
];

const variantSelect = (variant) => {
  if (variant === "sells") {
    return variants[0];
  } else if (variant === "billing") {
    return variants[1];
  } else {
    return null;
  }
};

//Componente da linha de "Vendas" da Dashboard;
export default function SellsCard({ variant }) {
  const theme = useTheme("light");
  const buttonVariant = variantSelect(variant);
  if (!buttonVariant) {
    return null;
  }
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-toolpad-color-scheme")
  );
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute(
        "data-toolpad-color-scheme"
      );
      setCurrentTheme(newTheme);
    }; //Função responsável pela atualização da variável de tema atual, e da troca de logotipo;

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-toolpad-color-scheme"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <Paper
      sx={{
        borderRadius: "15px",
      }}
      elevation={0}
    >
      <Box
        sx={{
          width: "100%",
          height: { md: "12vh", xs: "8vh" },
          backgroundColor: theme.palette.background.whiteCard,
          borderRadius: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 0.8fr",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: { md: "45px", xs: "30px" },
          }}
          src={
            currentTheme === "light"
              ? buttonVariant.icon
              : buttonVariant.iconDark
          }
          alt=""
        />
        <Typography
          fontWeight="500"
          fontFamily="KumbhSans"
          color={theme.palette.font.default}
          sx={{
            typography: { md: "h6", xs: "p" },
          }}
        >
          {buttonVariant.name}
        </Typography>
        <Typography
          color={theme.palette.font.default}
          fontFamily="KumbhSans"
          sx={{
            typography: { md: "h3", xs: "h5" },
            [theme.breakpoints.up("md")]: { fontWeight: 700, fontSize: "40px" },
            [theme.breakpoints.down("md")]: { fontWeight: 700 },
            justifySelf: "end",
            alignSelf: "center",
          }}
        >
          0
        </Typography>
      </Box>
    </Paper>
  );
}

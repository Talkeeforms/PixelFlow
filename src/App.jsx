import { AppProvider } from "@toolpad/core/AppProvider";
import {
  DashboardLayout,
  ThemeSwitcher,
  DashboardSidebarPageItem,
} from "@toolpad/core/DashboardLayout";
import { Chip, Paper, Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Account, PageContainer } from "@toolpad/core";
import { Outlet } from "react-router-dom";
import { useRouter } from "./Router";
import { getTheme } from "./components/GetCurrentTheme";
import TopBar from "./components/topbar/TopBar";
import BottomBar from "./components/bottombar/BottomBar";
import "./routes/default.css";

//Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

//Variável responsável pelo armazém das páginas do menu lateral, incluindo ícone e link;
const navigate = [
  {
    segment: "dashboard", //URL da página correspondente (Como definido em 'main.jsx');
    title: "Dashboard", //Nome no menu lateral;
    icon: <DashboardIcon />, //Ícone no menu lateral;
  },
  {
    segment: "example2",
    title: "Filas",
    icon: <RssFeedIcon />,
  },
  {
    segment: "whatsapp",
    title: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
  {
    segment: "crm",
    title: "CRM",
    icon: <TimelineIcon />,
  },
  {
    segment: "reports",
    title: "Relatórios",
    icon: <AssessmentIcon />,
  },
  {
    segment: "users",
    title: "Usuários",
    icon: <GroupIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Apps",
  },
  {
    segment: "chat",
    title: "Atendimento",
    icon: <ChatIcon />,
  },
];

//Variável demonstração de usuario no Popup;
const user = {
  user: {
    name: "Thiago Souza",
    email: "thiago@gmail.com",
    image: "src/assets/user.webp",
  },
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-toolpad-color-scheme")
  ); //Variável estado responsável por armazenar o tema atual da aplicação;

  const theme = getTheme(currentTheme || "light"); //Variável que armazena a função gerenciador de temas;

  const router = useRouter(); //Variável responsável por armazenar o gerenciador de Rotas (Título da página atual, ex: "Dashboard", "Filas");

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession(user);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []); // Função responsável pelo gerenciamento de autenticação de usuário (Ainda em planejamento);

  return (
    <>
      <AppProvider
        navigation={navigate} //Parâmetro de navegação do menu lateral;
        theme={theme}
        router={router}
        session={user}
        authentication={authentication}
      >
        <DashboardLayout
          sx={{
            "& .css-nv1n36-MuiTypography-root-MuiLink-root": {
              fontFamily: "KumbhSans",
              fontWeight: 700,
              marginLeft: { md: 0, xs: "27px" },
              opacity: 0.4,
            },
            "& .MuiToolbar-root": {
              display: "none",
            },
          }}
          slots={{
            header: TopBar,
          }}
          defaultSidebarCollapsed
          //disableCollapsibleSidebar /*Comente para ativar a barra lateral colapsável*/
          hideNavigation={isMobile ? true : false}
          renderPageItem={(entry, { defaultRender }) => {
            if (entry.kind && entry.kind !== "item") {
              return defaultRender();
            }
            return <DashboardSidebarPageItem item={entry} />;
          }} //Render de cada item presente no menu lateral;
        >
          <PageContainer
            maxWidth="false"
            slotProps={{
              header: {
                title: "", // Título das páginas;
              },
            }}
            sx={{
              pt: { xs: 5, md: 8 }, // <-- same idea here
            }}
          >
            {/*Responsável pela exibição das páginas dentro da aplicação;*/}
            <Paper
              elevation={isMobile ? 0 : 3}
              sx={{
                padding: 2,
                borderRadius: "15px",
              }}
            >
              <Outlet />
            </Paper>
            <BottomBar isMobile={isMobile} />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

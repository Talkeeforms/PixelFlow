import { AppProvider } from "@toolpad/core/AppProvider";
import {
  DashboardLayout,
  ThemeSwitcher,
  DashboardHeader,
  DashboardSidebarPageItem,
} from "@toolpad/core/DashboardLayout";
import { Typography, Chip, Button, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useContext, useEffect, useMemo } from "react";
import { useState } from "react";
import { UserPopup } from "./components/UserPopup";
import { Account, PageContainer } from "@toolpad/core";
import { Outlet } from "react-router-dom";
import { useRouter } from "./Router";
//Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

//Logos
import lightLogo from "./assets/logo.png";
import darkLogo from "./assets/logoBlack.png";

const demoTheme = createTheme({
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
});

const navigate = [
  {
    segment: "example",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "queue",
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

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

const user = {
  user: {
    name: "Thiago Souza",
    email: "thiago@gmail.com",
    image: "src/assets/user.webp",
  },
  org: {
    name: "MUI Inc.",
    url: "https://mui.com",
    logo: "https://mui.com/static/logo.svg",
  },
};

function ToolBarItems() {
  return (
    <>
      <ThemeSwitcher />
      <Account
        slots={{
          popoverContent: UserPopup,
        }}
      />
    </>
  );
}

export default function App() {
  const [pathname, setPathname] = useState("/dashboard");
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState(
    document.documentElement.getAttribute("data-toolpad-color-scheme")
  );
  const [currentLogo, setCurrentLogo] = useState(lightLogo);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute(
        "data-toolpad-color-scheme"
      );
      setCurrentTheme(newTheme);
      setCurrentLogo(newTheme === "light" ? lightLogo : darkLogo);
    };

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
  }, []);

  return (
    <>
      <AppProvider
        navigation={navigate}
        branding={{
          logo: (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                style={{ width: "auto", height: "auto", minHeight: "75px" }}
                src={currentLogo}
              ></img>
              <Chip size="small" label="BETA" color="info" />
            </div>
          ),
          title: " ",
        }}
        theme={demoTheme}
        router={router}
        session={user}
        authentication={authentication}
      >
        <DashboardLayout
          slots={{
            toolbarActions: ToolBarItems,
          }}
          defaultSidebarCollapsed
          disableCollapsibleSidebar
          renderPageItem={(entry, { defaultRender }) => {
            if (entry.kind && entry.kind !== "item") {
              return defaultRender();
            }
            return <DashboardSidebarPageItem item={entry} />;
          }}
        >
          <PageContainer maxWidth="false">
            <Outlet />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

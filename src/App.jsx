import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Typography, Chip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Outlet } from "react-router-dom";
import { PageContainer } from "@toolpad/core/PageContainer";

const navigate = [
  {
    kind: "header",
    title: "Menu",
  },
  {
    segment: "example",
    title: "Pagina inicial",
    icon: <DashboardIcon />,
  },
];

function AppTitleValue() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typography variant="h6" fontWeight="700">
        PixelFlow
      </Typography>
      <Chip size="small" label="BETA" color="info" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <AppProvider navigation={navigate}>
        <DashboardLayout
          slots={{
            appTitle: AppTitleValue,
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

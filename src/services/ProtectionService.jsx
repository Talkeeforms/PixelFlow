import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (loading)
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        Carregando sessão…
      </div>
    );
  return <Outlet />;
}

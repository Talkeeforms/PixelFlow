import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    }),
    [location, navigate]
  );
}

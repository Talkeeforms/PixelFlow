import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Função responsável pelo gerenciamento de roteamento das páginas (Título interno de cada página)
export function useRouter() {
  const location = useLocation(); //Traz informações do estado atual do roteamento;
  const navigate = useNavigate(); //Realiza a troca de página pela navegação;

  return useMemo(
    () => ({
      pathname: location.pathname,
      searchParams: new URLSearchParams(location.search),
      navigate: (path) => navigate(path),
    }),
    [location, navigate]
  ); //Só realiza a mudança de parâmetros em caso de mudança na rota de navegação;
}

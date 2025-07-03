import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  // Tekrar confirm olmaması için sadece ilk render'da çalışacak bir ref
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return; // Sadece ilk seferde çalışsın
    didRun.current = true;

    const doLogout = async () => {
      const confirmed = window.confirm(
        "Çıkış yapmak istediğinizden emin misiniz?"
      );
      if (confirmed) {
        await logout();
        navigate("/login", { replace: true }); // replace ile geçmişten çıkart
      } else {
        navigate("/account", { replace: true });
      }
    };
    doLogout();
  }, [logout, navigate]);

  return null;
};

export default Logout;

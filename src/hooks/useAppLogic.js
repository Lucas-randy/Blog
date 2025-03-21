// src/hooks/useAppLogic.js
import { useState, useEffect, useRef } from "react";

const useAppLogic = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true" // ✅ Prend l’état directement dans le localStorage
  );
  const [showNavbar, setShowNavbar] = useState(true);

  // Stockage de la dernière position de scroll
  const lastScrollTop = useRef(0);

  // Fonction pour gérer la connexion
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Fonction pour gérer la déconnexion
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // Vérification dynamique de l'authentification (au premier rendu + chaque changement)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      setShowNavbar(isAuthenticated && currentScroll <= lastScrollTop.current);
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthenticated]); // ✅ Met à jour dès que l'auth change !

  // ✅ Retourner tout en une seule fois
  return {
    isAuthenticated,
    login,
    logout,
    showNavbar,
    setIsAuthenticated,
  };
};

export default useAppLogic;

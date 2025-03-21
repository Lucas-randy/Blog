// src/pages/AuthPages.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const AuthPages = () => {
  const [showForm, setShowForm] = useState(null);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    // Lorsqu'un utilisateur se connecte ou s'inscrit avec succès
    localStorage.setItem("isAuthenticated", "true");  // Marquer l'utilisateur comme authentifié
    navigate("/home");  // Rediriger vers la page d'accueil
  };

  return (
    <div>
      <h2>Bienvenue !</h2>
      <div>
        <button onClick={() => setShowForm("login")}>Connexion</button>
        <button onClick={() => setShowForm("register")}>S'inscrire</button>
      </div>

      {showForm && (
        <AuthForm
          type={showForm}
          onSubmit={handleAuthSuccess}  // Passe la fonction pour rediriger après soumission
        />
      )}
    </div>
  );
};

export default AuthPages;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setErrorMessage("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <div className="container-login">
      <div className="login-section">
        <div className="welcome-back">
          <h1>Se connecter</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Nom d'utilisateur ou email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mot de passe"
            />
          </div>

          {/* Afficher le message d'erreur */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="sign-in-button">
            Connexion
          </button>
          <button
            type="button"
            className="sign-in-button"
            onClick={() => navigate("/register")}
          >
            Inscription
          </button>
        </form>

        <div className="terms">
          <p>
            Avez-vous oublié votre mot de passe ? <a href="">Cliquez ici</a>
          </p>
        </div>
      </div>

      <div className="text-section background-image">
        <h3>Pourquoi nous choisir ?</h3>
        <p>
          Nous vous proposons des services haut de gamme avec un programme
          adapté à votre morphologie et votre poids corporel.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

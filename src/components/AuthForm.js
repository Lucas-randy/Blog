// src/components/AuthForm.js
import { useState } from "react";

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission : authentifier l'utilisateur, etc.
    // Si tout va bien, on appelle onSubmit pour rediriger l'utilisateur
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{type === "login" ? "Se connecter" : "S'inscrire"}</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
      />
      <button type="submit">
        {type === "login" ? "Se connecter" : "S'inscrire"}
      </button>
    </form>
  );
};

export default AuthForm;

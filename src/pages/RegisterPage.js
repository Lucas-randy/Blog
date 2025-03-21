import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Déclaration des variables pour la vérification des mots de passe
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Validation de l'email
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Gestion des erreurs
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Réinitialiser l'erreur lorsque l'utilisateur modifie les champs
    setError((prevError) => ({ ...prevError, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Vérification que le champ "Nom et prénom" est rempli
    if (!name.trim()) {
      setError((prevError) => ({
        ...prevError,
        name: "Le nom et prénom ne peut pas être vide.",
      }));
      return;
    }

    // Vérification du format de l'email
    if (!validateEmail(email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Veuillez entrer un email valide.",
      }));
      return;
    }

    // Comparaison des deux mots de passe
    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: "Les mots de passe ne correspondent pas.",
      }));
      return;
    }

    // Vérification du format du mot de passe
    if (!validatePassword(password)) {
      setError((prevError) => ({
        ...prevError,
        password:
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@, $, !, %, *, ?, &).",
      }));
      return;
    }

    setError({ name: "", email: "", password: "", confirmPassword: "" }); // Réinitialiser l'erreur si tout est correct
    console.log("Données envoyées :", formData);
  };

  return (
    <div className="container-login">
      <div className="login-section">
        <div className="welcome-back">
          <h1>Inscription</h1>
        </div>
        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nom et prénom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            {error.confirmPassword && (
              <p style={{ color: "red" }}>{error.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="sign-in-button">
            S'inscrire
          </button>

          <div className="terms">
            <a href="/">Revenir en arrière</a>
          </div>
        </form>
      </div>

      <div className="text-section background-image">
        <h3>Pourquoi nous choisir ?</h3>
        <p>
          Nous vous proposons des services haut de gamme avec un programme
          adapté à votre morphologie et à votre poids corporel.
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;

// AuthButtons.js
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');  // Redirige vers la page de connexion
  };

  const handleRegisterClick = () => {
    navigate('/register');  // Redirige vers la page d'inscription
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Connexion</button>
      <button onClick={handleRegisterClick}>S'inscrire</button>
    </div>
  );
};

export default AuthButtons;

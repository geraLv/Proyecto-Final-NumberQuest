// LogoutButton.js
import React from "react";

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:4000/logout', {
        method: 'POST',
        credentials: 'include',
      });
      onLogout(); // Llama a la función para actualizar el estado del usuario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <button
      class="bg-gray-600 text-white py-1 px-3 rounded hover:bg-gray-700"
      onClick={handleLogout}
    >
      LOG OUT
    </button>
  );
};

export default LogoutButton;

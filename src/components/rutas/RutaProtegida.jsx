import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  // Verificamos si existe el usuario en localStorage
  const usuarioGuardado = localStorage.getItem("usuario-supabase");

  // Log para ayudarte a depurar (puedes quitarlo después)
  console.log("🔐 RutaProtegida - Usuario autenticado:", !!usuarioGuardado);
  console.log("Valor en localStorage:", usuarioGuardado);

  // Si NO está logueado → redirigir al login
  if (!usuarioGuardado) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado → mostrar el contenido de la página
  return children;
};

export default RutaProtegida;
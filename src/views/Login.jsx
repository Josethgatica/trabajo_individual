import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormularioLogin from "../components/login/FormularioLogin";
import { supabase } from "../database/supabaseconfig";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        localStorage.setItem("usuario-supabase", session.user.email);
        navigate("/");
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        localStorage.setItem("usuario-supabase", session.user.email);
        navigate("/");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [navigate]);

  
  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      localStorage.setItem("usuario-supabase", data.user.email);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <FormularioLogin onLogin={handleLogin} />
    </div>
  );
};

export default Login;
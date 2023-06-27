import React, { useState } from "react";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = () => {
    // Realiza a requisição para o serviço de login
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, password })
    })
      .then((response) => response.json())
      .then((data) => {
        // Verifica o resultado do login
        if (data.res) {
          // Login correto, redireciona para a página de listagem
          window.location.href = "/teachers"; // ou '/students'
        } else {
          // Login incorreto, exibe uma mensagem de erro
          setLoginResult("Login incorreto");
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        setLoginResult("Ocorreu um erro no login");
      });
  };

  return (
    <div className="container">
      <h2 className="title">TELA DE LOGIN</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label"> </label>
        <input
          type="password"
          className="form-control"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={navigator}>
        Entrar
      </button>
      {loginResult && <p className="error">{loginResult}</p>}
    </div>
  );
};

export default Login;

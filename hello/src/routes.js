import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";


//Imports dos componentes- PÁGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import Nav from "./componentes/Nav/Nav";
import ImportantePage from "./pages/ImportantePage/ImportantePage";
import MeusPedidosPage from "./pages/MeusPedidosPage/MeusPedidosPage";
import { ThemeContext } from "./Context/ThemeContext";

const Rotas = () => {

  //objeto de contexto criado
  const[theme,setTheme] = useState(getThemeLocalStoraged());

  //verificação se esta no localStorage
  function getThemeLocalStoraged() {
    setTheme(localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : "light")
  }

  useState();//

  return(
  <BrowserRouter>
  {/* provide: disponibiliza o valor para toda a pagina */}
    <ThemeContext.Provider value= {{theme,setTheme}}>
    
    <Nav/>
    <Routes>
      <Route element={<HomePage />} path={"/"} exact />
      <Route element={<ProdutoPage />} path={"/produtos"} />
      <Route element={<LoginPage />} path={"/login"} />
      <Route element={<MeusPedidosPage />} path={"/meus-pedidos"} />
      <Route element={<ImportantePage />} path={"/importante"} />

      {/* qualquer coisa que o usúario escrever na Rota irá direcionar para pagina home */}
      <Route element={<HomePage />} path={"*"}/>/ 
      
    </Routes>
    
    </ThemeContext.Provider>
  </BrowserRouter>
  );
};

export default Rotas;

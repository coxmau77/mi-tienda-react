// Mantendremos limpio el código y para hacerlo más legible
import React from "react";
// Importamos los componentes creados
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Team from "./components/Team";
import ProjectCard from "./components/ProyectCard";
import FavoriteLanguage from "./components/FavoriteLanguage";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Team />
      <ProjectCard
        titulo="Ecommerce React 🛒"
        descripcion="ProyectCard: Una tienda online construida con React y Vite, usando componentes reutilizables."
        botonTexto="Ver proyecto"
      />
      <>
        <h2>Mis tecnologías favoritas 🧠</h2>
        <FavoriteLanguage
          temas={[
            "HTML",
            "CSS",
            "react",
            "javaScript",
            "APIs",
            "diseño UX",
            "node.js",
          ]}
        />
      </>
      <Main />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

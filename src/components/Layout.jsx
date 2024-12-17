import React from "react";
import NavBar from "./NavBar";
import { Banner } from "./Banner";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Outlet /> {/* Aquí se renderizará el contenido de la ruta actual */}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;

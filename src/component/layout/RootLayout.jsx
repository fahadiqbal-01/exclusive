import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

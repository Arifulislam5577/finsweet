import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

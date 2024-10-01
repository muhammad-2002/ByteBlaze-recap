import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className=" shadow-md h-[68px]  w-full mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

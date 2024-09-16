"use client";

import { ThemeProvider } from "@/context/themes";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="app">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;

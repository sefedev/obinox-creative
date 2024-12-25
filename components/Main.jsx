"use client";

import { ThemeProvider } from "@/context/themes";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";
import { StatusProvider } from "@/context/status";

const Main = ({ children }) => {
  return (
    <ThemeProvider>
      <StatusProvider>
        <Navbar />
        <BookingModal />
        <main className="app">{children}</main>
        <Footer />
      </StatusProvider>
    </ThemeProvider>
  );
};

export default Main;

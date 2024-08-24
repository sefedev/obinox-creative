"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/themes";
import "@/styles/global.css";

// export const metadata = {
//   title: "Obinox Creative",
//   description: "Obnox Creative Studio",
// };

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className="font-poppins dark:bg-black dark:text-white">
          <Navbar />
          <main className="app">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;

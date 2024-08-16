import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/global.css";

export const metadata = {
  title: "Obinox Creative",
  description: "Obnox Creative Studio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

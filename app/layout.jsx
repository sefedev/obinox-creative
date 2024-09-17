import Main from "@/components/Main";
import "@/styles/global.css";
import Head from "next/head";

export const metadata = {
  title: "Obinox Creative | Portfolio",
  description: "Official Obinox Creative Portfolio Page",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className="relative transition-colors duration-200 font-poppins dark:bg-black dark:text-white">
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;

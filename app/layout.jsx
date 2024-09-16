import Main from "@/components/Main";
import "@/styles/global.css";
import Head from "next/head";

export const metadata = {
  title: "Obinox Creative",
  description: "Obnox Creative Studio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="description" content="This is a custom description" />
      </Head>
      <body className="transition-colors duration-200 font-poppins dark:bg-black dark:text-white">
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;

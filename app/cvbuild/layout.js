import Nav from "@/components/general/nav";
import "../globals.css";
import Head from "next/head";

export const metadata = {
  title: "Inmotion Technologies CV builder",
  description: "Intelligent CV Solutions for Today and Tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <Head></Head>
      <body className={` antialiased w-full h-full`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

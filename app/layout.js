// import { Square_Peg } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const SquarePeg = Square_Peg({
//   subsets: ["latin"],
//   weight: "400", // Only available weight for Square Peg
//   variable: "--font-square-peg",
// });

export const metadata = {
  title: "Inmotion Technologies",
  description: "Solutions for Today and Tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <Head></Head>
      <body className={` antialiased w-full h-full`}>{children}</body>
    </html>
  );
}

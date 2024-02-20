import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SuccessMessageToast from "./components/toasts/SuccessMessageToast";
import ErrorMessageToast from "./components/toasts/ErrorMessageToast";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>

        {/* Navbar */}
        <Navbar/>

        <main className="pt-18 bg-white min-w-screen min-h-screen">
          {children}
        </main>

        {/* Success message toast */}
        <SuccessMessageToast/>
          
        {/* Error message toast */}
        <ErrorMessageToast/>

        {/* Footer */}

        {/* Flowbite */}
        <script src="/flowbite/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
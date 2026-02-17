// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

//import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

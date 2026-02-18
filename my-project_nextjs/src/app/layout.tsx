// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

//import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gray-400 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
                <Providers>
          <Header />
          {/* 2. flex-grow lässt diesen Bereich den restlichen Platz einnehmen 
                 und drückt den Footer nach unten */}
          <main className="flex-grow">
          {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

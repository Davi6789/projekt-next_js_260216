// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

//import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} min-h-screenbg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

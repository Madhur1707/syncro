import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syncro",
  description: "Project Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2">
            <div className="container mx-auto px-4 text-center">
              Syncro © 2024
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

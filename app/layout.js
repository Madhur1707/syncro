import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syncro",
  description: "Project Manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [],
        variables: {
          colorPrimary: "blue",
          colorText: "black",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-slate-50`}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="fixed bottom-0 left-0 w-full  text-white py-2">
              <div className="container mx-auto px-4 text-center">
                Syncro © 2024
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

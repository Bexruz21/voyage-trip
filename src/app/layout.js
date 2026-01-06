import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <LangProvider>
          <Navbar />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
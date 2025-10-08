import { SpeedInsights } from "@vercel/speed-insights/next"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights/>
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div >
      </body>
    </html>
  );
}
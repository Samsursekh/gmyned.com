import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gmynd App | Home page",
  description: "Gmynd can help you with the digital solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Montserrat} from "next/font/google";
import Footer from "@/Components/Footer/Footer";
import ThemeProvider from "@/context/ThemeContext";

const bodyfont = Montserrat({ subsets: ['latin'] ,weight:['400','700','900'],});
export const metadata = {
  title: "HexaShop",
  description: "shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyfont.className}>
    <ThemeProvider>
    <div className="container">
     <NavBar/>
        {children}
      <Footer/>
        </div>
    </ThemeProvider>
        </body>
    </html>
  );
}

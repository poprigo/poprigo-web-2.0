import "./globals.css";
import Nav from '../layout/nav'
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast"; // https://react-hot-toast.com/

export const metadata = {
  title: "Poprigo",
  description: "Transforming Dreams into Digital Reality with Poprigo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css" />
        {/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */}
      </head>
      <body>
        <Toaster position="top-center" />
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

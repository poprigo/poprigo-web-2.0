import "./globals.css";
import Nav from "../layout/nav";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast"; // https://react-hot-toast.com/
import SmoothScroll from "../components/smoothScroll";

export const metadata = {
  title: "Poprigo",
  description: "Transforming Dreams into Digital Reality with Poprigo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/fav/favicon-16x16.png"
        />
      </head>
      <body>
        <SmoothScroll>
          <Toaster position="top-center" />
          <main>
            <Nav />
            {children}
            <Footer />
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}

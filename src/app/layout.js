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
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" /> */}
      </head>
      <body>
        <Toaster position="top-center" />
        <main>
          <Nav />
          {children}
          <Footer />
        </main>

        {/* <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"
          integrity="sha512-EZI2cBcGPnmR89wTgVnN3602Yyi7muWo8y1B3a8WmIv1J9tYG+udH4LvmYjLiGp37yHB7FfaPBo8ly178m9g4Q=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"
          integrity="sha512-OzC82YiH3UmMMs6Ydd9f2i7mS+UFL5f977iIoJ6oy07AJT+ePds9QOEtqXztSH29Nzua59fYS36knmMcv79GOg=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
          <script src="/js/script.js"></script> */}
      </body>
    </html>
  );
}

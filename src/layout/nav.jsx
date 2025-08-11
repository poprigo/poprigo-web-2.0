'use client';

import { useState, useEffect } from "react";
import { useLenis } from '@studio-freight/react-lenis';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (lenis) {
      if (newState) lenis.stop();
      else lenis.start();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (lenis) lenis.start();
  };

  useEffect(() => {
    return () => {
      if (lenis) lenis.start();
    };
  }, [lenis]);

  return (
    <div className="container">
      <div className="nav">

        {/* Desktop Left Links */}
        <div className="nav-links desktop-nav">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About Us" />
          <NavLink href="/service" text="Service" />
        </div>

        {/* Logo */}
        <Logo />

        {/* Desktop Right Links */}
        <div className="nav-links desktop-nav" style={{ justifyContent: "flex-end" }}>
          <NavLink href="/blog" text="Blog" />
          <NavLink href="/contact" text="Contact" />
          <Button link="/contact" title="LETS TALK" />
        </div>

        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`mobile-slide-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink href="/" text="Home" onClick={closeMobileMenu} />
        <NavLink href="/about" text="About Us" onClick={closeMobileMenu} />
        <NavLink href="/service" text="Service" onClick={closeMobileMenu} />
        <NavLink href="/blog" text="Blog" onClick={closeMobileMenu} />
        <NavLink href="/contact" text="Contact" onClick={closeMobileMenu} />
        <Button link="/contact" title="LETS TALK" onClick={closeMobileMenu} />
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
    </div>
  );
}

const NavLink = ({ href, text, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`nav-link ${isActive ? 'active' : ''}`}
      href={href}
      onClick={onClick}
      style={{ fontWeight: "400" }}
    >
      {text}
    </Link>
  );
};

const Logo = () => (
  <Link href="/">
      <Image
        src="/assets/images/logo.png"
        alt="poprigo-logo"
        width={50}
        height={50}
        style={{ cursor: 'pointer' }}
      />
  </Link>
);

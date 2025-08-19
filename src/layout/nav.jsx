'use client';

import { useState, useEffect } from "react";
import { useLenis } from '@studio-freight/react-lenis';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldShowOverlay, setShouldShowOverlay] = useState(false);
  const lenis = useLenis();

  // Handle menu toggle
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;

    if (newState) {
      setIsMobileMenuOpen(true);
      setShouldShowOverlay(true);
      lenis?.stop();
    } else {
      setIsMobileMenuOpen(false);
      lenis?.start();

      // Wait until the menu closing animation finishes (0.7s)
      setTimeout(() => {
        setShouldShowOverlay(false);
      }, 700);
    }
  };

  // Close menu via link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    lenis?.start();

    // Wait until animation is over before hiding overlay
    setTimeout(() => {
      setShouldShowOverlay(false);
    }, 700);
  };

  useEffect(() => {
    return () => {
      lenis?.start();
    };
  }, [lenis]);

  return (
    <div className="container">
      <div className="nav">

        {/* Left */}
        <div className="nav-links desktop-nav">
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About Us" />
          <NavLink href="/service" text="Service" />
        </div>

        {/* Logo */}
        <Logo />

        {/* Right */}
        <div className="nav-links desktop-nav" style={{ justifyContent: "flex-end" }}>
          <NavLink href="/blog" text="Blog" />
          <NavLink href="/contact" text="Contact" />
          <Button link="/contact" title="LETS TALK" />
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-slide-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <NavLink href="/" text="Home" onClick={closeMobileMenu} />
          <NavLink href="/about" text="About Us" onClick={closeMobileMenu} />
          <NavLink href="/service" text="Service" onClick={closeMobileMenu} />
          <NavLink href="/blog" text="Blog" onClick={closeMobileMenu} />
          <NavLink href="/contact" text="Contact" onClick={closeMobileMenu} />
          <Button link="/contact" title="LETS TALK" onClick={closeMobileMenu} />
        </div>
      </div>

      {/* Overlay */}
      {shouldShowOverlay && (
        <div className="overlay" onClick={toggleMobileMenu}></div>
      )}
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
  <Link href="/" className="site-logo">
    <Image
      src="/assets/images/logo.png"
      alt="poprigo-logo"
      width={50}
      height={50}
      style={{ cursor: 'pointer' }}
    />
  </Link>
);

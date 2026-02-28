"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 lg:py-3 glass"
          : "py-3 sm:py-4 lg:py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <Image
            src="/logo.png"
            alt="Zytheq"
            width={100}
            height={100}
            className="w-[96px] h-[96px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[135px] group-hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop nav - hidden below lg (1024px) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-accent text-bg-primary text-sm font-semibold rounded-full hover:bg-accent-hover transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.3)]"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle - shown below lg */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 flex flex-col justify-center items-center w-12 h-12"
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-[2.5px] bg-accent rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-7 h-[2.5px] bg-accent rounded-full transition-all duration-300 mt-[7px] ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-7 h-[2.5px] bg-accent rounded-full transition-all duration-300 mt-[7px] ${mobileOpen ? "-rotate-45 -translate-y-[16px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay - full screen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(10, 10, 10, 0.99)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7 sm:gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl sm:text-3xl font-display font-bold text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-10 py-4 bg-accent text-bg-primary font-semibold rounded-full text-lg min-w-[200px] text-center"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

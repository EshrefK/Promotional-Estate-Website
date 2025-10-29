"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/85 shadow-md py-4" : "bg-white/70 backdrop-blur py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo.png"
            alt="AlKhateep Emlak Logo"
            width={200}
            height={70}
            className="h-14 md:h-16 w-auto mr-4"
            priority
          />
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Al-Khatib Emlak
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("properties")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Mülklerimiz
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              İletişim
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              İletişime Geçin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            className="md:hidden text-gray-800 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 rounded-xl border border-gray-200 bg-white/90 shadow-sm p-4 space-y-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                scrollToSection("hero");
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                scrollToSection("properties");
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              Mülklerimiz
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                scrollToSection("contact");
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              İletişim
            </button>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


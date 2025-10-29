"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled
          ? "bg-gray-900/95 shadow-md py-4"
          : "bg-gray-900/70 backdrop-blur py-6"
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
              className="text-2xl font-bold text-white hover:text-blue-300 transition-colors"
            >
              AlKhatib Emlak
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("properties")}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              Mülklerimiz
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-200 hover:text-white transition-colors font-medium"
            >
              İletişim
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              İletişime Geçin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-200 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}


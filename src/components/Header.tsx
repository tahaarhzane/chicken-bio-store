"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/[0.08] backdrop-blur-3xl shadow-xl border-b border-white/[0.15]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 transition-colors duration-500 ${
          isScrolled ? "text-gray-900" : "text-gray-700"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
              isScrolled ? "bg-primary shadow-lg" : "bg-primary"
            }`}>
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-500 ${
              isScrolled ? "text-gray-900" : "text-primary-dark"
            }`}>BioChicken</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/boutique"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-all duration-400 ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900"
                : "hover:bg-primary-light text-gray-700"
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-all duration-400 ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900"
                : "hover:bg-primary-light text-gray-700"
            }`}>
              <User className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-all duration-400 relative ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900"
                : "hover:bg-primary-light text-gray-700"
            }`}>
              <ShoppingCart className="w-5 h-5" />
              <span className={`absolute top-0 right-0 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "bg-primary shadow-md" : "bg-primary"
              }`}>
                0
              </span>
            </button>

            {/* Menu Mobile */}
            <button
              className={`md:hidden p-2 rounded-full transition-all duration-400 ${
                isScrolled
                  ? "hover:bg-white/20 text-gray-900"
                  : "hover:bg-primary-light text-gray-700"
              }`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden py-4 border-t transition-all duration-700 ${
              isScrolled
                ? "bg-white/[0.12] backdrop-blur-3xl border-white/[0.15]"
                : "bg-white border-gray-200"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${isScrolled ? "text-gray-900" : "text-gray-700"} hover:text-primary transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/boutique"
                className={`${isScrolled ? "text-gray-900" : "text-gray-700"} hover:text-primary transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link
                href="/a-propos"
                className={`${isScrolled ? "text-gray-900" : "text-gray-700"} hover:text-primary transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className={`${isScrolled ? "text-gray-900" : "text-gray-700"} hover:text-primary transition-colors font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
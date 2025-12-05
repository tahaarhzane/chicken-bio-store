"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        height: isScrolled ? "5rem" : "3.5rem", // h-20 vs h-14
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.12)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        boxShadow: isScrolled ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-8`}
    >
      <div className="container mx-auto h-full">
        <div className={`flex items-center justify-between h-full transition-all duration-400 ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}>
          {/* Logo */}
          <Logo
            size="md"
            showText={true}
            containerClassName={`${isScrolled ? "text-gray-900" : "text-white"}`}
            className={`transition-all duration-500 ${
              isScrolled ? "bg-primary shadow-lg hover:shadow-xl hover:scale-110" : "bg-primary hover:shadow-lg hover:scale-105"
            }`}
          />

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-16">
            <Link
              href="/"
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/boutique"
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? "text-gray-900 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button className={`p-3 rounded-full transition-all duration-400 ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900 bg-white/10"
                : "hover:bg-white/10 text-white"
            }`}>
              <Search className="w-6 h-6" />
            </button>
            <button className={`p-3 rounded-full transition-all duration-400 ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900 bg-white/10"
                : "hover:bg-white/10 text-white"
            }`}>
              <User className="w-6 h-6" />
            </button>
            <button className={`p-3 rounded-full transition-all duration-400 relative ${
              isScrolled
                ? "hover:bg-white/20 text-gray-900 bg-white/10"
                : "hover:bg-white/10 text-white"
            }`}>
              <ShoppingCart className="w-6 h-6" />
              <span className={`absolute top-0 right-0 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "bg-primary shadow-md" : "bg-primary"
              }`}>
                0
              </span>
            </button>

            {/* Menu Mobile */}
            <button
              className={`md:hidden p-3 rounded-full transition-all duration-400 ${
                isScrolled
                  ? "hover:bg-white/20 text-gray-900 bg-white/10"
                  : "hover:bg-white/10 text-white"
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
    </motion.header>
  );
}
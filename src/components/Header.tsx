import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "kg" : "ru");
  };

  const navItems = [
    { to: "about", label: t("header.about") },
    { to: "categories", label: t("header.categories") },
    { to: "faq", label: t("header.howItWorks") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              className={`text-xl md:text-2xl font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              АКСЫ МАРКЕТ
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className={`font-medium cursor-pointer transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-primary"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-primary"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <Globe size={18} className="mr-1" />
              {language === "ru" ? "RU" : "KG"}
            </motion.button>
          </nav>

          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <button
              onClick={toggleMenu}
              className={`p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-lg overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="font-medium text-gray-800 hover:text-primary py-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center font-medium text-gray-800 hover:text-primary py-2"
            >
              <Globe size={18} className="mr-1" />
              {language === "ru" ? "RU / KG" : "KG / RU"}
            </motion.button>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;

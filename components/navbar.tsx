"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X } from "lucide-react";
import logo from "../app/assets/llogo.png";
import Image from "next/image";
const navItems = [
  { path: "/#home", label: "Home" },
  { path: "/#services", label: "Services" },
  { path: "/#projects", label: "Projects" },
  { path: "/#about", label: "About" },
  { path: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling and close menu
  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsOpen(false); // Close the sidebar

    const sectionId = path.replace("/#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed w-full z-50 backdrop-blur-sm bg-background/30 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
             {/* Logo */}
      <div className="flex items-center relative w-40 h-16">
        <Link href="/">
          {/* You can keep the div or remove it, but wrapping the Image in Link is key */}
          <Image
            src={logo}
            alt="Company Logo"
            layout="intrinsic" // If you prefer next/image 12.x or older
            width={160}
            height={64}
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
      </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-primary focus:outline-none"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-background/50 backdrop-blur-lg shadow-lg z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-primary focus:outline-none"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Sidebar Links */}
            <nav className="flex flex-col mt-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

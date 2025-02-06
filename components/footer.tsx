"use client";

import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import logo from "../public/assets/llogo.png";
import Image from "next/image";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background/90 backdrop-blur-lg border-t border-border mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-around ">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="flex items-center space-x-2"
            >
              <Link href="/">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={160} // Increase width
                  height={80} // Increase height
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              </Link>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="font-semibold mb-4"
            >
              Contact
            </motion.h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                className="flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>23000 Suharekë, Prizren</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>+ (383) 49 264-779</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
                className="flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>lardiinvestshpk@gmail.com</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
            className="hidden md:block"
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Services</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
            className="hidden md:block"
          >
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 pt-5  border-t border-border text-center text-sm text-muted-foreground">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Developed by{" "}
            <span className="font-semibold">Adrian</span>. All rights reserved.
          </motion.p>
          <p className="mt-2"></p>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-2">
            {/* WhatsApp */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              href="https://wa.me/38349153002"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-6 w-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.8 }}
              href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

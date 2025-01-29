'use client';

import { motion } from 'framer-motion';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background/90 backdrop-blur-lg border-t border-border mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">FutureBuilt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building tomorrow's landmarks with today's innovation.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Innovation Street, Tech City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@futurebuilt.com</span>
              </div>
            </div>
          </div>
          
          <div className='hidden md:block'>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Services</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div className='hidden md:block'>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FutureBuilt Construction. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
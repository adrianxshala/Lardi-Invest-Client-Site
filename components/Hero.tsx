import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const Hero = () => {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Modern building"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.h1
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold text-blue-500  mb-4"
        >
          We are Lardi Invest
     
    </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-8"
        >
          Innovative construction solutions for tomorrow's world
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 w-[50%] md:w-[30%] ml-[25%] md:ml-[1%] "
          >
            <a href="/projectss">
              Our Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button size="lg" variant="outline" className="hidden md:block">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

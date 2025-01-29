"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../assets/prejkt1.jpg";
import image2 from "../assets/projekt2.jpg";
import image3 from "../assets/projekt3.jpg";
import image4 from "../assets/objektii1.jpg";
import image5 from "../assets/objekti2.jpg";

const images = [
  { src: image1, alt: "Project 1" },
  { src: image2, alt: "Project 2" },
  { src: image3, alt: "Project 3" },
  { src: image4, alt: "Object 1" },
  { src: image5, alt: "Object 2" },
];

const CompletedProjects = () => {
  return (
    <div className="container mx-auto py-10 pt-20">
      <motion.h1 
        className="text-3xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 50 }}  // Heading slides up
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Completed Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 100 }} // Move from bottom
            whileInView={{ opacity: 1, y: 0 }} // Moves to center
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import image1 from "../../public/assets/projects/pz2.png";
import image2 from "../../public/assets/projects/pz3.png";
import image3 from "../../public/assets/projects/pz4.jpg";
import image4 from "../../public/assets/projects/pz5.jpg";
import image5 from "../../public/assets/projects/thr1.jpg";

import image7 from "../../public/assets/projects/objekti3.jpg";
import image8 from "../../public/assets/projects/tranzit.jpg";

const images = [
  { src: image1, alt: "Project 1" },
  { src: image2, alt: "Project 2" },
  { src: image3, alt: "Project 3" },
  { src: image5, alt: "Object 2" },
  
  { src: image7, alt: "Object 2" },
  { src: image4, alt: "Object 1" },
  { src: image8, alt: "Object 8" },
];

const CompletedProjects = () => {
  return (
    <div className="container mx-auto py-10 pt-20">
      <motion.h1
        className="text-3xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 50 }} // Heading slides up
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
            initial={{ opacity: 0, y: 50 }} // Move from bottom
            whileInView={{ opacity: 1, y: 0 }} // Moves to center
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
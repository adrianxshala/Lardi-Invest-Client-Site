"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import image1 from "../public/assets/projects/about about.jpg";
import CountUp from "react-countup";

const About = () => {
  // Use the useInView hook to detect when the stats section is in view
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground max-w-3xl mx-auto"
        >
          Me mbi dy dekada përvojë në industrinë e ndërtimit, Lardi Invest është
          vendosur si një lider në ndërtimin inovativ zgjidhjet.
        </motion.p>
      </div>

      {/* About Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Stats & Vision/Mission */}
        <div className="space-y-8" ref={statsRef}>
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                count: 20,
                text: "Vite përvojë",
                color: "from-blue-400 to-blue-600",
              },
              {
                count: 50,
                text: "Ekipi i ekspertëve",
                color: "from-green-400 to-green-600",
              },
              {
                count: 5,
                text: "Qytetet e shërbyera",
                color: "from-purple-400 to-purple-600",
              },
              {
                count: 98,
                text: "Kënaqësia e klientit",
                color: "from-orange-400 to-orange-600",
                suffix: "%",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 backdrop-blur-lg bg-background/50 rounded-lg border border-border"
              >
                <div
                  className={`text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
                >
                  {statsInView ? (
                    <CountUp start={0} end={item.count} duration={8} suffix={item.suffix} />
                  ) : (
                    0
                  )}
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Vision & Mission */}
          <div className="space-y-6">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.8 }}
                className="text-xl font-semibold mb-2"
              >
                Vizioni ynë
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="text-muted-foreground"
              >
                Për të revolucionarizuar industrinë e ndërtimit nëpërmjet të
                qëndrueshme praktikat dhe teknologjinë e fundit.
              </motion.p>
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 1 }}
                className="text-xl font-semibold mb-2"
              >
                Misioni ynë
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 1.1 }}
                className="text-muted-foreground"
              >
                Ofrimi i zgjidhjeve të jashtëzakonshme të ndërtimit duke ruajtur
                standardet më të larta të cilësisë dhe inovacionit.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative h-[600px]"
        >
          <Image
            src={image1}
            alt="Team working"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="relative rounded-lg"
          />

          {/* Radial Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.9) 90%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
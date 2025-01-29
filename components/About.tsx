"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  function Counter({ from = 0, to, duration = 2, className = "" }) {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const animateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min(
            (timestamp - startTime) / (duration * 1000),
            1
          );
          setCount(Math.floor(from + (to - from) * progress));

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          }
        };

        requestAnimationFrame(animateCount);
      }
    }, [from, to, duration, isInView]);

    return (
      <span ref={nodeRef} className={className}>
        {count}
      </span>
    );
  }
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          With over two decades of experience in the construction industry,
          FutureBuilt has established itself as a leader in innovative building
          solutions.
        </p>
      </motion.div>

      {/* About Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Stats & Vision/Mission */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                count: 20,
                text: "Years Experience",
                color: "from-blue-400 to-blue-600",
              },
              {
                count: 50,
                text: "Expert Team",
                color: "from-green-400 to-green-600",
              },
              {
                count: 15,
                text: "Countries Served",
                color: "from-purple-400 to-purple-600",
              },
              {
                count: 98,
                text: "Client Satisfaction",
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
                  <Counter from={0} to={item.count} duration={2} />
                  {item.suffix && item.suffix}
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To revolutionize the construction industry through sustainable
                practices and cutting-edge technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Delivering exceptional construction solutions while maintaining
                the highest standards of quality and innovation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[600px] rounded-lg overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

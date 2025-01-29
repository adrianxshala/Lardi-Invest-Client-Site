import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our latest architectural achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            image:
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            title: "Tech Hub Tower",
            location: "Silicon Valley",
          },
          {
            image:
              "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            title: "Eco Office Complex",
            location: "New York",
          },
          {
            image:
              "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            title: "Innovation Center",
            location: "London",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground">{project.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: <Building2 className="h-12 w-12 text-blue-500 mb-4" />,
    title: "Ndërtimi Komercial",
    description: "Ndërtesa komerciale dhe zyra moderne.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-green-500 mb-4" />,
    title: "Shërbime Inxhinierike ",
    description: "Mbështetje inxhinierike dhe menaxhim projektesh nga ekspertë të ndërtimit.",
  },
  {
    icon: <Users className="h-12 w-12 text-orange-500 mb-4" />,
    title: "Project Management",
    description: "Menaxhimi dhe konsultimi i ekspertëve të projektit.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
        Zgjidhje gjithëpërfshirëse ndërtimi të përshtatura për nevojat tuaja.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="p-6 backdrop-blur-lg bg-background/50 hover:bg-background/80 transition-colors h-52">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission (e.g., send data to API or email service)
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us for your next project.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6 backdrop-blur-lg bg-background/50 p-8 rounded-lg border border-border"
        >
          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition">
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

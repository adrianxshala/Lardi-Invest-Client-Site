"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const Contact = () => {
  // All hooks are declared at the top of the component
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="w-[90%] sm:w-[90%] md:w-1/3 mx-auto"
        >
          <motion.form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const submissionData = {
                ...formData,
                access_key: "b4e02e83-6ee2-4a46-88ff-8c5e19eb86cb",
              };

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(submissionData),
                });

                const result = await response.json();

                if (result.success) {
                  Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                  });

                  setFormData({
                    name: "",
                    email: "",
                    message: "",
                  });
                } else {
                  Swal.fire({
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                  });
                }
              } catch (error) {
                Swal.fire({
                  title: "Error",
                  text: "Network error. Please try again later.",
                  icon: "error",
                });
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-6 backdrop-blur-lg bg-background/50 p-6 sm:p-8 rounded-lg border border-border"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Name Input */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-2"
            >
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Lardi Invest"
                className="w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-2"
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="lardiinvestshpk@gmail.com"
                className="w-full"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                required
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-2"
            >
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter a message"
                className="min-h-[150px] w-full"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      ) : null}
    </>
  );
};

export default Contact;

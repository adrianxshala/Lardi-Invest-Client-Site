"use client";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="relative">
 
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

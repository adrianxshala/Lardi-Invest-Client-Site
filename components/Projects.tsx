import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your local image
import image1 from "../public/assets/461430687_1090691709428087_6957956544023506468_n.jpg";
import image2 from "../public/assets/new1.jpg"
import image3 from "../public/assets/about.jpg"
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
        <h2 className="text-3xl font-bold mb-4">Projektet e veçuara</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Zbuloni arritjet tona më të fundit arkitekturore
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            image: image1, // Use the imported image here
            title: "Tranzit i Ri",
            location: "Prizren",
          },
          {
            image:
              image3,
            title: "Rr.Wesley Clark",
            location: "Przren",
          },
          {
            image:
              image2,
            title: "Rr. Skenderbeu",
            location: "Suharekë",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
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

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// // Importo imazhet në mënyrë korrekte
// import projekt3 from "../public/assets/projekt2.jpg";
// import projekt2 from "../public/assets/projekt3.jpg";
// import projekt4 from "../public/assets/projekt4.jpg";
// const Projects = () => {
//   const projects = [
//     { image: projekt2, title: "Tech Hub Tower", location: "Silicon Valley" },
//     { image: projekt3, title: "Eco Office Complex", location: "New York" },
//     { image: projekt4, title: "Innovation Center", location: "London" },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-3xl font-bold mb-4">Projektet e veçuara</h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Zbuloni arritjet tona më të fundit arkitekturore
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="group relative overflow-hidden rounded-lg"
//           >
//             <div className="relative h-64 w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
//             <div className="absolute bottom-0 p-4">
//               <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//               <p className="text-muted-foreground">{project.location}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "WAR - Digital Laundry Management",
    desc: "Full-stack application built with React.js, Django, and PostgreSQL. Features real-time order tracking, and admin dashboard.",
    githubUrl: "https://github.com/ratinto/war-frontend",
    liveUrl: "https://war-frontend.vercel.app/"
  },
  {
    img: "/image/blog4.svg",
    title: "Vastraa (E-commerce Platform)",
    desc: "Created a scalable e-commerce platform using React.js, Django and PostgreSQL with features like payment integration and inventory management.",
    githubUrl: "https://github.com/ratinto/Vastraa",
    liveUrl: "https://vastraa-sable.vercel.app/"
  },
  {
    img: "/image/blog3.svg",
    title: "RAC Gaming Platform",
    desc: "Created a gaming website optimized for responsiveness and performance. Features include project gallery with hover effects, team and contact sections, and full mobile responsiveness.",
    githubUrl: "https://github.com/ratinto/rac_gaming",
    liveUrl: "https://rac-gaming.vercel.app/"
  },
  {
    img: "/image/blog4.svg",
    title: "Inventory Management System",
    desc: "Developed a real-time inventory tracking system using React.js and Firebase. Includes barcode scanning and automated stock alerts.",
    githubUrl: "https://github.com/ratinto/rac_gaming",
    liveUrl: "https://inventory-system.vercel.app/"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8 scroll-mt-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

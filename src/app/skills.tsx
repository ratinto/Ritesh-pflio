"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full Stack Development",
    children:
      "Proficient in building scalable applications using React.js, Django, and Node.js. Experience in developing robust REST APIs and integrating front-end with backend services.",
  },
  {
    icon: FingerPrintIcon,
    title: "Programming Languages",
    children:
      "Advanced proficiency in Java, JavaScript, and Python. Experienced with Django, React.js, and Node.js. Strong foundation in OOP principles and software design patterns.",
  },
  // {
  //   icon: SwatchIcon,
  //   title: "Cloud & DevOps",
  //   children:
  //     "Experienced in AWS cloud services including EC2, S3, and Lambda. Proficient in Docker containerization and Kubernetes orchestration. Implemented CI/CD pipelines using Jenkins and GitHub Actions.",
  // },
  {
    icon: HashtagIcon,
    title: "Databases & Tools",
    children:
      "Expert in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Proficient in version control using Git and GitHub. Experience with agile methodologies and project management tools.",
  },
  // {
  //   icon: EyeIcon,
  //   title: "AI & Machine Learning",
  //   children:
  //     "Knowledge of ML algorithms and deep learning frameworks. Experience with TensorFlow and computer vision applications. Passionate about integrating AI solutions into web applications.",
  // },
  // {
  //   icon: DocumentTextIcon,
  //   title: "Technical Leadership",
  //   children:
  //     "Led development teams in multiple projects, including a high-traffic laundry management system. Experience in mentoring junior developers and coordinating with cross-functional teams.",
  // },
];

export function Skills() {
  return (
    <section id="skills" className="px-8 py-24 mt-12 scroll-mt-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

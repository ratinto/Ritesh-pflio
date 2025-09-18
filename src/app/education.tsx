"use client";

import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const EDUCATION_ITEMS = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Technology (Artificial Intelligence)",
    institution: "Newton School of Technology, Rishihood University",
    duration: "2024-2028",
    description: "Focusing on AI, Machine Learning, and Full Stack Development",
  },
  {
    icon: BookOpenIcon,
    title: "Intermediate (Class XII)",
    institution: "Army Public School Golconda",
    duration: "2023 - 2024",
    description: "Completed senior secondary education with focus on science and mathematics",
  },
  {
    icon: TrophyIcon,
    title: "Matriculation (Class X)",
    institution: "Army Public School Golconda",
    duration: "2021 - 2022",
    description: "Completed secondary education with excellent academic performance",
  },
];

// export function Education() {
//   return (
    export function Education() {
  return (
    <section id="education" className="px-8 py-32 scroll-mt-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Education
        </Typography>
        <Typography className="mb-4 w-full font-normal !text-gray-500 lg:w-6/12">
          Currently pursuing B.Tech in Artificial Intelligence at Rishihood University, with a strong foundation
          from Army Public School Golconda. Passionate about combining theoretical knowledge with practical applications.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {EDUCATION_ITEMS.map((item, index) => (
          <Card key={index} color="transparent" shadow={false}>
            <CardBody>
              <item.icon className="mb-4 h-8 w-8 text-gray-900" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
              <Typography variant="small" className="font-normal !text-blue-gray-500 mb-2">
                {item.institution}
              </Typography>
              <Typography variant="small" className="font-normal !text-gray-500 mb-4">
                {item.duration}
              </Typography>
              <Typography className="font-normal !text-gray-500">
                {item.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

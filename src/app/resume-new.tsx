"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

interface ExperienceItem {
  icon: any;
  title: string;
  company: string;
  duration: string;
  description: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    icon: ChartBarIcon,
    title: "Full Stack Developer",
    company: "SALTPE",
    duration: "2023 - Present",
    description: "Leading development of scalable enterprise applications using React.js and Spring Boot. Managing cloud infrastructure and implementing microservices architecture."
  },
  {
    icon: PuzzlePieceIcon,
    title: "Software Development Intern",
    company: "SabApplier AI",
    duration: "2023",
    description: "Worked on AI-powered applications and contributed to the development of scalable backend services."
  }
];

export function Resume() {
  return (
    <section className="px-8 py-24 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <BriefcaseIcon className="h-8 w-8 text-gray-900" />
            <Typography variant="h2" color="blue-gray">
              Professional Experience
            </Typography>
          </div>
          <Typography className="mb-4 mt-3 w-full lg:w-9/12 font-normal !text-gray-500">
            Track record of building and scaling enterprise applications, with expertise in full-stack development,
            cloud technologies, and microservices architecture.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <Card key={idx} color="transparent" shadow={false} className="p-4 border border-gray-200">
              <CardBody>
                <div className="flex items-start gap-4">
                  <item.icon className="h-8 w-8 text-gray-900" />
                  <div className="flex-1">
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                      {item.title}
                    </Typography>
                    <Typography variant="small" className="font-normal !text-blue-gray-500 mb-1">
                      {item.company}
                    </Typography>
                    <Typography variant="small" className="font-normal !text-gray-500 mb-4">
                      {item.duration}
                    </Typography>
                    <Typography className="font-normal !text-gray-500">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

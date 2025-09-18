"use client";

import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section id="contact" className="px-8 py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Let&apos;s Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-6/12 !text-gray-500 mb-12"
        >
          I&apos;m currently open to full-stack development opportunities and interesting project collaborations.
          Feel free to reach out through any of the channels below.
        </Typography>
      </div>
      <div className="container mx-auto max-w-3xl">
        <Card shadow={true} className="border border-gray/50">
          <CardBody className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Typography variant="h4" color="white" className="mb-6">
                Contact Information
              </Typography>
              
              <div className="flex flex-col gap-6 items-center mb-8">
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                  <Typography color="white" className="opacity-90">
                    7976ritesh@gmail.com
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="h-6 w-6 text-gray-400" />
                  <Typography color="white" className="opacity-90">
                    Available upon request
                  </Typography>
                </div>
              </div>

              <div className="mt-8">
                <Typography variant="h6" color="white" className="mb-4">
                  Connect with me
                </Typography>
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/ritesh-kumar-sde/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <IconButton variant="text" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20">
                      <i className="fab fa-linkedin text-2xl text-white" />
                    </IconButton>
                  </a>
                  <a 
                    href="https://github.com/ratinto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <IconButton variant="text" className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20">
                      <i className="fab fa-github text-2xl text-white" />
                    </IconButton>
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

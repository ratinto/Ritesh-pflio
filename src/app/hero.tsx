"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { Typewriter } from "@/components/typewriter";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi There! 👋
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            I&apos;m Ritesh Kumar
          </Typography>
          <Typography className="mb-4 text-2xl">
            I&apos;m a{" "}
            <Typewriter
              words={[
                "Full Stack Developer",
                "Game Developer",
                "AI Enthusiast",
                "Tech Lead"
              ]}
              loop={true}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenWords={2000}
            />
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Passionate developer with expertise in React.js and Django.
            Building scalable applications and exploring AI technologies.
          </Typography>
          <div className="mt-8 flex gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="h-5 w-5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" 
                  />
                </svg>
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/Ritesh.jpg`}
          className="h-[36rem] w-[28rem] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

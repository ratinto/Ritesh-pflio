import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200 py-12">
          <div className="flex flex-col items-center md:items-start">
            <Typography className="mb-4 font-normal !text-gray-900 text-lg">
              Ritesh Kumar
            </Typography>
            <Typography className="font-normal !text-gray-700 mb-4 text-center md:text-left">
              Full Stack Developer crafting exceptional digital experiences.
              Always eager to take on new challenges and create innovative solutions.
            </Typography>
            <Typography className="font-normal !text-gray-700">
              Email: <a href="mailto:7976ritesh@gmail.com" aria-label="Send email to 7976ritesh@gmail.com" className="underline">7976ritesh@gmail.com</a>
            </Typography>
          </div>
          
          <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
            <Typography className="mb-4 font-normal !text-gray-900 text-lg">
              Connect With Me
            </Typography>
            <div className="flex gap-4">
              <a
                href="https://github.com/ratinto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ritesh's GitHub profile"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ritesh-kumar-sde/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ritesh's LinkedIn profile"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
            <Typography className="mt-8 text-center font-normal !text-gray-600">
              &copy; {CURRENT_YEAR} All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

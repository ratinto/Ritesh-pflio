"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Skills",
    icon: CommandLineIcon,
    href: "#skills",
  },
  {
    name: "Projects",
    icon: Squares2X2Icon,
    href: "#projects",
  },
  {
    name: "Experience",
    icon: RectangleStackIcon,
    href: "#experience",
  },
  {
    name: "Contact",
    icon: UserCircleIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href || "");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      // Close the mobile menu if it's open
      const mobileMenu = document.querySelector('[data-collapse="navbar"]');
      if (mobileMenu) {
        mobileMenu.setAttribute("data-open", "false");
      }
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center font-medium text-gray-700 hover:text-gray-900 transition-colors"
        onClick={handleClick}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={true} fullWidth className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-0">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-xl font-bold">
          Ritesh Kumar
        </Typography>
        
        <div className="flex items-center">
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <span className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                    <Icon className="h-4 w-4" />
                    {name}
                  </span>
                </NavItem>
              ))}
            </ul>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a
                  href="https://github.com/ratinto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-kumar-sde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>

              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  variant="filled"
                  color="gray"
                  size="sm"
                  className="rounded-full normal-case flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Resume
                </Button>
              </a>
            </div>
          </div>

          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-4 inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <span className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <Icon className="h-4 w-4" />
                  {name}
                </span>
              </NavItem>
            ))}
          </ul>
          
          <div className="mt-6 flex justify-center">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="filled"
                color="gray"
                size="sm"
                className="rounded-full normal-case flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Resume
              </Button>
            </a>
          </div>

          <div className="mt-6 mb-4 flex items-center gap-4 justify-center">
            <a
              href="https://github.com/ratinto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-kumar-sde/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

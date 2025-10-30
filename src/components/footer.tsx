import { Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-12 bg-gradient-to-t from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Typography className="font-semibold text-gray-900 text-lg">
              Ritesh Kumar
            </Typography>
            <Typography className="text-gray-700">
              Full Stack Developer crafting exceptional digital experiences.
              Always eager to take on new challenges and create innovative solutions.
            </Typography>
            <Typography className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:7976ritesh@gmail.com"
                className="underline"
              >
                7976ritesh@gmail.com
              </a>
            </Typography>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-700 hover:shadow-md transition"
              >
                {/* GitHub SVG */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.19a11.07 11.07 0 012.91-.39c.99.01 1.99.13 2.91.38 2.21-1.5 3.19-1.19 3.19-1.19.63 1.64.24 2.86.12 3.16.75.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ritesh-kumar-sde/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm text-blue-700 hover:shadow-md transition"
              >
                {/* LinkedIn SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.9h4.6V24H.2V8.9zM9.2 8.9h4.4v2.05h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.6v-6.63c0-1.58-.03-3.62-2.2-3.62-2.21 0-2.55 1.73-2.55 3.5V24H9.2V8.9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <Typography className="font-semibold text-gray-900 text-lg">
              Quick Links
            </Typography>
            <nav className="flex flex-col gap-2">
              <a
                href="#projects"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                About
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Contact
              </a>
            </nav>

            <div className="mt-4">
              <Typography className="text-sm text-gray-600">
                Available for freelance / contract work
              </Typography>
              <Button
                size="sm"
                variant="outlined"
                className="mt-2 px-4 py-2 text-sm"
                onClick={() =>
                  (window.location.href = "mailto:7976ritesh@gmail.com")
                }
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col gap-4">
            <Typography className="font-semibold text-gray-900 text-lg">
              Stay Updated
            </Typography>
            <Typography className="text-gray-700">
              Subscribe to receive occasional updates on projects and posts.
            </Typography>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // minimal UX: simple clear and browser alert
                if (!email) return;
                setEmail("");
                alert("Thanks — subscription simulated.");
              }}
              className="flex gap-2 items-center"
            >
              <Input
                size="sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="bg-white"
                aria-label="Email for newsletter"
              />
              <Button size="sm" type="submit">
                Subscribe
              </Button>
            </form>

            <div className="mt-auto">
              <Typography className="text-sm text-gray-600">
                &copy; {CURRENT_YEAR} Ritesh Kumar. All rights reserved.
              </Typography>
              <div className="flex gap-3 mt-3 text-xs text-gray-500">
                <a href="/privacy" className="hover:underline">
                  Privacy
                </a>
                <span className="opacity-50">•</span>
                <a href="/terms" className="hover:underline">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

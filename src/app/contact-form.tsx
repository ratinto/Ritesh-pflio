"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  IconButton,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(false);

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      // keep success message for a short time
      setTimeout(() => setSuccess(false), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="px-6 py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto text-center mb-8">
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Let&apos;s Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full md:w-7/12 !text-gray-600"
        >
          I&apos;m open to full-stack roles, freelance projects and collaborations.
          Use the form or reach out via the channels below — I usually reply within a couple of days.
        </Typography>
      </div>

      <div className="container mx-auto max-w-4xl">
        <Card shadow={true} className="overflow-hidden">
          <CardBody className="p-0 bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Info */}
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-xl font-semibold">
                    RK
                  </div>
                  <div>
                    <Typography variant="h5" className="text-white">
                      Ritesh Kumar
                    </Typography>
                    <Typography className="text-sm text-white/80">
                      Full Stack Developer — React · Node · Cloud
                    </Typography>
                  </div>
                </div>

                <Typography className="text-sm text-white/80">
                  Interested in building something together? Share a few details and I'll get back to you.
                </Typography>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="h-5 w-5 text-white/70" />
                    <a
                      href="mailto:7976ritesh@gmail.com"
                      className="text-sm text-white/90 hover:underline"
                    >
                      7976ritesh@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-white/70" />
                    <Typography className="text-sm text-white/80">Available upon request</Typography>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/ritesh-kumar-sde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 hover:bg-white/20 transition-transform hover:scale-105"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.9h4.6V24H.2V8.9zM9.2 8.9h4.4v2.05h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.6v-6.63c0-1.58-.03-3.62-2.2-3.62-2.21 0-2.55 1.73-2.55 3.5V24H9.2V8.9z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/ratinto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 hover:bg-white/20 transition-transform hover:scale-105"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.19a11.07 11.07 0 012.91-.39c.99.01 1.99.13 2.91.38 2.21-1.5 3.19-1.19 3.19-1.19.63 1.64.24 2.86.12 3.16.75.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.42-5.29 5.71.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <Typography variant="h5">Send a message</Typography>
                  {success ? (
                    <div className="inline-flex items-center gap-2 text-green-600">
                      <CheckCircleIcon className="h-5 w-5" />
                      <span className="text-sm">Message sent</span>
                    </div>
                  ) : (
                    <Typography className="text-sm text-gray-500">I&apos;ll respond as soon as I can</Typography>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <Input
                      label="Full name"
                      size="md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={!!errors.name}
                      required
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      label="Email address"
                      size="md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!errors.email}
                      required
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <Textarea
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px]"
                      error={!!errors.message}
                      required
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Button
                      type="submit"
                      size="sm"
                      className="flex-1"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send message"}
                    </Button>

                    <Button
                      variant="outlined"
                      size="sm"
                      color="gray"
                      onClick={() => {
                        setName("");
                        setEmail("");
                        setMessage("");
                        setErrors({});
                      }}
                    >
                      Reset
                    </Button>
                  </div>

                  <Typography className="text-xs text-gray-500">
                    By sending a message you agree to be contacted regarding your inquiry.
                  </Typography>
                </form>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import {Resume} from "./resume";
import { Education } from "./education";
import Testimonial from "./testimonial";
import {ContactForm} from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Education />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}

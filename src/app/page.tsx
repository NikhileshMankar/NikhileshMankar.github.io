"use client";

import Books from "./sections/Books";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import { HeroHeader } from "./sections/Header";
import Hero from "./sections/Hero";
import MobStats from "./sections/MobStats";
import Research from "./sections/Research";
import Roles from "./sections/Roles";
import Skills from "./sections/Skills";
import Works from "./sections/Works";

export default function Home() {
  return (
    <>
    <div className="flex flex-col overflow-hidden">
      <HeroHeader />
      <Hero />
      <MobStats />
      <Skills />
      <Experience />
      <Roles />
      <Education />
      <Research />
      <Works />
      <Certifications />
      <Books />
      <Footer />
    </div>
    </>
  );
}

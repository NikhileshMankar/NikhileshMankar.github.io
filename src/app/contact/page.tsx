"use client";

import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { HeroHeader } from "../sections/Header";


export default function ContactPage() {
  return (
    <>
    <div className="flex flex-col">
      <HeroHeader />
        <Contact />
      <Footer />
    </div>
    </>
  );
}

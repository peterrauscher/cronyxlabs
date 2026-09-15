import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./sections/Hero.tsx";
import { WhatWeDo } from "./sections/WhatWeDo.tsx";
import { Ventures } from "./sections/Ventures.tsx";
import { Advantage } from "./sections/Advantage.tsx";
import { Mission } from "./sections/Mission.tsx";
import { Contact } from "./sections/Contact.tsx";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhatWeDo />
        <Ventures />
        <Advantage />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

'use client';

import React from 'react';
import { NavBar, Hero, TechStack, AboutMe, Projects, Footer } from '@components';

//------------------------------------------------------------

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="isolate pb-32">
        <Hero />
        <TechStack />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

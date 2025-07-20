'use client';

import React from 'react';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';

//------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <AboutMe />
      <Projects />
    </>
  );
}

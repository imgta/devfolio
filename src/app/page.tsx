'use client';

import { Hero } from '@/components/Hero.tsx';
import { TechStack } from '@/components/TechStack.tsx';
import { AboutMe } from '@/components/AboutMe.tsx';
import { Projects } from '@/components/Projects.tsx';

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

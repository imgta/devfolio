'use client';

import { Hero } from '@/components/hero';
import { TechStack } from '@/components/techstacks';
import { AboutMe } from '@/components/aboutme';
import { Projects } from '@/components/projects';

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

"use client";

import React from "react";
import "@styles/typing.css"
import { NavBar, Hero, TechStack, Projects, Contact, Footer, AboutMe } from "@components";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="isolate">
          <div className="pb-32">
              <Hero />
              <AboutMe />
              <TechStack />
              <Projects />
              <Contact />
          </div>
      </main>
      <footer>
          <Footer/>
      </footer>
    </>
  )
}

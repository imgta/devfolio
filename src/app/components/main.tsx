"use client";

import React from "react";
import "@/app/assets/styles/typing.css"
import NavBar from "./navigation";
import Hero from "./hero";
import TechStack from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import AboutMe from "./about";

//------------------------------------------------------------
export default function Main() {
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
    );
}

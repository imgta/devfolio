"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "@/app/assets/styles/gsapText.css";
import Header from "./header";
import Hero from "./hero";
import TechStack from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";


//------------------------------------------------------------
export default function Main() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const textElements = gsap.utils.toArray(".text");

            textElements.forEach((text: any) => {
                gsap.to(text, {
                    backgroundSize: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: text,
                        start: "center 80%",
                        end: "center 20%",
                        scrub: true,
                    },
                });
            });
        }
    }, []);

    return (
        <>
            <Header />
            <main className="isolate">
                <div className="pb-32">
                    <Hero />
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

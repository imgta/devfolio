"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/assets/styles/gsapText.css";
import "@/app/assets/styles/typing.css"
import NavBar from "./navigation";
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

            const textElements = gsap.utils.toArray(".gsap-text");

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
            <NavBar />
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

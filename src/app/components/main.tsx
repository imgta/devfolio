"use client";

import React, { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import '../assets/styles/gsapText.css'
import Skills from "./skills";
import Projects from "./projects";
import AvatarPic from "./avatar";

//------------------------------------------------------------
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

//------------------------------------------------------------
export default function Main() {
    return (
        <main className="isolate">
            <div className="pb-32">
            {/* Hero section */}
            <div className="flex justify-center isolate -z-10 pb-4">
                <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
                    <div className="max-sm:grid-cols-none max-w-2xl grid grid-cols-2 gap-x-4 gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-4">
                        <h1 className="gsap-text w-full lg:text-[3.5rem] md:text-5xl sm:text-4xl font-bold tracking-tight text-gray-900">
                            Gordon Ta<span>Full Stack Developer</span>
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-lg leading-8 text-gray-600">
                                Hi, I&apos;m Gordon, a passionate Full Stack Software
                                Developer based in Boston, MA.
                            </p>
                        </div>
                        <AvatarPic/>
                    </div>
                </div>
            </div>

            <Skills/>
            <Projects/>
            {/* Content section */}
            {/* <div id="projects" className="mt-32 overflow-hidden sm:mt-40">
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Projects
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                Quasi est quaerat. Sit molestiae et. Provident
                                ad dolorem occaecati eos iste. Soluta rerum
                                quidem minus ut molestiae velit error quod.
                                Excepturi quidem expedita molestias quas.
                            </p>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                                Quasi aperiam sit non sit neque reprehenderit.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>
        </main>
    );
}

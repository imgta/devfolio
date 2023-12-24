import React, { useState } from "react";
import LogoSVG from "../assets/logos";
import Image from "next/image";
import playtrace from "../assets/images/playtrace.png";
import vialect from "../assets/images/vialect.png";
import backtab from "../assets/images/backtab.png";

const projects = [
    {
        id: 1,
        title: "ViaLect",
        tagline: "Multimedia Content Transformer",
        date: "November 2023",
        href: "#vialect",
        image: vialect,
        description:
            "ViaLect is a multimedia content transformer streamlines your media intake by transforming video/audio content into navigable collections of transcribed text and summaries.",
        stack: [
            "Streamlit",
            "OpenAI",
            "HuggingFace",
            "Qdrant",
            "Haystack",
            "PyTorch",
            "Docker",
        ],
        demo: null,
        repo: "https://github.com/imgta/vialect",
    },
    {
        id: 2,
        title: "PlayTrace",
        tagline: "Social Events Hosting",
        date: "August 2023",
        href: "#playtrace",
        image: playtrace,
        description:
            "playTrace is a full-stack, social events hosting app that aims to electrify social circles and allow communities to be explored, candidly, through customizable event pages.",
        stack: ["Nuxt", "Vue", "Strapi", "Cloudflare", "Supabase", "Render"],
        demo: "https://playtrace.app",
        repo: "https://github.com/imgta/playtrace-nuxt",
    },
    {
        id: 3,
        title: "backTAB",
        tagline: "Group Receipts Tracking",
        date: "July 2023",
        href: "#backtab",
        image: backtab,
        description:
            "Receipts Tracking App that simplifies how groups of friends can track and split receipt costs during extended trips, or just a night out! As bills incur, users can snap a photo and upload their receipts to their selected group.",
        stack: ["React", "FastAPI", "PostgreSQL", "GitLab", "Docker"],
        demo: null,
        repo: "https://gitlab.com/imgta/backtab",
    },
];

//------------------------------------------------------------
export default function Projects() {
    return (
        <>
            <div
                id="projects"
                className="mx-auto mt-4 max-w-4xl px-6 lg:px-8 pb-14"
            >
                <h2 className="gsap-text font-semibold text-4xl text-center">
                    PROJECTS<span>Case Studies and Challenges.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum dolor sit amet consect adipisicing elit.
                    Possimus magnam voluptatum cupiditate veritatis in accusamus
                    quisquam.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid w-full grid-cols-1 lg:mx-0">
                    {projects.map((proj, index) => (
                        <div
                            key={proj.id}
                            className={`flex flex-col lg:flex-row ${
                                index % 2 === 0 ? "" : "lg:flex-row-reverse"
                            } gap-8 lg:gap-12 my-12`}
                        >
                            {/* Project Description */}
                            <div className="lg:flex-1">
                                <h2 className="text-3xl font-semibold">
                                    {proj.title}
                                    <span className="block text-xl font-normal">
                                        {proj.tagline}
                                    </span>
                                </h2>
                                <div className="mt-4 inline-flex">
                                    {proj.stack.map((tech, techIndex) => (
                                        <div key={techIndex} className="flex justify-start px-2 h-full w-full hover:scale-110 text-center text-sm font-semibold text-transparent hover:text-black/80">
                                            <LogoSVG name={tech} wh={6} scale={100} />
                                            <span className="align-middle hover:cursor-pointer pt-0.5">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-gray-600 text-xl">
                                    {proj.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="lg:flex-1">
                                <Image
                                    src={proj.image}
                                    alt={`${proj.title} project image`}
                                    width={600}
                                    height={420}
                                    className="rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    ))}

                    {/* <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
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
                    </div> */}
                </div>
            </div>
        </>
    );
}

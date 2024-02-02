import Image from "next/image";
import React, { useState } from "react";
import '@/app/assets/styles/projects.css'
import LogoSVG from "@/app/utils/logos";
import playtrace from "@/app/assets/images/playtrace.webp";
import playtracePng from "@/app/assets/images/playtrace.png";
import vialect from "@/app/assets/images/vialect.webp";
import vialectPng from "@/app/assets/images/vialect.png";
import backtab from "@/app/assets/images/backtab.webp";
import backtabPng from "@/app/assets/images/backtab.png";

//------------------------------------------------------------
const projects = [
    {
        id: 1,
        title: "Vialect",
        tagline: "Multimedia Content Transformer",
        date: "November 2023",
        href: "#vialect",
        imageWebp: vialect,
        imagePng: vialectPng,
        stack: ["Streamlit", "OpenAI", "ChatGPT", "HuggingFace", "PyTorch"],
        description:
            "Vialect is a multimedia content transformer streamlines your media intake by leveraging NLP to transcribe video/audio content into navigable collections of transcribed text and summaries.",
        wip: "Vialect 2.0 - migration to FastAPI/Vue",
        demo: null,
        repo: "https://github.com/imgta/vialect",
    },
    {
        id: 2,
        title: "playTrace",
        tagline: "Social Events Hosting",
        date: "August 2023",
        href: "#playtrace",
        imageWebp: playtrace,
        imagePng: playtracePng,
        stack: ["Nuxt", "Vue", "Strapi", "Cloudflare", "Supabase", "Render"],
        description:
            "playTrace is a full-stack, social events hosting app that aims to electrify social circles and allow communities to be explored, candidly, through customizable event pages.",
        demo: "https://playtrace.app",
        repo: "https://github.com/imgta/playtrace-nuxt",
    },
    {
        id: 3,
        title: "backTAB",
        tagline: "Group Receipts Tracking",
        date: "July 2023",
        href: "#backtab",
        imageWebp: backtab,
        imagePng: backtabPng,
        stack: ["React", "FastAPI", "PostgreSQL", "GitLab", "Docker"],
        description:
            "Receipts Tracking App that simplifies how groups of friends can track and split receipt costs during extended trips, or just a night out! As bills incur, users can snap a photo and upload their receipts to their selected group.",
        demo: null,
        repo: "https://gitlab.com/imgta/backtab",
    },
];

//------------------------------------------------------------
function getRepoLogo(repoUrl: string) {
    if (repoUrl.includes("github.com"))
        return <LogoSVG name="github" wh={1.5} scale={1} />;
    else if (repoUrl.includes("gitlab.com"))
        return <LogoSVG name="gitlab" wh={1.5} scale={1} />;
    else return null;
}

function linkOutSvg() {
    return (
        <>
            <svg
                className="hidden group-hover:block w-[1.3rem] h-[1.3rem] pr-0.5 mb-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
            >
                <path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"></path>
            </svg>
            <span className="font-medium group-hover:font-semibold pr-1">Demo</span>
            <span className="flex justify-center items-center pl-[0.075rem]">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
        </>
    );
}
//------------------------------------------------------------
export default function Projects() {
    const [hoverProjectId, setHoverProjectId] = useState<number | null>(null);

    return (
        <>
            <div
                id="projects"
                className="heading mx-auto justify-center items-center max-w-5xl mt-4 px-8 pb-10"
            >
                    <div className="group text-[2.4rem] font-bold text-gray-900 text-center">
                    <div className="header-con inline-block group-hover:hidden">
                        <h1 className="header-text">
                            Projects
                        </h1>
                    </div>
                    <div className="typed-con hidden group-hover:inline-block">
                        <span className="typed">Case Studies and Challenges</span>
                        <span className="blinking">_</span>
                    </div>
                </div>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    The following projects stemmed from a combination of sheer curiosity, boyish enthusiasm, and voluntary challenges. Each project warranted their own case studies allowing me to further develop my skills and grow.
                </p>
            </div>

            <div className="mx-auto max-w-7xl items-center lg:flex px-8">
                <div className="mx-auto grid w-full grid-cols-1 lg:mx-0">
                    {projects.map((proj, index) => (
                        <div
                            key={proj.id}
                            className={`flex flex-col lg:flex-row ${
                                index % 2 === 0 ? "" : "lg:flex-row-reverse"
                            } gap-8 lg:gap-12 my-12`}
                        >
                            {/* PROJECT INFO */}
                            <div className="lg:flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-semibold">
                                        {proj.title}
                                    </h2>
                                    <div className="flex">
                                        <div className="px-4">
                                            {proj.demo && (
                                                <a
                                                    href={proj.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center group"
                                                >
                                                    {linkOutSvg()}
                                                </a>
                                            )}
                                        </div>
                                        <div>
                                            {proj.repo && (
                                                <a
                                                    href={proj.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center hover:scale-125"
                                                >
                                                    {getRepoLogo(proj.repo)}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <span className="block text-base font-medium px-[0.1rem] text-gray-600">
                                    {proj.tagline}
                                </span>

                                {/* TECH STACK */}
                                <div className="mt-2 inline-flex group">
                                    {proj.stack.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center justify-start px-1 h-full w-full hover:scale-110 text-center"
                                        >
                                            <LogoSVG
                                                name={tech}
                                                wh={1.5}
                                                scale={1}
                                            />
                                            <span className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-xs group-hover:text-gray-900 text-xs font-semibold items-center hover:cursor-pointer pl-0.5">
                                                {tech}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-gray-700 text-lg">
                                    {proj.description}
                                </p>
                                <p className="mt-4 text-gray-600 text-sm font-medium">
                                    {proj.wip ? `Coming Soon: ${proj.wip}` : ''}
                                </p>
                            </div>

                            {/* PROJECT IMAGE */}
                            <div className="project lg:flex-1 overflow-hidden h-[420px]">
                                <div onMouseEnter={() => setHoverProjectId(proj.id)} onMouseLeave={() => setHoverProjectId(null)}>
                                <Image
                                    src={hoverProjectId === proj.id ? proj.imageWebp : proj.imagePng}
                                    alt={`${proj.title} project image`}
                                    className={hoverProjectId === proj.id ? "webp rounded-2xl object-cover" : "rounded-2xl object-cover"}
                                />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* OTHER IMAGES */}
                </div>
            </div>
        </>
    );
}

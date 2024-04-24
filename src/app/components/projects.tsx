import Image from "next/image";
import React, { useState } from "react";
import "@/app/assets/styles/projects.css";
import LogoSVG from "@/app/utils/logos";
import playtrace from "@/app/assets/images/playtrace.webp";
import playtracePng from "@/app/assets/images/playtrace.png";
import vialect from "@/app/assets/images/vialect.webp";
import vialectPng from "@/app/assets/images/vialect.png";
import backtab from "@/app/assets/images/backtab.webp";
import backtabPng from "@/app/assets/images/backtab.png";

//------------------------------------------------------------
const current = {
    id: 1,
    title: "Stealth Project (in progress)",
    tagline: "",
    start: "01/2024",
    end: "present",
    href: "#secret",
    frames: ["Nuxt", "FastAPI", "Drizzle ORM", "Supabase"],
    cloud: ["Cloudflare D1","Oracle Cloud", "Docker", "Stripe"],
    languages: ["JavaScript", "TypeScript", "SQLite", "Python"],
    description: "Currently being held in private repositories until launch.",
    infos: [
        "Dockerized FastAPI backend, hosted on Oracle Cloud Instance, reverse proxied with NGINX",
        "Fine-tuned AI LLM with prompt function calling and extensive input/output trace logs",
        "Cloudflare D1 serverless database managed via Drizzle ORM and custom SQLite migrations",
        "SSR and Supabase JWT-authentication within Nuxt server routes and middleware",
        "CI/CD workflow through Docker Compose, GitHub Actions, and shell scripts",
    ],
};

const projects = [
    {
        id: 1,
        title: "Vialect",
        tagline: "Multimedia Content Transformer",
        start: "11/2023",
        end: "12/2023",
        href: "#vialect",
        imageWebp: vialect,
        imagePng: vialectPng,
        stack: ["Streamlit", "Python", "OpenAI", "HuggingFace", "PyTorch"],
        description:
            "Vialect is a multimedia content transformer streamlines your media intake by leveraging NLP to transcribe video/audio content into navigable collections of transcribed text and summaries.",
        demo: null,
        repo: "https://github.com/imgta/vialect",
    },
    {
        id: 2,
        title: "playTrace",
        tagline: "Social Events Hosting",
        start: "08/2023",
        end: "11/2023",
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
        start: "06/2023",
        end: "07/2023",
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
            <span className="font-medium group-hover:font-semibold pr-1">
                Demo
            </span>
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
                        <h1 className="header-text">Projects</h1>
                    </div>
                    <div className="typed-con hidden group-hover:inline-block">
                        <span className="typed">
                            Case Studies and Challenges
                        </span>
                        <span className="blinking">_</span>
                    </div>
                </div>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    The following projects stemmed from a combination of sheer
                    curiosity, boyish enthusiasm, and voluntary challenges. Each
                    project warranted their own case studies allowing me to
                    further develop my skills and grow.
                </p>
            </div>

            {/* CURRENT PROJECT */}
            <div className="mx-auto max-w-4xl items-center px-8">
                <div className="flex justify-center items-center">
                    <h2 className="text-3xl font-semibold blur-[1.825px] hover:blur-0 hover:cursor-not-allowed tracking-tight">{current.title}</h2>
                </div>

                <div className="flex justify-center pt-1">
                    <p className="inline-flex text-gray-600 text-sm font-mono tracking-tighter">
                        {current.start} {`\u2014`} {current.end}
                    </p>
                </div>

                {/* CURRENT STACK */}
                <div className="flex justify-center items-center pt-2">
                    <div className="mt-2 inline-flex group">
                        {current.frames.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-start px-1.5 h-full w-full hover:scale-110 text-center"
                            >
                                <LogoSVG
                                    name={tech.split(" ")[0]}
                                    wh={1.5}
                                    scale={1}
                                />
                                <span className="max-w-xs whitespace-nowrap transition-all duration-300 ease-in-out group-hover:text-gray-900 text-xs font-semibold items-center hover:cursor-pointer pl-1">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mt-1 inline-flex group">
                        {current.cloud.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-start px-1.5 h-full w-full hover:scale-110 text-center"
                            >
                                <LogoSVG
                                    name={tech.split(" ")[0]}
                                    wh={1.5}
                                    scale={1}
                                />
                                <span className="max-w-xs whitespace-nowrap transition-all duration-300 ease-in-out group-hover:text-gray-900 text-xs font-semibold items-center hover:cursor-pointer pl-1">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CURRENT INFO */}
                <div className="pt-4 text-gray-800 font-medium text-lg">
                    {current.description}
                    <div className="flow-root pt-1">
                        <ul role="list" className="-mb-8">
                            {current.infos.map((info, idx) => (
                                <li key={idx}>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4">
                                        <div>
                                            <p className="font-medium text-base text-gray-600 tracking-tight sm:pl-6">
                                                - {info}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-auto max-w-7xl items-center lg:flex px-8">
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

                                <div className="flex justify-between">
                                    <span className="inline-flex text-base font-medium px-[0.1rem] text-gray-600">
                                        {proj.tagline}
                                    </span>
                                    <p className="inline-flex text-gray-600 text-sm font-mono tracking-tighter">
                                        {proj.start} {`\u2014`} {proj.end}
                                    </p>
                                </div>
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
                                {/* DESCRIPTION */}
                                <p className="mt-2 text-gray-700 text-lg">
                                    {proj.description}
                                </p>
                            </div>

                            {/* PROJECT IMAGE */}
                            <div className="project lg:flex-1 overflow-hidden h-[420px]">
                                <div
                                    onMouseEnter={() =>
                                        setHoverProjectId(proj.id)
                                    }
                                    onMouseLeave={() => setHoverProjectId(null)}
                                >
                                    <Image
                                        src={
                                            hoverProjectId === proj.id
                                                ? proj.imageWebp
                                                : proj.imagePng
                                        }
                                        alt={`${proj.title} project image`}
                                        className={
                                            hoverProjectId === proj.id
                                                ? "webp rounded-2xl object-cover"
                                                : "rounded-2xl object-cover"
                                        }
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

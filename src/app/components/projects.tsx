import Image from "next/image";
import React, { useState } from "react";
import "@styles/projects.css";
import LogoSVG from "@utils/logos";
import playtrace from "@images/playtrace.webp";
import playtracePng from "@images/playtrace.png";
import vialect from "@images/vialect.webp";
import vialectPng from "@images/vialect.png";
import backtab from "@images/backtab.webp";
import backtabPng from "@images/backtab.png";
import videoblogaiSvg from "@images/logo-min.svg";

//------------------------------------------------------------
const current = {
    id: 1,
    title: "Video Blog AI",
    tagline: "",
    start: "01/2024",
    end: "06/2024",
    href: "https://videoblog.ai?utm_source=imgta.dev&utm_medium=referral",
    stack: ["Nuxt", "FastAPI", "Cloudflare", "Oracle", "Docker", "Stripe", "Drizzle", "Supabase"],
    frames: ["Nuxt", "FastAPI", "Drizzle", "Supabase"],
    cloud: ["Cloudflare", "Oracle", "Docker", "Stripe"],
    languages: ["JavaScript", "TypeScript", "SQLite", "Python"],
    description: "Currently being held in private repositories until launch.",
    infos: [
        "Collaborated with a fellow developer to build a generative AI app for content creators using Nuxt with enhanced Server-Side Rendering (SSR) performance and serverless integrations",
        "Architected and applied database schemas to Cloudflare D1's serverless SQLite databases, connected through Nuxt server routes leveraging Drizzle ORM and Zod schema validation",
        "Implemented secure user authentication and middleware with Supabase and custom JWTs",
        "Developed a Dockerized FastAPI backend on Oracle Cloud, configured with an NGINX reverse proxy",
        "Refined AI prompts with function calling, established systematic input/output trace logs for debugging",
        "Integrated Stripe for payment processing, set up MailerLite for targeted email campaigns, and incorporated FreshDesk for customer support ticketing",
    ],
};

const projects = [
    {
        id: 1,
        title: "Vialect",
        tagline: "Multimedia Transformer",
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
        // demo: "https://playtrace.app",
        repo: "https://github.com/imgta/playtrace-nuxt",
    },
    {
        id: 3,
        title: "backTAB",
        tagline: "Receipts Tracking",
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
            <div id="projects" className="heading mx-auto justify-center items-center max-w-4xl mt-4 px-6 pb-10">
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
                    curiosity, boyish enthusiasm, and voluntary challenges. I enjoy worthwhile
                    projects that warrant exploratory case studies in order to succeed.
                </p>
            </div>

            {/* CURRENT PROJECT */}
            <div className="mx-auto max-w-full lg:max-w-4xl">

                <div className="justify-center mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href={current.href} target="_blank">
                                <Image className="h-8 sm:h-10 w-auto" src={videoblogaiSvg} alt="Video Blog AI" />
                            </a>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm font-mono tracking-tighter">
                                {current.start}&mdash;{current.end}
                            </p>
                        </div>
                    </div>

                    <div className="justify-center items-center py-2">
                        <div className="inline-flex group space-x-3">
                            {current.stack.map((tech, idx) => (
                                <div key={idx} className="flex items-center justify-start h-full w-full hover:scale-110 text-center">
                                    <LogoSVG name={tech.split(" ")[0]} wh={1.5} scale={1} />
                                    <span className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-xs group-hover:text-gray-900 text-xs font-semibold items-center hover:cursor-pointer pl-0.5">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* CURRENT STACK */}
                <div className="max-w-full lg:max-w-4xl mx-auto">
                    <div className="flex flex-col h-auto bg-[#1e1e1f] text-white font-mono rounded-xl text-sm sm:text-base">
                        <div className="flex items-center h-8 px-3 bg-[#313132] rounded-t-xl">
                            <div className="h-3 w-3 mr-2 rounded-full bg-[#ff5d5a]"></div>
                            <div className="h-3 w-3 mr-2 rounded-full bg-[#f5c350]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#65cd57]"></div>
                            <div className="mx-auto pr-14 text-sm">imgta@prev-project</div>
                        </div>

                        <div className="flex-1 p-1 sm:p-2 leading-[1.3rem]">
                            <div>First start: Mon Jan 08 11:07:23 in private</div>
                            <div><span className="text-[#6366f1f2]">~</span> cd stealth</div>
                            <div><span className="text-[#6366f1f2]">~/stealth</span> ls -a</div>

                            <div className="grid grid-cols-3 gap-x-3 sm:gap-x-8 sm:grid-cols-4">
                                <div className="order-first">.</div>
                                <div className="text-[#1ad878] sm:order-1 order-9">Cloudflare.d1</div>
                                <div className="text-[#1ad878] sm:order-2 order-7">FastAPI.py</div>
                                <div className="sm:order-3 order-5">README.md</div>
                                <div className="sm:order-4 order-3">..</div>
                                <div className="sm:order-5 order-1">Docker.yml</div>
                                <div className="text-[#1ad878] sm:order-6 order-10">Nuxt-3.vue</div>
                                <div className="text-[#1ad878] sm:order-7 order-8">Stripe.event</div>
                                <div className="text-[#1ad878] sm:order-8 order-6">.2-Devs.env</div>
                                <div className="sm:order-9 order-4">DrizzleORM.sql</div>
                                <div className="sm:order-10 order-2">Oracle.ssh</div>
                                <div className="order-last">Supabase.auth</div>
                            </div>

                            <div><span className="text-[#6366f1f2]">~/stealth</span> cat README.md</div>
                            <div>
                                # Stealth Project in progress...<br />
                                &gt; Held in private git repos until launch<br /><br />
                                ## TODOS Roadmap 2024<br />
                                - [x] Collaborated with a fellow dev to build a GenAI app for content creators<br />
                                - [x] Accelerated Server-Side Rendering routes with SQLite integrations on the edge<br />
                                - [x] Designed complete and thougthful schemas for our Cloudflare D1 serverless databases<br />
                                - [x] Set up protective database-schema interfacing with Drizzle ORM and Zod validation<br />
                                - [x] Created an inuitive user auth process via Supabase, middlewares, and in-house JWTs<br />
                                - [x] Built, Dockerized, and deployed a FastAPI backend app on an Oracle Cloud instance<br />
                                - [x] Configured an NGINX reverse proxy to securely handle backend-frontend requests<br />
                                - [x] Improved AI prompt reliability and consistency with function calling<br />
                                - [x] Introduced continuous AI input/output trace logs to streamline debugging<br />
                                - [x] Initiated and refined Stripe integration for subscription payment processing<br />
                                - [x] Leveraged MailerLite for email campaigns, FreshDesk for customer support ticketing<br />
                                - [x] 🚀 Launched: <a className="text-[#1ad878] hover:text-[#6366f1f2]" href="https://videoblog.ai?utm_source=imgta.dev&utm_medium=referral" target="_blank">Video Blog AI</a>, a video to blog post AI converter
                            </div>
                            <div>
                                <div className="flex">
                                    <span className="text-[#6366f1f2]">~/stealth </span>
                                    <span className="terminal_cursor ml-2 mt-0.5"></span>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 mx-auto max-w-6xl items-center lg:flex px-8">
                <div className="mx-auto grid w-full grid-cols-1 lg:mx-0">
                    {projects.map((proj, index) => (
                        <div key={proj.id}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-12 my-12
                            ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                            {/* PROJECT INFO */}
                            <div className="lg:flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-semibold">
                                        {proj.title}
                                    </h2>
                                    <div className="flex">
                                        <div>
                                            {proj.repo && (
                                                <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125">
                                                    {getRepoLogo(proj.repo)}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end tracking-tighter">
                                    <span className="inline-flex text-base font-medium px-[0.1rem] text-gray-600 ">
                                        {proj.tagline}
                                    </span>
                                    <p className="inline-flex text-gray-600 text-sm font-mono">
                                        {proj.start}&mdash;{proj.end}
                                    </p>
                                </div>
                                {/* TECH STACK */}
                                <div className="mt-2 inline-flex group">
                                    {proj.stack.map((tech, techIndex) => (
                                        <div key={techIndex} className="flex items-center justify-start px-1 h-full w-full hover:scale-110 text-center">
                                            <LogoSVG name={tech} wh={1.5} scale={1} />
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
                                <div onMouseEnter={() => setHoverProjectId(proj.id)}
                                    onMouseLeave={() => setHoverProjectId(null)}>
                                    <Image
                                        src={hoverProjectId === proj.id
                                            ? proj.imageWebp
                                            : proj.imagePng
                                        }
                                        alt={`${proj.title} project image`}
                                        className={hoverProjectId === proj.id
                                            ? "webp rounded-2xl object-cover"
                                            : "rounded-2xl object-cover"
                                        } />
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

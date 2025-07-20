import React, { useState } from 'react';
import { LogoSVG, VibbySVG } from './ui/LogoSVG';
import { TypedHeader } from './ui/TypedHeader';
import Image from 'next/image';
import { cn } from '@/lib/utils';

//------------------------------------------------------------

const current = {
    id: 1,
    title: 'Video Blog AI',
    tagline: '',
    start: '01/2024',
    end: '06/2024',
    href: 'https://videoblog.ai?utm_source=imgta.dev&utm_medium=referral',
    stack: ['Nuxt', 'FastAPI', 'Cloudflare', 'Oracle', 'Docker', 'Stripe', 'Drizzle', 'Supabase'],
    frames: ['Nuxt', 'FastAPI', 'Drizzle', 'Supabase'],
    cloud: ['Cloudflare', 'Oracle', 'Docker', 'Stripe'],
    languages: ['JavaScript', 'TypeScript', 'SQLite', 'Python'],
    description: 'Currently being held in private repositories until launch.',
    infos: [
        'Co-founded and shipped a generative AI video-to-blog platform, scaling to 2,000+ users in 3 months',
        'Engineered and optimized AI prompt pipelines for high-quality article research, generation, and editing',
        'Deployed Dockerized FastAPI backend on Oracle with NGINX reverse proxy and GitHub Actions CI/CD',
        'Managed scalable serverless architecture, Stripe subscription billing, and customer support ticketing',
    ],
};

const PROJECTS = [
    {
        id: 1,
        title: 'Word Wisp',
        tagline: 'AI Literary Co-Author',
        start: '05/2025',
        end: '05/2025',
        href: '#wordwisp',
        image: {
            src: '/img/wordwisp',
            width: 520,
            height: 398.13,
        },
        stack: ['NextJs', 'EC2', 'Neon', 'Chroma', 'Docker', 'OpenAI'],
        description:
            'Word Wisp is an AI co-authoring tool that rewrites user text in the styles of classic literary authors through contextual chunking and semantic retrieval of public domain literature via Project Gutenberg.',
        demo: 'https://wisp-eta.vercel.app/',
    },
    {
        id: 2,
        title: 'Vialect',
        tagline: 'Multimedia Transformer',
        start: '11/2023',
        end: '12/2023',
        href: '#vialect',
        image: {
            src: '/img/vialect',
            width: 520,
            height: 398.13,
        },
        stack: ['Streamlit', 'Python', 'OpenAI', 'HuggingFace', 'PyTorch'],
        description:
            'Vialect is a multimedia content transformer streamlines your media intake by leveraging NLP to transcribe video/audio content into navigable collections of transcribed text and summaries.',
        demo: null,
        repo: 'https://github.com/imgta/vialect',
    },
    {
        id: 3,
        title: 'playTrace',
        tagline: 'Social Events Hosting',
        start: '08/2023',
        end: '11/2023',
        href: '#playtrace',
        image: {
            src: '/img/playtrace',
            width: 520,
            height: 398.13,
        },
        stack: ['Nuxt', 'Vue', 'Strapi', 'Cloudflare', 'Supabase', 'Render'],
        description:
            'playTrace is a full-stack, social events hosting app that aims to electrify social circles and allow communities to be explored, candidly, through customizable event pages.',
    },
    {
        id: 4,
        title: 'backTAB',
        tagline: 'Receipts Tracking',
        start: '06/2023',
        end: '07/2023',
        href: '#backtab',
        image: {
            src: '/img/backtab',
            width: 520,
            height: 398.13,
        },
        stack: ['React', 'FastAPI', 'PostgreSQL', 'GitLab', 'Docker'],
        description:
            'Receipts Tracking App that simplifies how groups of friends can track and split receipt costs during extended trips, or just a night out! As bills incur, users can snap a photo and upload their receipts to their selected group.',
        demo: null,
        repo: 'https://gitlab.com/imgta/backtab',
    },
];

//------------------------------------------------------------

function getRepoLogo(repoUrl: string) {
    const platform = repoUrl.includes('github.com')
        ? 'github'
        : repoUrl.includes('gitlab.com')
            ? 'gitlab'
            : null;

    if (!platform) return;

    return <LogoSVG name={platform} wh={1.5} scale={1} />;
}

function linkOutSvg() {
    return (
        <>
            <svg className="hidden group-hover:block w-[1.3rem] h-[1.3rem] pr-0.5 mb-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z" />
            </svg>
            <span className="font-medium group-hover:font-semibold pr-1">
                Demo
            </span>
            <span className="flex justify-center items-center pl-[0.075rem]">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
        </>
    );
}

//------------------------------------------------------------

export function Projects() {
    const [hoverProjectId, setHoverProjectId] = useState<number | null>(null);

    return (
        <>
            <section className="mx-auto justify-center items-center max-w-4xl mt-4 px-6 pb-10">
                <TypedHeader
                    id="projects"
                    title="Projects"
                    typedText="Case Studies and Challenges"
                />
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    The following projects stemmed from a combination of sheer
                    curiosity, boyish enthusiasm, and voluntary challenges. I enjoy worthwhile
                    projects that warrant exploratory case studies in order to succeed.
                </p>
            </section>

            {/* CURRENT PROJECT */}
            <section className="mx-auto max-w-full lg:max-w-4xl">
                <div className="justify-center mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href={current.href} target="_blank">
                                <VibbySVG />
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
                <div className="max-w-full lg:max-w-4xl mx-auto px-0.5 sm:px-0">
                    <div className="flex flex-col h-auto bg-[#1e1e1f] text-white font-mono rounded-xl text-xs sm:text-sm">
                        <div className="flex items-center h-8 px-3 bg-[#313132] rounded-t-xl">
                            <div className="size-3 mr-2 rounded-full bg-[#ff5d5a]"></div>
                            <div className="size-3 mr-2 rounded-full bg-[#f5c350]"></div>
                            <div className="size-3 rounded-full bg-[#65cd57]"></div>
                            <div className="mx-auto pr-14 text-sm">imgta@prev-project</div>
                        </div>

                        <div className="flex-1 p-1.5 sm:p-2 leading-5 sm:leading-[1.3rem]">
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
                                <div className="text-[#1ad878] sm:order-6 order-10">Nuxt3.vue</div>
                                <div className="text-[#1ad878] sm:order-7 order-8">Stripe.event</div>
                                <div className="text-[#1ad878] sm:order-8 order-6">.2dev.env</div>
                                <div className="sm:order-9 order-4">DrizzleORM.sql</div>
                                <div className="sm:order-10 order-2">Oracle.ssh</div>
                                <div className="order-last">Supabase.auth</div>
                            </div>

                            <br />
                            <div><span className="text-[#6366f1f2]">~/stealth</span> cat README.md</div>
                            <div className="text-white/85 tracking-tighter sm:tracking-normal">
                                ## TODOS (2024)<br />
                                - [x] Co-found and ship a generative AI video-to-blog SaaS product for content creators<br />
                                - [x] Design thoughtful database schemas that scale to over 2000+ users within 3 months<br />
                                - [x] Engineer and optimize prompt pipelines for quality article research, generation, and edits<br />
                                - [x] Deploy Dockerized FastAPI backend on Oracle, with NGINX reverse proxy & GitHub Actions CI/CD<br />
                                - [x] Initiate custom affiliate program, Stripe subscription billing, and customer support ticketing<br />
                                - [x] 🚀 Launch <a className="text-[#1ad878] hover:text-[#6366f1f2]" href="https://videoblog.ai?utm_source=imgta.dev&utm_medium=referral" target="_blank">Video Blog AI</a>, an SEO-optimized video-to-blog platform
                            </div>

                            <br />

                            <div className="flex pb-4">
                                <span className="text-[#6366f1f2]">~/stealth </span>
                                <span className="block h-4 w-[5px] ml-2 mt-0.5 animate-[terminalblink_1200ms_linear_infinite]" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 mx-auto max-w-6xl items-center lg:flex px-8">
                <div className="mx-auto grid w-full grid-cols-1 lg:mx-0">
                    {PROJECTS.map((project, index) => (
                        <div key={project.id}
                            className={cn(
                                'flex flex-col lg:flex-row gap-8 lg:gap-12 my-12',
                                index % 2 !== 0 && 'lg:flex-row-reverse'
                            )}>
                            {/* PROJECT INFO */}
                            <div className="lg:flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-semibold">
                                        {project.title}
                                    </h2>
                                    <div className="flex">
                                        {project.repo && (
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-125">
                                                {getRepoLogo(project.repo)}
                                            </a>
                                        )}
                                        {project.demo && (
                                            <div className="flex items-center nav-link text-sm font-medium -mb-4">
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between items-end tracking-tighter">
                                    <span className="inline-flex text-base font-medium px-[0.1rem] text-gray-600 ">
                                        {project.tagline}
                                    </span>
                                    <p className="inline-flex text-gray-600 text-sm font-mono">
                                        {project.start !== project.end ? `${project.start}-${project.end}` : project.start}
                                    </p>
                                </div>
                                {/* TECH STACK */}
                                <div className="mt-2 inline-flex group">
                                    {project.stack.map((tech, techIndex) => (
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
                                    {project.description}
                                </p>
                            </div>

                            {/* PROJECT IMAGE */}
                            <div className="project lg:flex-1 overflow-hidden h-[420px]">
                                <div
                                    onMouseEnter={() => setHoverProjectId(project.id)}
                                    onMouseLeave={() => setHoverProjectId(null)}
                                >
                                    <Image
                                        className={cn(
                                            'rounded-2xl object-cover',
                                            hoverProjectId === project.id && 'webp'
                                        )}
                                        src={hoverProjectId === project.id
                                            ? `${project.image.src}.webp`
                                            : `${project.image.src}.png`
                                        }
                                        alt={`${project.title} project preview`}
                                        width={520}
                                        height={420}
                                        style={{ height: 'auto', width: '100%' }}
                                        sizes="(max-width: 768px) 100vw, 520px"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

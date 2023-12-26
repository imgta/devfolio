import React, { useState } from "react";
import LogoSVG from "@/app/assets/logos";

const other = [
    // "docker",
    // "gitlab",
    // "github",
    // "haystack",
    // "qdrant",
];

const skills = [
    "React",
    "Vue",
    "NextJs",
    "Nuxt",
    "Streamlit",
    "PostgreSQL",
    "Tailwind CSS",
    "Strapi",
    "FastAPI",
    "Django",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
];

const skillGroups: { [key: string]: string[] } = {
    Python: ["Python", "FastAPI", "Django", "Streamlit"],
    JavaScript: [
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "NextJs",
        "Nuxt",
        "Strapi",
    ],
    TypeScript: [
        "TypeScript",
        "JavaScript",
        "React",
        "Vue",
        "NextJs",
        "Nuxt",
        "Strapi",
    ],
    CSS3: ["CSS3", "Tailwind CSS"],
};

//------------------------------------------------------------
export default function TechStack() {
    const [hoverSkill, setHoverSkill] = useState("");

    const mouseEnter = (skill: string) => setHoverSkill(skill);
    const mouseLeave = () => setHoverSkill("");

    const getSkillGroup = (skill: string) => {
        const isGroupKey = hoverSkill in skillGroups;
        if (!isGroupKey) return { scale: "", opacity: "" };
        const isHoveredSkill = skill === hoverSkill;
        const isRelated = skillGroups[hoverSkill]?.includes(skill);
        return {
            scale: !isHoveredSkill && isRelated ? "scale-125" : "",
            opacity: hoverSkill && !isRelated ? "opacity-30" : "",
        };
    };

    return (
        <>
            <div id="skills" className="heading mx-auto mt-4 max-w-4xl px-6 lg:px-8 pb-14">
                <div className="group text-[2.4rem] font-bold text-gray-900 text-center">
                    <div className="header-con inline-block group-hover:hidden">
                        <h1 className="header-text">
                            Tech Stack
                        </h1>
                    </div>
                    <div className="typed-con hidden group-hover:inline-block">
                        <span className="typed">Frameworks and Languages</span>
                        <span className="blinking">_</span>
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                    <ul
                        role="list"
                        className="grid grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8"
                    >
                        {skills.map((name, index) => {
                            const { scale, opacity } = getSkillGroup(name);
                            return (
                                <li key={index} className="relative">
                                    <div
                                        onMouseEnter={() =>
                                            mouseEnter(name)
                                        }
                                        onMouseLeave={mouseLeave}
                                        className={`group rounded-lg bg-white focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 flex justify-center hover:scale-125 ${scale} ${opacity}`}
                                    >
                                        <LogoSVG name={name} wh={1.75} scale={1.25} />
                                    </div>
                                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 text-center">
                                        {name}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

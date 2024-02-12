import React, { useState } from "react";

//------------------------------------------------------------
const abouts = [
    {
        name: "Education",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
            </svg>
        ),
        roles: [
            {
                title: "Hack Reactor",
                info: "Advanced Software Engineering",
                start: '',
                end: '',
            },
            {
                title: "Northeastern University",
                info: "B.S. Biochemistry",
                start: '',
                end: '',
            },
        ],
    },
    {
        name: "Biotech",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path>
            </svg>
        ),
        roles: [
            {
                title: "Broad Institute of MIT and Harvard",
                info: "Sr. Research Associate",
                start: 2021,
                end: 2023,
            },
            {
                title: "Voyager Therapeutics, Inc.",
                info: "Sr. Associate Scientist I",
                start: 2019,
                end: 2021,
            },
            {
                title: "Sigilon Therapeutics, Inc.",
                info: "Associate Scientist",
                start: 2019,
                end: 2019,
            },
            {
                title: "bluebird bio, Inc.",
                info: "Associate Scientist",
                start: 2016,
                end: 2018,
            },
        ],
    },
];

//------------------------------------------------------------
export default function AboutMe() {
    const [expand, setExpand] = useState(false);
    const expandToggle = () => {
        setExpand(!expand);
    };
    return (
        <>
            <div
                id="about"
                className="heading mx-auto my-4 max-w-4xl px-6 lg:px-8"
            >
                <div className="group text-[2.4rem] font-bold text-gray-900 text-center">
                    <div className="header-con inline-block group-hover:hidden">
                        <h1 className="header-text">About Me</h1>
                    </div>
                    <div className="typed-con hidden group-hover:inline-block">
                        <span className="typed">Education and Professions</span>
                        <span className="blinking">_</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center max-w-7xl py-4 pb-16 mx-auto">
                <div className="px-8 max-sm:pr-16">
                    <div className="grid grid-cols-1 gap-x-1 gap-y-8 lg:grid-cols-2">
                        {abouts.map((about) => (
                            <div
                                key={about.name}
                                className="flex items-start"
                            >
                                <div className="relative h-7 w-7 rounded-sm items-center bg-white fill-indigo-600">
                                    {about.icon}
                                </div>
                                <div className="ml-[1.65rem]">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {about.name}
                                    </h3>
                                    <div
                                        className={`mt-1 text-[0.785rem] sm:text-sm ${about.name === "Biotech"
                                        ? `hover:cursor-pointer ${expand
                                            ? ""
                                            : "line-clamp-2"}`
                                        : ""}`}
                                        onClick={about.name === "Biotech"
                                        ? expandToggle
                                        : undefined}
                                    >
                                    {about.roles.map((role) => (
                                        <div key={role.title} className="relative font-semibold text-gray-700">
                                            <div className={`absolute left-0 transform -translate-x-full ${expand? "block" : "hidden"}`}>
                                                <span className="text-gray-600 font-mono whitespace-nowrap pr-2 max-sm:text-xs max-sm:pr-3">
                                                    {about.name === "Biotech" ?
                                                    role.start && role.end && role.start === role.end
                                                        ? `${role.start}`
                                                        : `${role.start}\u2013${role.end}`
                                                    : role.start}
                                                </span>
                                            </div>
                                            <div className="tracking-tight">
                                                <span className="font-bold text-gray-800 pr-1.5">{role.title}</span>
                                                <span className="max-sm:tracking-tighter">{role.info}</span>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

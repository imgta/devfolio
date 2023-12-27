import React from "react";

//------------------------------------------------------------
const abouts = [
    {
        name: "Education",
        icon: (
            <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                viewBox="0 0 256 256"
            >
                <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
            </svg>
        ),
        description: (
            <>
                <p><span className="font-semibold">Northeastern University.</span>{" "}B.S. Biochemistry</p>
                <p><span className="font-semibold">Hack Reactor.</span>{" "}Advanced Software Engineering</p>
            </>
        ),
    },
    // {
    //     name: "Biotech",
    //     icon: (
    //         <svg
    //             className="h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="#ffffff"
    //             viewBox="0 0 256 256"
    //         >
    //             <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path>
    //         </svg>
    //     ),
    //     description: (
    //         <>
    //         <p><span className="font-semibold">Broad Institute of MIT and Harvard.</span>{" "}Sr. Research Associate</p>
    //         <p><span className="font-semibold">Voyager Therapeutics, Inc.</span>{" "}Sr. Associate Scientist I</p>
    //         </>
    //     ),
    // },
];

//------------------------------------------------------------

export default function AboutMe() {
    return (
        <>
            <div className="mb-24 px-8">
                <div className="grid justify-center items-center grid-cols-2 mx-auto mt-4 max-w-2xl lg:max-w-4xl">
                    <div className="grid justify-center items-center max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none">
                        {abouts.map((about) => (
                            <div key={about.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        {about.icon}
                                    </div>
                                    <span className="text-lg">
                                        {about.name}
                                    </span>
                                </dt>
                                <dd className="text-sm md:text-base leading-7 text-gray-800">
                                    {about.description}
                                </dd>
                            </div>
                        ))}
                    </div>
                    <div id="about" className="mx-auto justify-center items-center max-w-5xl mt-4 px-8 pb-10">
                        <h2 className="gsap-text text-gray-900 font-bold text-4xl text-center">
                            About Me<span>Education and History</span>
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            The following stemmed from a combination of sheer
                            curiosity, boyish enthusiasm, and voluntary challenges.
                            Each project warranted their own case studies allowing
                            me to further develop my skills and grow.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

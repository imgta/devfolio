import AvatarPic from "@/app/components/avatar";
import LogoSVG from "@/app/assets/logos.tsx";
import "@/app/assets/styles/typing.css"

//------------------------------------------------------------
const socials = [
    { name: "linkedin", url: "https://www.linkedin.com/in/gordonta/" },
    { name: "github", url: "https://github.com/imgta" },
];
//------------------------------------------------------------
export default function Hero() {
    return (
        <div className="bg-white pb-10 pt-24 sm:pb-16 sm:pt-32 lg:pb-24">
            <div className="pb-20 sm:pb-24 lg:pb-0">
                <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-x-4 gap-y-10 px-6 sm:gap-y-8 lg:px-8 lg:flex-row lg:items-stretch">
                    <div className="w-full max-w-2xl lg:max-w-none lg:flex-auto lg:px-16 lg:py-10 lg:pr-0 lg:pl-[14rem]">
                        <h1 className="gsap-text header-text max-sm:text-3xl text-[2.4rem] font-bold tracking-tight text-gray-900">
                            Gordon Ta<span className="typing">Full Stack Developer.</span>
                        </h1>
                        <figure className="relative isolate">
                            <blockquote className="text-lg text-gray-600">
                                <p>
                                    I&apos;m Gordon, your Full Stack web development partner, based in Boston, MA.
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 text-base">
                                {/* SOCIALS */}
                                <div className="flex">
                                    {socials.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-4"
                                        >
                                            <div className="hover:scale-125">
                                                <LogoSVG name={social.name} wh={1.5} scale={1} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    {/* PROFILE PIC */}
                    <div className="flex justify-center -mt-8 w-full max-w-2xl lg:-mb-8 lg:w-96 lg:flex-none">
                        <div className="relative aspect-[2/1] h-full md:-mx-8 lg:mx-0 lg:aspect-auto">
                            <AvatarPic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="flex">
    <LogoSVG name="linkedin" wh={1.5} scale={1} />
    <LogoSVG name="github" wh={1.5} scale={1} />
</div> */
}

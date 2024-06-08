import AvatarPic from "@/app/components/avatar";
import LogoSVG from "@/app/utils/logos";

//------------------------------------------------------------
const socials = [
    { name: "linkedin", url: "https://www.linkedin.com/in/gordonta/" },
    { name: "github", url: "https://github.com/imgta" },
];

//------------------------------------------------------------
export default function Hero() {
    return (
        <div className="pb-12 pt-24 sm:pb-16 sm:pt-32 max-sm:px-4">
            <div className="sm:pb-4 lg:pb-0">
                <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-x-4 gap-y-10 px-6 sm:gap-y-8 lg:px-8 lg:flex-row">
                    <div className="max-w-3xl lg:max-w-3xl lg:flex-auto lg:py-10 px-4">
                        <div className="group text-[2.4rem] font-bold text-gray-900">
                            <div className="header-con inline-block group-hover:hidden">
                                <h1 className="header-text">
                                    Gordon Ta
                                </h1>
                            </div>
                            <div className="typed-con hidden group-hover:inline-block">
                                <span className="typed">Full Stack Developer</span>
                                <span className="blinking">_</span>
                            </div>
                        </div>
                        <figure className="relative isolate">
                            <blockquote className="text-lg text-gray-600">
                                <p>
                                    Hi there! I&apos;m Gordon, a Full-Stack Software Engineer
                                    based in Boston, MA.
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 text-base">
                                {/* SOCIALS */}
                                <div className="flex">
                                    {socials.map((social, index) => (
                                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="mr-4">
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
                    <div className="flex justify-center w-full max-w-2xl lg:-mb-8 lg:w-96 lg:flex-none">
                        <div className="relative aspect-[2/1] h-full md:-mx-8 lg:mx-0 lg:aspect-auto">
                            <AvatarPic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import LogoSVG from "@/app/utils/logos";

//------------------------------------------------------------
const socials = [
    { name: "linkedin", url: "https://www.linkedin.com/in/gordonta/" },
    { name: "github", url: "https://github.com/imgta" },
];

//------------------------------------------------------------
export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                            >
                                <div className="hover:scale-125">
                                    <LogoSVG
                                        name={social.name}
                                        wh={1.5}
                                        scale={1}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-sm leading-5 text-gray-600 font-semibold md:order-1 md:mt-0">
                        Copyright &copy; 2023 - All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

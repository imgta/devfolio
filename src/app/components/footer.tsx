import LogoSVG from '@components/ui/LogoSVG';
import TypedHeader from '@components/ui/TypedHeader';
import { INFO } from '@utils/misc';

//------------------------------------------------------------

export default function Footer() {
    return (
        <>
            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="py-14">
                    <div id="contact" className="heading mx-auto max-w-2xl lg:mx-0">
                        <TypedHeader
                            id="contact"
                            title="Contact"
                            typedText="Get in touch"
                        />
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Connect with me!
                        </p>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 font-semibold">
                        <div className="border-l border-indigo-600 pl-6">
                            <h3 className="text-gray-900">Email.</h3>
                            <address className="not-italic text-gray-600">
                                <a className="hover:text-gray-900 font-medium" aria-label="Send me an email" href={`mailto:${INFO.email}`}>
                                    {INFO.email}
                                </a>
                            </address>
                        </div>
                        <div className="border-l border-indigo-600 pl-6">
                            <h3 className="text-gray-900">Schedule.</h3>
                            <address className="not-italic text-gray-600">
                                <a className="hover:text-gray-900 font-medium" aria-label="Schedule a chat with me" href={INFO.calendar} target="_blank" rel="noopener noreferrer">
                                    Calendar
                                </a>
                            </address>
                        </div>
                        <div className="border-l border-indigo-600 pl-6">
                            <h3 className="text-gray-900">Connect.</h3>
                            <address className="not-italic text-gray-600">
                                <a className="hover:text-gray-900 font-medium" aria-label="Connect with me on LinkedIn" href={INFO.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </address>
                        </div>
                    </div>
                </div>

                <footer className="bg-white py-4" aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">Footer</h2>
                    <div className="border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            {['github', 'linkedin'].map((social, index) => (
                                <a
                                    key={index}
                                    href={INFO[social]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                                    aria-label="Find me on my socials"
                                >
                                    <div className="hover:scale-125">
                                        <LogoSVG
                                            name={social}
                                            wh={1.5}
                                            scale={1}
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-sm leading-5 text-gray-600 font-semibold md:order-1 md:mt-0">
                            Copyright &copy; {new Date().getFullYear()} - All rights reserved.
                        </p>
                    </div>
                </footer>
            </section>
        </>
    );
}

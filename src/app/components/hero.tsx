import LogoSVG from '@/components/ui/LogoSVG';
import TypedHeader from '@/components/ui/TypedHeader';
import { INFO } from '@utils/misc';

//------------------------------------------------------------

export default function Hero() {
    return (
        <section className="pb-12 pt-24 sm:pb-16 sm:pt-32 max-sm:px-4">
            <div className="sm:pb-4 lg:pb-0">
                <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-x-4 gap-y-10 px-6 sm:gap-y-8 lg:px-8 lg:flex-row">
                    <div className="max-w-3xl lg:max-w-3xl lg:flex-auto lg:py-10 px-4">
                        <TypedHeader
                            title="Gordon Ta"
                            typedText="Full Stack Developer"
                        />
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
                                    {['linkedin', 'github'].map((social, index) => (
                                        <a
                                            key={index}
                                            href={INFO[social]}
                                            target="_blank" rel="noopener noreferrer"
                                            aria-label="Find me on my socials"
                                            className="mr-4"
                                        >
                                            <div className="hover:scale-125">
                                                <LogoSVG name={social} wh={1.5} scale={1} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    {/* PROFILE PIC */}
                    <div className="flex justify-center w-full max-w-2xl lg:-mb-8 lg:w-96 lg:flex-none">
                        <div className="-mt-20 sm:mb-28 lg:mb-0 relative aspect-[2/1] sm:h-full md:-mx-8 lg:mx-0 lg:aspect-auto">
                            <div
                                className="avatar size-72 bg-cover bg-center bg-no-repeat border-[2px] border-gray-900/60 transition-all duration-1000 ease-in-out object-cover max-w-none row-span-2 row-end-2 animate-[morph_8s_ease-in-out_infinite]"
                                style={{ backgroundImage: 'url("/img/avatar.webp")' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

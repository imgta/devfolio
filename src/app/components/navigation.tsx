const navigation = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

//------------------------------------------------------------
export default function NavBar() {
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-50">
            <nav className="mx-auto flex max-w-full items-center py-4 px-6 lg:px-8" aria-label="Global">
                <div className="hidden sm:flex sm:flex-1">
                    <a className="flex group font-medium hover:cursor-pointer" onClick={scrollTop}>
                        <code className="font-medium group-hover:text-indigo-700 flex items-center ">
                            <span className="font-semibold group-hover:-rotate-90 group-hover:scale-110 inline-block transition-transform duration-300">
                                &gt;
                            </span>
                            _
                        </code>
                        <span className="group-hover:text-indigo-700 pl-1">imgta</span>
                    </a>
                </div>

                <div className="flex nav-link gap-x-8 sm:gap-x-16">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex flex-1 justify-end mb-0.5 h-7">
                    <a href="https://drive.google.com/file/d/11FBcQsXcVZ-3cU7uAX1mGK19cd1FOIgC/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                        className="flex justify-center items-center text-sm font-semibold leading-6 text-gray-900 group"
                    >
                        <svg className="hidden group-hover:inline-block size-7 pr-1 stroke-indigo-700/85 fill-none scale-x-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" /><path d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m2-4.5l1.5 6l1.5-6" /></g></svg>
                        <span>Resume</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}

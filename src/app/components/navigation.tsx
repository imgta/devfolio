const navigation = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

//------------------------------------------------------------
export default function NavBar() {
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }
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
                <div className="flex flex-1 justify-end mb-0.5">
                    <a href="https://drive.google.com/file/d/11FBcQsXcVZ-3cU7uAX1mGK19cd1FOIgC/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold leading-6 text-gray-900 group"
                    >
                        <svg className="hidden group-hover:inline-block group-hover:scale-125 w-5 h-5 pr-1 pb-0.5 fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M211.48,35.32l-130.25-23A20,20,0,0,0,58.05,28.54l-29.75,169a20,20,0,0,0,16.22,23.16l130.25,23h0a20.1,20.1,0,0,0,3.52.31A20,20,0,0,0,198,227.46l29.75-169A20,20,0,0,0,211.48,35.32ZM175,219.36,52.63,197.75,81,36.64,203.37,58.25ZM91.9,67a12,12,0,0,1,13.9-9.73L173,69.14A12,12,0,0,1,171,93a12.59,12.59,0,0,1-2.1-.18L101.63,80.9A12,12,0,0,1,91.9,67ZM85,106.39a12,12,0,0,1,13.91-9.73l67.22,11.88A12,12,0,0,1,164,132.35a12.5,12.5,0,0,1-2.1-.18L94.69,120.29A12,12,0,0,1,85,106.39ZM78,145.78a12,12,0,0,1,13.9-9.73L125.54,142a12,12,0,0,1-2.07,23.82,11.63,11.63,0,0,1-2.1-.19l-33.61-5.93A12,12,0,0,1,78,145.78Z"></path></svg>
                        <span className="group-hover:font-bold ">Resume</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}

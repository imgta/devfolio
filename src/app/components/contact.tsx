//------------------------------------------------------------

//------------------------------------------------------------
export default function Contact() {
    return (
    <div className="py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="contact" className="gsap-text tracking-tight text-gray-900 font-bold text-4xl">
                Contact<span>Get in touch.</span>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Want to connect? Let&apos;s talk!
            </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="border-l border-indigo-600">
            <h3 className="pl-6 font-semibold text-gray-900">Email me:</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
            <a className="hover:text-gray-900" href="mailto:gphamta@gmail.com"><p>gphamta@gmail.com</p></a>
            </address>
            </div>
            <div className="border-l border-indigo-600">
            <h3 className="pl-6 font-semibold text-gray-900">Schedule it:</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
            <a className="hover:text-gray-900" href="https://cal.com/gordonta" target="_blank"><p>Calendar</p></a>
            </address>
            </div>
            <div className="border-l border-indigo-600">
            <h3 className="pl-6 font-semibold text-gray-900">Connect on:</h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
            <a className="hover:text-gray-900" href="https://www.linkedin.com/in/gordonta/" target="_blank"><p>LinkedIn</p></a>
            </address>
            </div>
        </div>
        </div>
    </div>
    )
}

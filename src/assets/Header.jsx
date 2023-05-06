
export default function Header() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#101010]">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"><a href="/"
                        className="flex items-center"><img
                            src="https://ai-finder.fra1.cdn.digitaloceanspaces.com/ai-finder-logo-trans.png"
                            className="mr-3 h-9" alt="Ai Finder Logo"/>
                    </a>
                        <div className="flex items-center lg:order-3">
                            <button
                                className="text-gray-800 dark:text-white hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                                in</button>
                            <a href="/add"
                                className="text-gray-800 dark:text-white bg-primary-700 hover:bg-gray-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Add
                                your AI</a>
                            <a href="/discord"
                                className="text-gray-800 dark:text-white bg-primary-700 hover:bg-gray-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Discord
                                Community</a>
                            <button aria-label="Toggle Dark Mode" type="button"
                                className="sticky-theme-mode-button w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    stroke="currentColor" className="w-4 h-4 text-gray-800 dark:text-gray-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                    </path>
                                </svg></button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

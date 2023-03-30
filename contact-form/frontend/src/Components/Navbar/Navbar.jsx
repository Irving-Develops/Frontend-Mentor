
const navLinks = ["Home", "About", "Contact", "Parents", "Puppies", "More"];

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono bg-primaryDark" role="navigation">
            <a href="/" className="pl-8 text-white">Logo</a>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="#D3A03C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">              
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>  
            </div>
            <div className="pr-8 md:block hidden text-white w-3/5">
                <ul className="flex items-center">
                    {navLinks.map((link, index) => (
                        (link === "More" ? 
                            <li className="" key={index}>
                                <a href="#" className="block lg:inline-block text-white hover:text-secondaryText p-4 group transition-colors duration-300 ">
                                    {link}
                                    <div className="absolute z-10 hidden group-hover:block bg-gray-800 rounded-md py-2 mt-2">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white">Gallery</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white">Breed Info</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white">Language</a>
                                    </div>
                                </a>
                            </li>
                            :
                            <li className="" key={index}><a className="hover:text-secondaryText transition-colors duration-300 p-4" href={`/${link}`}>{link}</a></li>
                        )
                        ))}
                </ul>
            </div>
        </nav>
    )
}
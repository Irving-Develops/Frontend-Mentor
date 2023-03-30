
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono bg-primaryDark" role="navigation">
            <a href="/" className="pl-8 text-white">Logo</a>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="#D3A03C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">              
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>  
            </div>
            <div className="pr-8 md:block hidden text-secondaryText">
                <a href="/" className="p-4">Home</a>
                <a href="/" className="p-4">About</a>
                <a href="/" className="p-4">Contact</a>
                <a href="/" className="p-4">Parents</a>   
                <a href="/" className="p-4">Puppies</a>   
                <a href="/" className="p-4 group">More</a>
                <div className="hidden group-hover:block">
                    <a href="/" className="p-4">Breed Information</a>   
                    <a href="/" className="p-4">Gallery</a>   
                </div>
            </div>
        </nav>
    )
}
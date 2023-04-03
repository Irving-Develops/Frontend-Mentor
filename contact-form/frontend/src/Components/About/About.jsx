import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="min-h-96 w-4/5 flex flex-col md:flex-row justify-center items-center mx-auto my-12 gap-6">
            <div className="md:flex flex-col md:order-2">
                <div className="relative">
                    <span className="absolute top-1/2 right-28 border-b-2 border-primaryGold w-16 md:hidden"></span>
                    <span className="absolute top-1/2 left-28 border-b-2 border-primaryGold w-16 md:hidden"></span>
                    <h2 className="text-primaryGold text-2xl">About Us</h2>
                </div>
                <img src="/about.jpg" alt="about" className="rounded-full object-cover w-48 h-48 md:hidden"/>
                <p className="my-auto md:order-3">At Mundo Collie, we have a passion for breeding and raising exceptional Border Collies. Our commitment to excellence is reflected in every aspect of our business, from the high-quality care we provide our dogs to the exceptional service we offer our customers. Learn more about our history and mission by clicking the button below!</p>
                <Link to='/about' type="submit" class="md:order-4 w-48 md:w-48 bg-primaryGold text-white font-medium py-2 px-4 rounded-md hover:bg-secondaryGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryGold">Learn More</Link>
            </div>
            <img src="/about.jpg" alt="about" className="hidden md:block rounded-full object-cover w-48 h-48 md:order-1 md:w-1/2 md:h-1/4 md:rounded-none"/>
        </div>
    )
}
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="
        min-h-96 w-4/5 flex flex-col justify-center items-center mx-auto my-12 gap-6
        md:mx-0 md:justify-between md:flex-row md:w-screen bg-silver md:text-darkGrey">
            <div className="flex flex-col items-center gap-6 m-6 md:order-2 md:w-1/2 md:mr-1/2">
                <h2 className="text-gold md:text-darkGrey text-2xl md:text-4xl">All About Us</h2>
                <img src="/about.jpg" alt="about" className="rounded-full object-cover w-48 h-48 md:hidden" />
                <p className="my-auto md:order-3 md:w-3/4">At Mundo Collie, we have a passion for breeding and raising exceptional Border Collies. Our commitment to excellence is reflected in every aspect of our business, from the high-quality care we provide our dogs to the exceptional service we offer our customers. Learn more about our history and mission by clicking the button below!</p>
                <Link to='/about' type="submit" class="md:order-4 w-48 md:w-48 text-white bg-gold text-darkGrey font-medium py-2 px-4 rounded-md hover:bg-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold">Learn More</Link>
            </div>
            <img src="/about.jpg" alt="about" className="hidden md:block rounded-full object-cover w-48 h-48 md:order-1 md:w-5/12 md:h-4/12 md:rounded-none" style={{objectPosition: " 70% 70%", height: "50vh"}}/>
        </div>
    )
}
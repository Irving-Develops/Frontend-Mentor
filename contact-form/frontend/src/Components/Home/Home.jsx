import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import ContactForm from "../ContactForm/ContactForm"
import About from "../About/About"

export default function Home() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <About />
            <ContactForm />
        </div>
    )
}
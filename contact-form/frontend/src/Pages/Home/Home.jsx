import {Navbar} from ".."
import {Hero} from ".."
import {ContactForm} from ".."
import {About} from ".."
// import Gallery from "../ImageGallery/ImageGallery"

export default function Home() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <About />
            {/* <Gallery /> */}
            <ContactForm />
        </div>
    )
}
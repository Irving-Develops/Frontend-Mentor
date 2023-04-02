export default function About() {
    return (
        <div className="h-96 flex flex-col justify-center items-center">
            {/* <h2 className="text-primaryGold text-2xl">About Us</h2>
             */}

                <img src="/about.jpg" alt="about" className="rounded-full object-cover w-48 h-48"/>
                <p>At Mundo Collie, we have a passion for breeding and raising exceptional Border Collies. Our commitment to excellence is reflected in every aspect of our business, from the high-quality care we provide our dogs to the exceptional service we offer our customers. Learn more about our history and mission by clicking the button below!</p>
        </div>
    )
}
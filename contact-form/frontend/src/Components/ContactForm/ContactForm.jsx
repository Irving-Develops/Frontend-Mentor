import React, {useState, useRef} from "react";
import styles from "./ContactForm.module.css";
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const form = useRef();
    const [hasSubmitted, setHasSubmitted] = useState(false);



    const handleSubmission = (e) => {
        e.preventDefault();


            emailjs.sendForm('service_fmxh477', 'contact_form', form.current, "CCmiUEjc9XRCALe-J")
            .then((result) => {
            alert('Your message has been sent successfully!');
            }, (error) => {
            alert('Sorry, an error occurred while sending your message.');
            });
            setHasSubmitted(true);

        e.target.reset();
    }

    return (
        <form ref={form} onSubmit={handleSubmission} className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
            <div className="mb-4">
                <label htmlFor="first_name" className="block font-medium mb-1">First Name</label>
                <input type="text" name="first_name" id="first_name" className="w-full md:inline px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" required />
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block font-medium mb-1">Last Name</label>
                <input type="text" name="last_name" id="last_name" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" required />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea name="message" id="message" rows="4" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" required ></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            {hasSubmitted && <p className="mt-2 text-sm text-gray-500">Thanks for submitting!</p>}
        </form>

    );
}
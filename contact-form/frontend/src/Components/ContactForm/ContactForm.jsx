import React, {useState, useRef, useEffect, useContext} from "react";
import {LanguageContext} from "../../Contexts/LanguageContext"
import languageData from "../../Data/languageData"
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const form = useRef();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const {language} = useContext(LanguageContext)


    
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
        <form ref={form} onSubmit={handleSubmission} className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-left text-primary">
            <h1 className="text-3xl font-bold mb-4">{languageData[language].formTitle}</h1>
            <div className="mb-4">
                <label htmlFor="first_name" className="block font-medium mb-1 text-primary">{languageData[language].firstName}</label>
                <input type="text" name="first_name" id="first_name" className="w-full md:inline px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold" required 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block font-medium mb-1 text-primary">{languageData[language].lastName}</label>
                <input type="text" name="last_name" id="last_name" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold" required lang={language}/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1 text-primary">{languageData[language].email}</label>
                <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold" required lang={language} />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-1 text-primary">{languageData[language].message}</label>
                <textarea name="message" id="message" rows="4" className="w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold" required lang={language} ></textarea>
            </div>
            <button type="submit" className="w-full bg-gold text-white font-medium py-2 px-4 rounded-md hover:bg-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold">{languageData[language].submit}</button>
            {hasSubmitted && <p className="mt-2 text-sm text-gray-500">{languageData[language].successMessage}</p>}
        </form>

    );
}
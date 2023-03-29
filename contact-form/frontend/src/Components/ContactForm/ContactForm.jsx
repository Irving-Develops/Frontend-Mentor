import React, {useState, useRef} from "react";
import styles from "./ContactForm.module.css";
import useScript from "../useScript/useScript";
import emailjs from '@emailjs/browser'

export default function ContactForm() {
    const form = useRef();



    const handleSubmission = (e) => {
        e.preventDefault();


            emailjs.sendForm('service_fmxh477', 'contact_form', form.current, "CCmiUEjc9XRCALe-J")
            .then((result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
            }, (error) => {
            console.log(error.text);
            alert('Sorry, an error occurred while sending your message.');
            });

        e.target.reset();
    }

    return (
        <form ref={form} onSubmit={handleSubmission}>
            <h1>Get In Touch</h1>
            <div>
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="first_name" 
                // onChange={(e) => setFirstName(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="last_name" 
                // onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" 
                // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Message">Message</label>
                <input type="text" name="message" 
                // onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type="submit" value="send">Submit</button>
            <p>Thanks for submitting!</p>
        </form>
    );
}
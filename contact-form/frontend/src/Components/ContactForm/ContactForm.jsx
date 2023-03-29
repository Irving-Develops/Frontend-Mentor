import React, {useState} from "react";
import styles from "./ContactForm.module.css";
import {useScript} from "../useScript/useScript";

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    useScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")



    return (
        <form>
            <h1>Get In Touch</h1>
            <div>
                <label htmlFor="First Name">First Name</label>
                <input type="text" name="First Name" 
                onChange={(e) => setFirstName(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="Last Name">Last Name</label>
                <input type="text" name="Last Name" 
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="Message">Message</label>
                <input type="text" name="Message" 
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
            <p>Thanks for submitting!</p>
        </form>
    );
}
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import SetLanguage from "../SetLanguage/SetLanguage";
import styles from "./Navbar.module.css";


export default function Navbar() {
    const navLinks = ["Home", "About", "Contact", "Parents", "Puppies", "More"];
    const sidepanelLinks = ["Home", "About", "Contact", "Parents", "Puppies", "Gallery", "Breed Info", "Language"]

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }



    return (
        <nav className="fixed top-0 z-30 flex justify-between items-center px-8 bg-darkGrey text-white h-20  md:h-24 w-screen" role="navigation">
            <NavLink to="/" className="">Logo</NavLink>
            <div className="md:hidden block">
                <svg onClick={handleClick} className="w-6 h-6" fill="none" stroke="#D3A03C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">              
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>  
            </div>
            {/* This is the modal that appears when the hamburger menu is clicked */}
            <div className={`${styles.modal} ${open ? styles.transition : ''}`}>
                <div className={styles.modalBackground} onClick={handleClick} />
                <div className={`${styles.modalContent} ${open ? styles.transition : ''}`}>
                    <ul className={styles.list}>
                    {sidepanelLinks.map((link, index) => (
                        <li className="text-white" key={index}>
                        <NavLink className="" to={`/${link}`} onClick={handleClick}>
                            {link}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            <div className="hidden md:block h">
                <ul className="flex gap-4">
                    {navLinks.map((link, index) => (
                        (link === "More" ? 
                            <li className="" key={index}>
                                <NavLink to="#" className="">
                                    {link}
                                    <div className="hidden">
                                    <span to="#" className="">Gallery</span>
                                    <span to="#" className="">Breed Info</span>
                                    <SetLanguage />
                                    </div>
                                </NavLink>
                            </li>
                            :
                            <li className="" key={index}><NavLink className="" to={`/${link}`}>{link}</NavLink></li>
                        )
                        ))}
                </ul>
            </div>
        </nav>
    )
}
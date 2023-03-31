import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import SetLanguage from "../SetLanguage/SetLanguage";
import styles from "./Navbar.module.css";
import DropdownModal from "./DropdownModal";


export default function Navbar() {
    const navLinks = ["Home", "About", "Contact", "Parents", "Puppies", "More"];

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }



    return (
        <nav className={styles.navbarContainer} role="navigation">
            <NavLink to="/" className="">Logo</NavLink>
            <div className="md:hidden block">
                <svg onClick={handleClick} className="w-6 h-6" fill="none" stroke="#D3A03C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">              
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>  
            </div>
            <div className={`${styles.modal} ${open ? styles.transition : ''}`}>
                <div className={styles.modalBackground} onClick={handleClick} />
                <div className={`${styles.modalContent} ${open ? styles.transition : ''}`}>
                    <ul className="">
                    {navLinks.map((link, index) => (
                        <li className="text-white" key={index}>
                        <NavLink className="" to={`/${link}`}>
                            {link}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>

            </div>

            <div className="hidden md:block">
                <ul className="">
                    {navLinks.map((link, index) => (
                        (link === "More" ? 
                            <li className="" key={index}>
                                <NavLink to="#" className="">
                                    {link}
                                    <div className="">
                                    <NavLink to="#" className="">Gallery</NavLink>
                                    <NavLink to="#" className="">Breed Info</NavLink>
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
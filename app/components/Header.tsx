"use client"
import Link from "next/link";
import BrandButton from "./BrandButton";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

function Header() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleIsHamburgerOpen = () => {
        setIsHamburgerOpen((prevValue) => {
            return !prevValue;
        })        
    }    
    
    const {width} = useWindowSize();

    useEffect(() => {
        if(width > 767){
            setIsHamburgerOpen(false);
        }
    }, [width])


    return (
        <header className="absolute z-40 w-full flex justify-between px-12 sm:px-16 lg:px-24 py-8">
            <Link href="/" className="text-3xl font-extrabold text-brand">
                Gym Name
            </Link>
            <ul className="hidden md:flex items-center gap-8">
                <li className=" navlink">
                    <a href="/#classes">Classes</a>
                </li>
                <li className=" navlink">
                    <a href="/#instructors">Instructors</a>
                </li>
                <li className="cursor-pointer navlink">About Us</li>
                <li className="cursor-pointer navlink"><a href="/#video">Gallery</a></li>
            </ul>
            <div className="hidden md:flex items-center z-60">
                <BrandButton link="/#contact">
                    Contact Us
                </BrandButton>
            </div>
            <div className={`hamburger-menu md:hidden ${ isHamburgerOpen && "hamburger-open"}`} id="hamburger" onClick={toggleIsHamburgerOpen}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`absolute p-10 bg-brand top-[100%] right-0 rounded-l-md ${ !isHamburgerOpen && "translate-x-[100%]"} transition duration-300`}>
                <ul className="flex flex-col items-center gap-8">
                    <li>
                        <a href="#classes" onClick={toggleIsHamburgerOpen}>Classes</a>
                    </li>
                    <li>
                        <a href="#instructors" onClick={toggleIsHamburgerOpen}>Instructors</a>
                    </li>
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}>About Us</li>
                    <li className="cursor-pointer" onClick={toggleIsHamburgerOpen}><a href="#video">Gallery</a></li>
                    <div onClick={toggleIsHamburgerOpen}>
                        <BrandButton link="#contact">
                            Contact Us
                        </BrandButton>
                    </div>
                </ul>
            </div>
        </header>
    );
}


export default Header;
import { useState, useEffect } from 'react';

interface ButtonProp {
    onClick: () => void;
}

function Title({onClick}: ButtonProp) {
    return (
        <div className='cs-title h-full'>
            <ul className='flex h-full'>
                <li onClick={onClick}>Logo</li>
                <li>Steven Castro</li>
            </ul>
        </div>
    )
}

function Directory() {
    return (
        <div className='cs-directory h-full'>
            <ul className='flex h-full'>
                <li>About</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);

    function handleButton() {
        setShowHeader(!showHeader);
    }

    useEffect(() => {
        function handleScroll() {
            setShowHeader(window.pageYOffset <= 500);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
    <>
        <head>
            <title> Steven Castro </title>
        </head>
        <nav>
            <div className={`flex justify-between items-center h-14 w-screen bg-cod-gray-950 text-white fixed top-0 left-0 transition-transform duration-300 z-50 ${showHeader ? 'active' : 'inactive'}`}>
                <Title onClick={handleButton} />
                <Directory />
            </div>
        </nav>
    </>
    )
}
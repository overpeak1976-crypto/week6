import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = ["Home", "About", "Services", "Contact"];

    return (
        <>
        <nav className="bg-white w-full shadow-md fixed top-0 left-0 z-50">
            <div className="w-full px-4">
            <div className="flex justify-between items-center h-16">

                <div className="text-xl font-bold text-blue-600">MySite</div>

                <div>
                <button
                    onClick={toggleMenu}
                    className="text-gray-800 hover:text-blue-600 focus:outline-none">
                    {isOpen ? (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <div
            className={`bg-white shadow-md border-t overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"}`}>
            {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                {link}
                </a>
            ))}
            </div>
        </nav>

        <div className="bg-gray-100 min-h-screen pt-16">
            <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-4 p-4">เนื้อหาหลักหน้าเว็บ</h1>
            <p className="text-gray-700">
                นี่คือส่วนเนื้อหาเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
            </p>
            </div>
        </div>
        </>
    );
};

export default Navbar;












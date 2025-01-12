import React from 'react';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10">
            {/* Top Line */}
            <div className="border-t-4 border-gray-200"></div>

            {/* Footer Content */}
            <div className="container mx-auto px-5 grid 
            grid-cols-1 md:grid-cols-4 gap-8 py-10">
                {/* Logo and description */}
                <div>
                    {/* Adding logo from URL */}
                   
                    <h2 className="text-2xl font-bold mb-4">GeeksForGeeks</h2>
                    <p className="text-gray-600">
                        Corporate & Communications Address: A-143, 9th Floor, 
                        Sovereign Corporate Tower,
                        Sector- 136, Noida, Uttar Pradesh (201305)
                    </p>
                    <p className="text-gray-600">
                        Registered Address: K 061, Tower K, Gulshan Vivante 
                        Apartment, Sector 137, Noida,
                        Gautam Buddh Nagar, Uttar Pradesh, 201305
                    </p>
                    <div className="flex mt-4 space-x-4">
                        {/* Social Media Icons */}
                        <a href="#" className="text-gray-600 hover:text-black">
                            {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                            {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                            {/* <FontAwesomeIcon icon={faInstagram} size="lg" /> */}
                        </a>
                    </div>
                </div>

                {/* Explore Column */}
                <div>
                    <h3 className="font-bold mb-4">Explore</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                        Hack-A-thon</a></li>
                        <li><a href="#" className="hover:text-black">
                        GFG Weekly Contest</a></li>
                        <li><a href="#" className="hover:text-black">
                        Master CP</a></li>
                        <li><a href="#" className="hover:text-black">
                        DSA in Java</a></li>
                        <li><a href="#" className="hover:text-black">
                        Master System Design</a></li>
                        <li><a href="#" className="hover:text-black">
                        Offline Classes</a></li>
                    </ul>
                </div>

                {/* Languages Column */}
                <div>
                    <h3 className="font-bold mb-4">Languages</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                        Python</a></li>
                        <li><a href="#" className="hover:text-black">
                        Java</a></li>
                        <li><a href="#" className="hover:text-black">
                        C++</a></li>
                        <li><a href="#" className="hover:text-black">
                        JavaScript</a></li>
                        <li><a href="#" className="hover:text-black">
                        GoLang</a></li>
                        <li><a href="#" className="hover:text-black">
                        SQL</a></li>
                    </ul>
                </div>

                {/* Competitive Exams Column */}
                <div>
                    <h3 className="font-bold mb-4">Competitive Exams</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                        SSC CGL</a></li>
                        <li><a href="#" className="hover:text-black">
                        IBPS PO</a></li>
                        <li><a href="#" className="hover:text-black">
                        SBI PO</a></li>
                        <li><a href="#" className="hover:text-black">
                        NDA</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 mt-10">
            2025 - Mark Yudt&apos;s Portfolio
            </div>
        </footer>
    );
};

export default Footer;
import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a
            id="scroll-top"
            className={`scroll-top ${visible ? "block" : "hidden"}`}
            href="#top"
            title="Top"
            role="button"
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
        >
            <i className="w-icon-angle-up"></i>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                <circle
                    id="progress-indicator"
                    fill="transparent"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    cx="35"
                    cy="35"
                    r="34"
                    style={{ strokeDasharray: "16.4198, 400" }}
                ></circle>
            </svg>
        </a>
    );
};

export default ScrollTopButton;

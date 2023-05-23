import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="images/Troll Face.png" alt="" />
                <span>Meme Generator</span>
            </div>
            <div className="title">
                Using API
            </div>
        </nav>
    );
}
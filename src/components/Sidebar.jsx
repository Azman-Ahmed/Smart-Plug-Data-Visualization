import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/white.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>DEVICE</li>
                    <li className="active">METER</li>
                    <li>CALCULATOR</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

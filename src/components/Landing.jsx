import { useNavigate } from "react-router-dom";
import "./Landing.css";

import green from '../../public/green.jpg';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div
            className="landing-container"
            style={{
                backgroundImage: `url(${green})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <h1 className="landing-title">CSE407 : Green Computing</h1>
            <button className="landing-button" onClick={() => navigate("/Home")}>
                Start
            </button>
        </div>
    );
};

export default Landing;

import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <h1 className="landing-title">CSE407 : Green Computing</h1>
            <button className="landing-button" onClick={() => navigate("/Home")}>
                Start
            </button>
        </div>
    );
};

export default Landing;

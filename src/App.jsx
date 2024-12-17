import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeContent from "./components/HomeContent";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home.jsx";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/dashboard/:fileName" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

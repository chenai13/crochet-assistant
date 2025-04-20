import React from "react";
import { Link } from "react-router-dom";
import "../index.css";


function Hero({ children }) {
  return (
    <main>
      <div className="title">
        <Link to="/home">crochet assistant</Link>
      </div>
      <div className="hero-container">
        <div className="sidebar">
          <h1>menu</h1>
          <ul>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            
            <li>
              <Link to="/timer">timer</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
        <div className="mainy">{children}</div>
      </div>
    </main>
  );
}

export default Hero;

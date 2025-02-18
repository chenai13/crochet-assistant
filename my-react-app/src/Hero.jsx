import React from "react";

function Hero() {
  return (
    <main>
      <div className="title">
          <a href="/">crochet assistant</a>
        </div>
      <div className="hero-container">
        <div className="sidebar">
          <h1>menu</h1>
          <ul>
            <li>
              <a href="/">projects</a>
            </li>
            <li>
              <a href="/">tracker</a>
            </li>
            <li>
              <a href="/">timer</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
          </ul>
        </div>

        <div className="main">
        
          <h1>welcome!</h1>
          <p>
            this is your crochet assistant. keep track of all your projects
            here.
          </p>
          <hr />
          <p>your activity:</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Hero;
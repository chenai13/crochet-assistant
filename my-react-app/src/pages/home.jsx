// Home.js
import React from 'react';
import Hero from '../components/Hero';

function Home() {
  const content = (
    <>
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
    </>
  );

  return (
    <Hero>
      {content}
    </Hero>
  );
}

export default Home;

// Projects.js
import React from "react";
import Hero from "../components/Hero";
import ToDo from "../components/ToDo/ToDo";
function Projects({children}) {
  const content = (
    <>
      <h1>projects page</h1>
      <p>here you can track and manage your crochet projects.</p>
      <hr />
      
      <div className="projects-list">
     {children}
     <ToDo/>
      </div>
    </>
  );

  return <Hero>{content}</Hero>;
}

export default Projects;

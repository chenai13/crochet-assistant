import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    if (!selectedProject) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, task];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
      setSelectedProject(task);
    }
  };

  const content = (
    <>
      <h1>welcome!</h1>
      <p>
        this is your crochet assistant. keep track of all your projects here.
      </p>
      <hr />
      <p>Your activity:</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );

  return <Hero>{content}</Hero>;
}

export default Home;

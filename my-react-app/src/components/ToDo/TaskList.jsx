import React, { useState, useEffect } from "react";
import styles from "./ToDo.module.css";

function TaskListPage({ addToCounter }) {
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); 

 
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

 
  const handleAddProject = (task) => {
    if (!selectedProject) { 
      addToCounter(task); 
      setSelectedProject(task); 
  };
  }
  return (
    <div>
    
      <li>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className={styles["add-button"]}
              onClick={() => handleAddProject(task)}
              disabled={selectedProject} 
            >
              add
            </button>
          </li>
        ))}
      </li>
    </div>
  );
}

export default TaskListPage;

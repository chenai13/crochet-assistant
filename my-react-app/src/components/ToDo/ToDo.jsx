import React, { useState, useEffect } from "react";
import styles from "./ToDo.module.css"

function ToDo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks && savedTasks.length > 0
      ? savedTasks
      : ["plushie", "scarf", "blanket"];
  });
  

  const [newTask, setNewTask] = useState("");
  const [addedTasks, setAddedTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    onTasksUpdate(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function addToCounter(task) {
    if (!addedTasks.includes(task)) {
      setAddedTasks([...addedTasks, task]);
    }
  }

  return (
    <>
      <div main className={styles.maint}>
        <div className={styles["to-do"]}>
          <h1>to-do</h1>
          <p>type in your project name.</p>
          <input
            type="text"
            placeholder="project name"
            value={newTask}
            onChange={handleInputChange}
          ></input>
          <button className={styles["add-button"]} onClick={addTask}>
            add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li className={styles.listy} key={index}>
              <span className={styles.text}>{task}</span>
              <button
                className={styles["delete-button"]}
                onClick={() => deleteTask(index)}
              >
                delete
              </button>
              <button
                className={styles["moveup-button"]}
                onClick={() => moveTaskUp(index)}
              >
                ⬆
              </button>
              <button
                className={styles["movedown-button"]}
                onClick={() => moveTaskDown(index)}
              >
                ⬇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDo;

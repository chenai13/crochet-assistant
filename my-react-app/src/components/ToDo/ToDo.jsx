import React, { useState } from "react";
import styles from "./ToDo.module.css";

function ToDo() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the Dog",
  ]);

  const [newTask, setNeWTask] = useState("");

  function handleInputChange(event) {
    setNeWTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <>
      <div className={styles["to-do"]}>
        <h1>to-do</h1>
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
              👆
            </button>
            <button
              className={styles["movedown-button"]}
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDo;

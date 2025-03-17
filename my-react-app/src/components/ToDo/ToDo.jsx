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

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNeWTask = "";
    }
  }
  function deleteTask(index) {
    const UpdatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(UpdatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index], UpdatedTasks[index - 1]] = [
        UpdatedTasks[index - 1],
        UpdatedTasks[index],
      ]; setTasks(UpdatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const UpdatedTasks = [...tasks];
      [UpdatedTasks[index], UpdatedTasks[index + 1]] = [
        UpdatedTasks[index + 1],
        UpdatedTasks[index],
      ]; setTasks(UpdatedTasks);
    }
  }

  return (
    <>
      <div main className={styles.main}>
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
      </div>
    </>
  );
}

export default ToDo;

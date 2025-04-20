import React, { useState, useEffect, useRef } from "react";
import styles from "./Stopwatch.module.css";
import TaskListPage from "./ToDo/TaskList";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]); // State to store lap times
  const [addedTasks, setAddedTasks] = useState([]); // Store tasks added from TaskListPage

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
    setLaps([]);
  }

  function lap() {
    setLaps([...laps, elapsedTime]);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  function formatLapTime(time) {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  function addToCounter(task) {
    if (!addedTasks.includes(task)) {
      setAddedTasks((prevTasks) => [...prevTasks, task]);
    }
  }

  return (
    <div main className={styles.main}>
      <div className={styles.list}>
        <h1>projects</h1>
        <p>select a project you would like to track.</p>
        <ul>
          <TaskListPage addToCounter={addToCounter} />
        </ul>
      </div>

      <div className={styles.stopwatch}>
        <h1>global tracker</h1>
        <p>count all your stitches here.</p>

        <div className={styles.display}>{formatTime()}</div>

        <div className={styles.controls}>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={reset}>reset</button>
          <button onClick={lap}>lap</button>
        </div>

        <div className={styles.rows}>
          <h2>rows:</h2>
          {addedTasks.map((task, index) => (
            <p className={styles.pr} key={index}>
              {task}
            </p>
          ))}
        </div>

        <div>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                row {index + 1}: {formatLapTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;

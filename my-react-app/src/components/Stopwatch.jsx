import React, { useState, useEffect, useRef } from "react";
import styles from "./Stopwatch.module.css";


function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {}, [isRunning]);

  function start() {}

  function stop() {}

  function reset() {}

  function formatTime() {
    return "00:00:00";
  }
  return (
    <>
    <div main className={styles.main}>
    <div className={styles.list}>
        <h1>projects</h1>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
      <div className={styles.stopwatch}>
        <h1>row timer</h1>
        <div className={styles.display}>{formatTime()}</div>
        <div className={styles.controls}>
          <button onClick={start} className={styles.start_btn}>
            start
          </button>
          <button onClick={stop} className={styles.stop_btn}>
            stop
          </button>
          <button onClick={reset} className={styles.reset_btn}>
            reset
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Stopwatch;

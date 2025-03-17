import Hero from "../components/Hero";
import Stopwatch from "../components/Stopwatch";

function Timer() {
  const content = (
    <>
      <h1>timer</h1>
      <p>record and save your crochet progress.</p>
      <hr></hr>

      <div className="stopwatch">
        <Stopwatch />
      </div>
    </>
  );
  return <Hero>{content}</Hero>;
}

export default Timer;

import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Tracker({ children }) {
  const content = (
    <>
      <h1>tracker</h1>
      <p>this is where you can record your stitch count, rows, and more.</p>
      <hr></hr>
    </>
  );
  return <Hero>{content}</Hero>;
}

export default Tracker;

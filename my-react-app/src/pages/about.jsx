import Hero from "../components/Hero";
import Quote from "../components/Quote";

function About() {
  const content = (
    <>
      <h1>about</h1>
      <Quote />
      <hr />

      <div className="about">
        <p>
          <h3>hi there! i'm so happy you stopped by.</h3> crochet has been my
          favourite hobby for as long as i can remember – there’s just something
          magical about turning a simple strand of yarn into something cozy,
          cute, and handmade with love. i started this little corner of the
          internet to help others along their creative journey. whether you're
          just picking up your first hook or you’ve been stitching for years,
          i’m here to make the process feel fun and relaxing. let’s grow our
          skills together, one stitch at a time. ★
        </p>
      </div>
    </>
  );
  return <Hero>{content}</Hero>;
}

export default About;

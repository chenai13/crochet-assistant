import Hero from '../components/Hero'

function Timer() {
  const content = (
    <>
<h1>timer</h1>
<p>record and save your crochet progress.</p>
<hr></hr>
    </>

  )
  return (
   <Hero>
    {content}
   </Hero>
  );
}

export default Timer;
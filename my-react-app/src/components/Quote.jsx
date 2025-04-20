import React, { useState, useEffect, useRef } from "react";


function Quote () {
    const mottos = [
        "- the only joy in the world is to begin.",
        "- every moment is a fresh beginning.",
        "- nobody can be uncheered with a balloon.",
        "- no pressure, no diamonds."
    ];

const [todaysMotto, setTodaysMotto] = useState();
const chooseMotto = () => {
    setTodaysMotto(mottos[Math.floor(Math.random() * mottos.length)]);
  };

  useEffect(() => {
    chooseMotto();

}, []);


return (
<p><i>{todaysMotto}</i></p>
);
}
export default Quote;
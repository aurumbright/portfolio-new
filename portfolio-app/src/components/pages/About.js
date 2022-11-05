import React from "react";
import Headshot from "../../assets/headshot.jpg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        alt="A person with short red hair and glasses looking to the left"
        src={Headshot}
      />
      <p>
        I'm a writer, GM, and aspiring coder. I hold a PhD in English from the
        University at Buffalo, where I wrote my dissertation on experimental
        fiction in the Anthropocene. I love creative worldbuilding, hypertexts,
        and genre fiction. My published work includes book reviews and essays on
        deep time, AI, and reproductive rights.
      </p>
    </div>
  );
}

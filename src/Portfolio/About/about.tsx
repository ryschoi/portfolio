import { Routes, Route, Navigate } from "react-router";
import "./about.css";
export default function About() {
  return (
    <div id="port-about">
        <div id="port-about-left">
          <img src="images/headshot.png" width="412px"/>
        </div>

        <div id="port-about-right">
          <div id="about text">
          <p>
          Hi! I’m Rebecca, a current second-year student studying Computer Science 
          and Design at Northeastern University in Boston.<br /><br />

          From a young age, I have always strove for excellence in whatever I did, 
          making sure that I was strategic and efficient in my processes. Additionally, 
          the pursuit of my many creative outlets like music and coming up with ways to 
          entertain me and my two sisters led me to adopting a unique blend of critical 
          thinking, creativity, and judgment that crafts all the work that I do. Today, I
           design visuals, code, and solutions. I am looking to do work at the intersection 
           of design and technology where I will be able to utilize both my creative and 
           technical sides to further innovation, transparency, and future investments.
          </p>

          <div id="about-contact-block">
            <p>
              Personal email - rebecca.choi05@gmail.com<br />
              School email - choi.re@northeastern.edu<br />
              <a href="linkedin.com/in/rebecca-choi-3479b916a/">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

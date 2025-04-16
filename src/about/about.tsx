import React from 'react';
import "./about.css";
export default function About() {
  return (
    <div id="about">


      <div id="about-content">
        <div className="circular-container">
          <img id="headshot" src="images/headshot-square.png" />
        </div>

        <h2 id="greeting">Hello! I'm Rebecca.</h2>

        <p className="subheading gray no-margin-top">
          {/* I am multidisciplinary creator. */}
          {/* tech as a tool, design as a principle, data as the content, and humans as the reason */}
          Currently a second-year studying Computer Science
          and Design at Northeastern University in Boston, MA. Experienced in UI/UX, graphic design, web development, and data analysis and visualization.
        </p>

        <div>
          <p className="subheading gray">I am passionate about understanding how people think and behave.</p>
          <p className="mid-text">
            From board games to deep philosophical questions, I get excited by anything that makes me think about the world around.
            No two problems ever have the same solution, so I enjoy crafting my thinking and work to the sublties of every challenge.
            <br /><br />In design, I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.</p>
        </div>

        <div>
          <p className="subheading gray">Currently I am...</p>
          <p>
            <ul className="">
              <li className="">Learning to clean up, analyze, and visualize data in Python and R</li>
              <li className="">Working as a designer at Sandbox Northeastern on a team of student developers and designers to create a co-op review platform</li>
              <li className="">Refining this website to store more of my projects and restructuring it to be more easily maintainable for the future. Next step: making it mobile-reponsive!</li>
            </ul>
          </p>
        </div>

        <div>
          <p className="subheading gray">Outside of work...</p>
          <p className="mid-text">
            I love full bleed designs, trees, playing the bass, long silent train rides, and kombucha.
          </p>
        </div>

        {/* <hr /> */}
        <div>
          <p className="subheading gray">Contact</p>
          <p className="">
            <a className="underline dark-gray" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />

            <a className="underline dark-gray" href="https://www.linkedin.com/in/ryschoi">LinkedIn</a> | <a className="underline dark-gray" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
          </p>
        </div>


        {/* <div id="contact">
          Contact
          <p id="contact-info">
            <a className="underline" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />

            <a className="underline" href="https://www.linkedin.com/in/rebecca-choi-3479b916a">LinkedIn</a> | <a className="underline" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
          </p>
        </div> */}
      </div>
    </div>
  );
}

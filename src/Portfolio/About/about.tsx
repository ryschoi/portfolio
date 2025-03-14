import "./about.css";
export default function About() {
  return (
    <div id="about">
      <div id="text">
        <div className="circular-container">
          <img id="headshot" src="images/headshot-square.png" />
        </div>
        <div className="bio">
          {/* tech as a tool, design as a principle, data as the content, and humans as the reason */}
          <h2 id="greeting">Hi, I'm Rebecca!</h2><br />

          <p className="mid-text">
            I'm a second-year student studying Computer Science
            and Design at Northeastern University in Boston.
          </p>

          <p className="subheading gray">I am passionate about understanding how people think and behave.</p>
          <p className="mid-text">
            In design, I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.<br /><br />

            I have experience in UI/UX, design, web development, and data visualization, but
            looking to being a part of anything that combines tech, design, and data to
            create something meaningful and useful for our world.
          </p>

          <p className="subheading gray">Currently I am...</p>
          <p>
            <ul className="mid-text">
              <li className="mid-text">Learning to clean up, analyze, and visualize data in Python and R</li>
              <li className="mid-text">Working as a designer at Sandbox Northeastern on a team of student developers and designers to create a co-op review platform</li>
              <li className="mid-text">Refining this website to store more of my projects and restructuring it to be more easily maintainable for the future. Next step: making it mobile-reponsive!</li>
            </ul>
          </p>


          <p className="subheading gray">Outside of work...</p>
          <p className="mid-text">
            I love trees, playing the bass, long silent train rides, and kombucha.
          </p>
          <br /><br />
          <hr />
          <br /><br />

          <p className="mid-text">
            <a className="mid-text underline" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />

            <a className="mid-text underline" href="https://www.linkedin.com/in/ryschoi">LinkedIn</a> | <a className="underline mid-text" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
          </p><br /><br />
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
    </div >
  );
}

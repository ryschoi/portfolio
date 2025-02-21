import "./about.css";
export default function About() {
  return (
    <div id="about">
      <img id="headshot" alt="Headshot" src="images/headshot.jpg" />

      <div id="text">
        <div className="bio">
          {/* tech as a tool, design as a principle, data as the content, and humans as the reason */}
          <p id="greeting">Hi, I'm Rebecca!</p><br />

          <p>
            I'm currently a second-year student studying Computer Science
            and Design at Northeastern University in Boston.
          </p><br />

          {/* <p className="heading gray">As a designer & developer...</p> */}
          <p>
            I am passionate about understanding how people think and behave. In design / UX,
            I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.<br /><br />

            I am experienced in UI/UX, design, web development, and data visualization, but
            looking to being a part of anything that combines tech, design, and data to
            create something meaningful and useful for our world.<br /><br />
          </p>

          <p className="heading gray">Right now I am...</p>
          <ul>
            <li>Learning to clean up, analyze, and visualize data in Python and R</li>
            <li>Working as a designer on a team of student developers and designers to create a co-op review platform</li>
            <li>Refining this website to store more of my projects and restructuring it to be more easily maintainable for the future. Next step: making it mobile-reponsive!</li>
          </ul><br />

          <p className="heading gray">Outside of work...</p>
          <p>
            I love trees, playing the bass, long silent train rides, and kombucha.
          </p><br />

          <p className="heading gray">Contact me</p>
          <p>
            <a className="underline" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />

            <a className="underline" href="https://www.linkedin.com/in/ryschoi">LinkedIn</a> | <a className="underline" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
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

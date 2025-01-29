import "./about.css";
export default function About() {
  return (
    <div id="about">
      <img id="headshot" alt="Headshot" src="images/headshot.jpg" />

      <div id="text">
        <div className="bio">
          <p id="greeting">Hi, I'm Rebecca!</p><br />

          <p>
            I'm currently a second-year student studying Computer Science
            and Design at Northeastern University in Boston.
          </p><br />

          <p className="heading gray">As a designer & developer...</p>
          <p>
            I am passionate about understanding how people think and behave. In design,
            I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.<br /><br />

            I am experienced in UI/UX, design, web development, and data visualization, but
            looking to being a part of anything that can combine tech, design, and data to
            create something meaningful and useful for our world.<br /><br />
          </p>


          <p className="heading gray">Outside of work...</p>
          <p>
            I am the middle of three girls, I have been playing the bass for
            over seven years, I love walking around taking pictures of the city, and I am probably the
            biggest lover of kombucha you know.
          </p><br />

          <p className="heading gray">Contact</p>
          <p>
            <a className="underline" href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />

            <a className="underline" href="https://www.linkedin.com/in/rebecca-choi-3479b916a">LinkedIn</a> | <a className="underline" href="images/Rebecca_Choi_Resume.pdf">Resume</a>
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

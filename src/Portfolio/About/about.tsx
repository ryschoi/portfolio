import "./about.css";
export default function About() {
  return (
    <div id="port-about">
      <img id="headshot" alt="Headshot" src="images/headshot.jpg" />

      <div id="about-text">
        <p id="about-me">
          {/* Hi, I'm Rebecca.<br /><br />
          
          Second-year student studying Computer Science
          and Design at Northeastern University in Boston.<br /><br />

          Eager to combine tech, design, and data to create something valuable and meaningful.
          Designing with the intention to ensure quality, functional products and satisfied users. */}
       
       
          <span>Hi, I'm Rebecca!</span>
          
          <br /><br />
          
          I'm currently a second-year student studying Computer Science
          and Design at Northeastern University in Boston.<br /><br />

          I am passionate about understanding how people think and behave. In design,
          I have found a discipline where I can apply my insights and fuel my passion.
          Whether it's through a development project or a visual design, I work with the human nature in mind,
          aiming to create quality products that new users can interact with in a familiar way.<br /><br />
          
          I am experienced in UI/UX, design, web development, and data visualization, but open to being a part of anything that can combine tech, design, and data to create something meaningful and useful for our world.
        </p>

        <div id="contact-group">
          <p>Contact</p>
          <p id="contact-info">
            <a href="choi.re@northeastern.edu">choi.re@northeastern.edu</a><br />
            510-682-0020<br /><br />
            {/* Personal Email - <a href="rebecca.choi05@gmail.com">rebecca.choi05@gmail.com</a><br /> */}

           {/* <a id="link-under" href="https://www.linkedin.com/in/rebecca-choi-3479b916a"><img src="images/linkedin.png" alt="LinkedIn" width="16" /></a> */}
           <p><a href="https://www.linkedin.com/in/rebecca-choi-3479b916a">LinkedIn</a> | 
          <a href="images/Rebecca_Choi_Resume.pdf"><span id="no-underline"> </span>Resume</a></p>
          </p>
        </div>
      </div>
    </div>
  );
}

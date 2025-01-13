import "./resume.css";

export default function Resume() {
  return (
    <div id="port-resume">
      <div id="port-resume-pdf-div">
        <a id="pdf" href="images/Rebecca_Choi_Resume.pdf">View as pdf</a>
      </div>
      <div id="actual-resume">
        <div className="column" id="resume-left">
          {/* EDUCATION */}
          <div className="section">
            <p className="section-title">Education</p>
            <div className="entry-item">
              <p>
                <span className="section-subtitle">Computer Science and Design (B.S.)</span><br />
                <span className="gray">Northeastern University  |  2027  |  GPA: 3.52</span><br /><br />

                Related courses:<br /><br />

                <span className="section-subtitle">CS</span> - Web Development, Algorithms & Data,
                Object-Oriented Programming, Discrete Mathematics, Human-Computer Interaction*<br />

                <span className="section-subtitle">Design</span> - Information Design, User-Experience
                Design, Typography 1, Prototyping with Code, Graphic Design*, Information Presentation
                & Visualization*<br /><br />

                * in-progress
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="section">
            <p className="section-title">Skills</p>
            <div className="entry-item">
              <p>
                <span className="section-subtitle">Skills</span> - UI/UX  |  Web development  |  Information design  |  Data visualization  |  Graphic design<br /><br />
                <span className="section-subtitle">Languages</span> - Java  |  HTML  |  CSS  |  React  |  Typescript  |  Processing<br /><br />
                <span className="section-subtitle">Software</span> - Adobe Illustrator  |  Figma  |  Git & Github  |  Visual Studio Code  |  IntelliJ  |  Eclipse  |  Microsoft Excel  |  Canva  |  DaVinci Resolve<br /><br />
                <span className="section-subtitle">Soft skills</span> - Visual thinking  |  Pattern recognition  |  Adaptability  |  Judgment  |  Precision
              </p>
            </div>
          </div>

          {/* INTERESTS */}
          <div className="section">
            <p className="section-title">Interests</p>
            <div className="entry-item">
              <p>
                Music (bass, piano, flute), exploring cities, photography, baking, trees
              </p>
            </div>
          </div>
        </div>

        <div className="column" id="resume-right">
          <div className="section">
            <p className="section-title">Experience</p>
            <div className="entries">
              <div className="entry-item">
                <p className="section-subtitle">UX Designer @ Radien</p>
                <p>
                  <span className="gray">Seattle, WA | Jul - Aug 2024</span><br />
                  <ul>
                    <li>
                      Worked closely with three other students and our project sponsor, Radien, a startup that aims to
                      bridge the gap between designers and developers by improving communication, efficiency, and
                      organization in work and handoff between teams
                    </li>
                    <li>
                      Conducted interviews with front-end developers and project managers to identify pain points
                      in their work and gather insights for solution development
                    </li>
                    <li>
                      Led the ideation phase of the project, managing and contributing to the generation of 20+
                      low-fidelity prototypes of potential solutions
                    </li>
                    <li>
                      Developed a comprehensive, high-fidelity prototype using Figma, responding to user needs and the
                      startup's goals for improved workflow efficiency
                    </li>
                  </ul>
                </p>
              </div>
              <div className="entry-item">
                <p>
                  <span className="section-subtitle">Data Analyst & Visualizer @ Aspire Institute</span><br />
                  <span className="gray">Remote | May 2024</span><br />
                  <ul>
                    <li>
                      Analyzed email data and created comprehensive data visualizations in a group of four other students
                    </li>
                    <li>
                      Provided insights and solutions on how to improve customer retention and engagement by leveraging
                      various social media platforms
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="section-title">Projects</p>
            <div className="entries">
              <div className="entry-item">
                <p>
                  <span className="section-subtitle">Personal Portfolio Website</span><br />
                  <span className="gray">Boston, MA | Sep 2024 - Present</span>
                  <ul>
                    <li>
                      Designed a <a href="https://www.figma.com/proto/D6w0M0SKBXxgUpWlnaoBF1/Website-mockup?node-id=17-43&node-type=canvas&t=D1FxF5oWeHH3jj2d-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">high-fidelity prototype</a> using Figma and implemented a single-page React application
                    </li>
                    <li>
                      Showcased multiple unique project pages
                    </li>
                    <li>
                      Utilized efficient coding practices to optimize performance and code maintainability
                    </li>
                  </ul>
                </p>
              </div>
              <div className="entry-item">
                <p>
                  <span className="section-subtitle">Main Stairs Design @ Albany High School</span><br />
                  <span className="gray">Albany, CA | May 2022</span><br />
                  <ul>
                    <li>
                      Created a 15-panel design for the school’s main stairs that celebrated various highlights
                      from the past school year, fostering unity and school pride
                    </li>
                    <li>
                      Helped with the printing and installation of the vinyl design onto the stairs
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
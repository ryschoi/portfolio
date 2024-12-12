import "./resume.css";

export default function Resume() {
  return (
    <div id="port-resume">
      <div id="port-resume-pdf-div">
        <a id="pdf" href="images/Rebecca_Choi Resume.pdf">View as pdf</a>
      </div>

      <div id="actual-resume">
        <div id="resume-left">
          <p className="green">Education</p>
          <div className="within-sections">
            <div className="within-entries">
              <div id="port-reusme-college">
                <div className="title">
                  <p className="dark bold">
                    Candidate for a Bachelor of Science in Computer Science and Design
                    @ Northeastern University, Khoury College of Computer Sciences
                  </p>
                  <p className="port-resume-content dark">Boston, MA | 2023 - 2027 (expected)<br /></p>
                </div>
                <p className="light within-small">
                  Related courses:<br />
                  <div><span className="bold">CS</span> - Web Development*, Algorithms & Data*, Object-Oriented Design, Discrete Structures,
                  Fundamentals of Computer Science 1 & 2 (Racket)<br /></div>
                  <div><span className="bold">Design</span> - Information Design Principles*, Prototyping with Code*, User Experience Design, <br />
                  Typographic Systems, Color and Composition, Design Perspectives, Design Process + Practices<br /></div>
                  * in-progress
                </p>
              </div>
              <div>
                <div className="title">
                  <p className="dark bold">Albany High School</p>
                  <p className="port-resume-content">Albany, CA | 2019 - 2023<br /></p>
                </div>
                <p className="light">
                  Co-President of Graphic Design Club, AUSD Student Achievement Committee,
                  Vice President of National Honor Society<br />
                </p>
              </div>
            </div>

            <div id="port-resume-skills">
              <p className="green">Skills</p>
              <p className="dark within-small">
                <div><span className="bold">CS</span> - Java  |  HTML  |  CSS  |  React  |  Typescript<br /></div>
                <div><span className="bold">Design</span> - Adobe Illustrator  |  Figma  |  UI/UX  |  Graphic & Information Design  |
                  Data Visualization  |  Canva  |  Web Design  |  DaVinci Resolve<br /></div>
                <div><span className="bold">Soft skills</span> - Visual thinking  |  Pattern recognition  |  Adaptability  |  Time management
                  |  Judgment  |  Precision</div>
              </p>
            </div>

            <div id="port-resume-interests">
              <p className="green">Interests</p>
              <p className="port-resume-content">
                Music (bass, piano, flute), exploring cities, photography, baking, video editing
              </p>
            </div>
          </div>
        </div>

        <div id="resume-right">
          <p className="green">Experience</p>
          <div className="within-entries">
          <div>
              <p className="dark bold">Personal Portfolio Website</p>
              <p className="dark">
                Boston, MA | Sep 2024 - present<br />
                <ul className="list light">
                  <li>
                  Designed a high-fidelity prototype using Figma and implemented a single-page React application using HTML and CSS
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
            <div>
              <p className="dark bold">UX Researcher @ Radien</p>
              <p className="dark">
                Seattle, WA | Jul - Aug 2024<br />
                <ul className="list light">
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
            <div>
              <p className="dark bold">Data Analyst & Visualizer @ Aspire Institute</p>
              <p className="port-resume-content dark">
                Remote | May 2024<br />
                <ul className="list light">
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
            <div>
              <p className="dark bold">Assistant @ Kumon Learning Center</p>
              <p className="port-resume-content dark">El Cerrito, CA | Jan 2020 - Oct 2022<br />
                <ul className="list light">
                  <li>Guided students in learning foundational math and English concepts</li>
                  <li>Worked primarily with early learners (ages three to six), two students per hour</li>
                  <li>Regulated a quiet and organized center atmosphere</li>
                </ul>
              </p>
            </div>
            <div>
              <p className="dark bold">Main Stairs Designer @ Albany High School</p>
              <p className="port-resume-content dark">Albany, CA | May 2022<br />
                <ul className="list light">
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
    </div>
  );
}

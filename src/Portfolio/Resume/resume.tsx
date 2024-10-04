import { Navigate, Route, Routes } from "react-router";
import "./resume.css";

export default function Resume() {
    return (
      <div id="port-resume">
        <a id="port-resume-pdf" href="images/Rebecca Choi_Resume.pdf">View as pdf</a>
        <div>
        <div id="port-resume-left">
          <div id="port-resume-education">
          <p className="port-resume-heading">Education</p>
            <div className="port-resume-entry" id="port-reusme-college">
              <p className="port-resume-content-bold">
                Candidate for a Bachelor of Science in Computer Science and Design 
                @ Northeastern University, Khoury College of Computer Sciences
              </p>
              <p className="port-resume-content">
                Boston, MA | 2023 - 2027 (expected)<br /><br />
                Related courses:<br /><br />
                CS - Web Development*, Algorithms & Data*, Object-Oriented Design, Discrete Structures, 
                Fundamentals of Computer Science 1 & 2 (Racket)<br /><br />
                Design - Information Design Principles*, Prototyping with Code*, User Experience Design, <br /><br />
                Typographic Systems, Color and Composition, Design Perspectives, Design Process + Practices<br /><br />
                * in-progress
              </p>
            </div>
            <div className="port-resume-entry" id="port-reusme-hs">
              <p className="port-resume-content-bold">
                Albany High School
              </p>
              <p className="port-resume-content">
                Albany, CA | 2019 - 2023<br />
                Co-President of Graphic Design Club, AUSD Student Achievement Committee, 
                Vice President of National Honor Society
              </p>
            </div>
          </div>

          <div id="port-resume-skills">
            <p className="port-resume-heading">Skills</p>
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">
                CS - Java  |  HTML  |  CSS  |  Racket<br /><br />
                Design - Adobe Illustrator  |  Figma  |  UI/UX  |  Graphic & Information Design  |  
                Data Visualization  |  Canva  |  Web Design  |  DaVinci Resolve (video editing)<br /><br />
                Soft skills - Visual thinking  |  Pattern recognition  |  Adaptability  |  Time management  
                |  Judgment  |  Precision
              </p>
            </div>
          </div>

          <div id="port-resume-interests">
            <p className="port-resume-heading">Interests</p>
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">
              Music (bass, piano, flute), exploring cities, photography, baking, video editing
              </p>
            </div>
          </div>
        </div>

        <div id="port-resume-right">
          <div id="port-id-education">
            <p className="port-resume-heading">Education</p>
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">UX Researcher @ Radien</p>
              <p className="port-resume-content">
                Seattle, WA | Jul - Aug 2024<br /><br />
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
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">Data Analyst & Visualizer @ Aspire Institute</p>
              <p className="port-resume-content">
              Remote | May 2024<br /><br />
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
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">Assistant @ Kumon Learning Center</p>
              <p className="port-resume-content">
              El Cerrito, CA | Jan 2020 - Oct 2022<br /><br />
                <ul>
                  <li>Guided students in learning foundational math and English concepts</li>
                  <li>Worked primarily with early learners (ages three to six), two students per hour</li>
                  <li>Regulated a quiet and organized center atmosphere</li>
                </ul>
              </p>
            </div>
            <div className="port-resume-entry">
              <p className="port-resume-content-dark">Main Stairs Designer @ Albany High School</p>
              <p className="port-resume-content">
              Albany, CA | May 2022<br /><br />
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
      </div>
  );
}
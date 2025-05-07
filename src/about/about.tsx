import "./about.css";
export default function About() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-between w-[63vw]">
        {/* IMAGE */}
        <div className="overflow-hidden w-[12rem] h-[12rem] rounded-[50%]">
          <img id="headshot" className="w-full h-auto object-cover" src="images/headshot-square.png" />
        </div>


        {/* TEXT */}
        <div className="w-2/3 flex flex-col gap-[2rem]">
          {/* TOP TEXT */}
          <div className="flex flex-col gap-[1rem]">
            <h2>Hi, I'm Rebecca.</h2>

            {/* INTRO */}
            <h3 className="subheading gray no-margin-top">
              {/* tech as a tool, design as a principle, data as the content, and humans as the reason */}
              A second-year Computer Science and Design student at Northeastern University.
              Experienced in UI/UX, graphic design, web development, and data analysis and visualization.
            </h3>

            {/* CONTACT */}
            <div>
              {/* email */}
              <a className="inline underline gray" href="choi.re@northeastern.edu"><h4 className="inline">choi.re@northeastern.edu</h4></a>
              {/* phone */}
              <h4 className="inline gray"> | (510) 682-0020</h4><br />
              {/* links */}
              <h4 className="gray">
                <a className="underline gray" href="https://www.linkedin.com/in/ryschoi"><h4 className="inline">LinkedIn</h4></a> | <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf"><h4 className="inline">Resume</h4></a>
              </h4>
            </div>
          </div>

          <p className="mid-text">
            I'm passionate about understanding how people think and behave. In design, I have found a discipline where I can apply my insights and fuel my passion.
            Whether it's in coding or visual design, I work with the human nature in mind,
            aiming to create quality products that new users can interact with in a familiar way.
          </p>

          <div>
            <h3 className="subheading gray">Currently I am...</h3>
            <p>
              <ul className="">
                <li className="">Learning to clean up, analyze, and visualize data in Python and R</li>
                <li className="">Working as a designer at Sandbox Northeastern on a team of student developers and designers to create a co-op review platform</li>
                <li className="">Refining this website to store more of my projects and restructuring it to be more easily maintainable for the future. Next step: making it mobile-reponsive!</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="subheading gray">Outside of work...</h3>
            <p className="mid-text">
              I love full bleed designs, trees, playing the bass, long silent train rides, and kombucha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

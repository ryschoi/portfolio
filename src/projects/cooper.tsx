import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";
import SectionHeader from "../components/section-header";
import FloatingNav from "../components/floating-nav";
import Pill from "../components/pill";

export default function Cooper() {
  const thisProject = projects.find((p) => p.path === "/cooper");
  const sections: section[] = [
    {
      id: "overview",
      header: "Overview",
      description:
        "Co-op is a _____________ part of the Northeastern student experience,",
    },
    {
      id: "features",
      header: "Design overview",
      description: "Design overview",
    },
    {
      id: "subjectivity",
      header: "Issue 1",
      description: "Minimizing misinterpretation and subjectivity",
    },
    {
      id: "moderation",
      header: "Issue 2",
      description: "Balancing administration and student voices",
    },
    {
      id: "small-samples",
      header: "Issue 3",
      description: "Visual representation for small sample sizes",
    },
    { id: "see-cooper", header: "See Cooper", description: "Craft highlights" },
  ];

  return (
    <div className="project-content">
      <ProjectHeader project={thisProject as Project} sections={sections} />
      <FloatingNav sections={sections} />
      <div className="project-content-rest">
        {/* INTRO */}
        <div id="overview" className="section">
          <SectionHeader
            title={sections[0].header}
            description={sections[0].description}
          />
          <div className="flex flex-col gap-[0.5rem] w-slim mt-[-1rem]">
            <p className="dark-gray">
              By default, two co-op terms are built into every academic plan, and
              students take off six months from classes to work full time in a
              field of their choice.
              {/* built into academic plan */}
              {/* questions */}
            </p>
            <h2 className="serif mt-[2rem]">
              but a job description alone is often not enough to confidently
              commit.
            </h2>
            <p>
              Students start searching for co-ops as early as in the fall of
              sophomore year. A job description is often not enough to
              confidently commit six months to a role, especially as it is most
              students' first professional experience.
              {/* - first time searchers and first professional experience
              - confident decision
              - six month commitment
              - start searching early
              - often just using a job description */}
            </p>
          </div>
          <div className="gray-full-container">
            <div className="flex flex-col gap-[2.5rem] my-[4rem] w-full">
              <div className="w-slim flex flex-col gap-[0.5rem]">
                <h3 className="mb-[0.5rem] dark-gray caption">Solution</h3>
                <h2>Cooper!</h2>
                <p className="dark-gray">
                  Think of it as Rate My Professor, but for co-ops. Students can
                  read and write reviews for co-ops and internships, and since
                  most co-op and internship positions are cyclical, we use
                  previous students' experiences to inform future searchers'
                  experiences/decisions.
                </p>
              </div>
              <div className="med-w grid grid-cols-1 lg:grid-cols-3 gap-[1rem]">
                {[
                  {
                    src: "/images/work/cooper/ss_reviews.png",
                    caption: "Reviews from past co-ops",
                  },
                  {
                    src: "/images/work/cooper/ss_co-opsupport.png",
                    caption: "Insight into co-op-specific experiences",
                  },
                  {
                    src: "/images/work/cooper/ss_tooltip.png",
                    caption: "Compare with similar positions",
                  },
                ].map((image) => (
                  <div key={image.src} className="flex flex-col">
                    <img
                      src={image.src}
                      alt=""
                      className="w-full aspect-[8/7] object-cover object-top rounded-[0.75rem] subtle-shadow"
                    />
                    <p className="cap-top w-4/5">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="w-slim dark-gray">
            Our main design pillars and the features that support them.
          </p>
          <div className="med-w grid grid-cols-1 lg:grid-cols-3 gap-[1rem]">
            {[
              {
                title: "Informative",
                description:
                  "The reviews should have information relevant to a co-op experience.",
                features: [
                  "Jobs and company stats",
                  "Compare feature",
                  "Filters",
                  "Save jobs and companies",
                ],
              },
              {
                title: "Respectful",
                description:
                  "Minimze bias and subjectivity in reviews to paint an accurate picture of the co-op experience.",
                features: [
                  "Anonymous reviewing",
                  "Reporting system",
                  "Admin dashboard",
                  "Profanity filter",
                ],
              },
              {
                title: "Sustainable",
                description: "Support longetivity of the site and its content.",
                features: [
                  "Wide component library",
                  "Data visualizations",
                  "Admin dashboard",
                ],
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col justify-between gap-[1rem] p-[2rem] rounded-[1.5rem] border border-white/40 img-bg"
              >
                <div className="flex flex-col gap-[0.25rem]">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
                {pillar.features.length > 0 && (
                  <div className="flex flex-wrap gap-[0.5rem]">
                    {pillar.features.map((feature) => (
                      <Pill
                        key={feature}
                        text={feature}
                        hover={false}
                        clicked={false}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ISSUE 1 */}
        <div id="subjectivity" className="section">
          <SectionHeader
            title={sections[2].header}
            description={sections[2].description}
          />
          <p className="w-slim">Coming soon.</p>
        </div>

        {/* ISSUE 2 */}
        <div id="moderation" className="section">
          <SectionHeader
            title={sections[3].header}
            description={sections[3].description}
          />
          <p className="w-slim">Coming soon.</p>
        </div>

        {/* ISSUE 3 */}
        <div id="small-samples" className="section">
          <SectionHeader
            title={sections[4].header}
            description={sections[4].description}
          />
          <p className="w-slim">Coming soon.</p>
        </div>

        {/* SEE COOPER */}
        <div id="see-cooper" className="section">
          <SectionHeader
            title={sections[5].header}
            description={sections[5].description}
          />
          <p className="w-slim">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}

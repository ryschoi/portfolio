import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";
import SectionHeader from "../components/section-header";
import FloatingNav from "../components/floating-nav";
import Pill from "../components/pill";
import MessageFlood from "../components/message-flood";

const pillars = [
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
];

// Prototype switch for the design pillars: "rows" is the numbered editorial list,
// "cards" is the original three-card grid.
const PILLAR_LAYOUT: "rows" | "cards" = "rows";

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
      header: "Minimizing misinterpretation and subjectivity",
      description: "Minimizing misinterpretation and subjectivity",
    },
    {
      id: "moderation",
      header: "Balancing administration and student voices",
      description: "Balancing administration and student voices",
    },
    {
      id: "small-samples",
      header: "Visual representation for small sample sizes",
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
          {/* -2rem cancels most of the section's 2.5rem gap so this first paragraph sits
              0.5rem under the header's h2, matching the h2 + paragraph pair below. */}
          <div className="flex flex-col gap-[0.5rem] w-slim mt-[-2rem]">
            <p className="dark-gray">
              By default, two co-op terms are built into every academic plan, and
              students take off six months from classes to work full time in a
              field of their choice.
              {/* built into academic plan */}
              {/* questions */}
            </p>
            {/* Same box as the MessageFlood below (1.5rem padding around a 2000×570 frame),
                filled edge to edge by the press/LinkedIn collage. */}
            <div className="round img-bg relative overflow-hidden w-full p-[1.5rem] mt-[0.75rem]">
              <div className="w-full aspect-[2000/570]" />
              <img
                src="/images/work/cooper/reputation.png"
                alt="Collage: a news headline saying co-op is Northeastern's biggest draw for applicants, Northeastern's homepage reading 'This is co-op', and students' LinkedIn posts and comments celebrating co-op offers"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h2 className="serif mt-[2rem]">
              but a job description alone is often not enough to confidently
              commit to one.
            </h2>
            <p className="dark-gray">
              Students start searching for co-ops as early as in the fall of
              sophomore year. Students are often filled with many questions, especially as it is most
              students' first professional experience.
              {/* - first time searchers and first professional experience
              - confident decision
              - six month commitment
              - start searching early
              - often just using a job description */}
            </p>
            <MessageFlood className="round img-bg w-full mt-[0.75rem]" />
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
          <div className="w-slim flex flex-col gap-[0.5rem]">
            <h3 className="mb-[0.5rem] dark-gray caption">My role</h3>
            <p className="dark-gray">
              I led the design of Cooper, starting with three design
              pillars I set to guide every decision we made. Here they are, with
              the features that support each one.
            </p>
          </div>
          {PILLAR_LAYOUT === "rows" ? (
            // Numbered editorial rows: hairline between each, big serif title on the
            // left, the description and its features on the right. Stacks on mobile.
            <div className="w-slim flex flex-col border-b border-[var(--color-gray-stroke)]">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-1 lg:grid-cols-[2.5rem_11rem_1fr] gap-x-[1.5rem] gap-y-[0.5rem] py-[1.75rem] border-t border-[var(--color-gray-stroke)]"
                >
                  <span className="caption light-gray lg:pt-[0.6rem]">
                    0{i + 1}
                  </span>
                  <h2 className="serif">{pillar.title}</h2>
                  <div className="flex flex-col gap-[0.75rem] lg:pt-[0.35rem]">
                    <p className="dark-gray">{pillar.description}</p>
                    {/* Features hidden for now.
                    <p className="p-sm gray flex flex-wrap gap-x-[0.6rem]">
                      {pillar.features.map((feature, j) => (
                        <span key={feature} className="whitespace-nowrap">
                          {feature}
                          {j < pillar.features.length - 1 && (
                            <span className="light-gray ml-[0.6rem]">·</span>
                          )}
                        </span>
                      ))}
                    </p>
                    */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div className="med-w grid grid-cols-1 lg:grid-cols-3 gap-[1rem]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col justify-between gap-[1rem] p-[2rem] rounded-[1.5rem] border border-white/40 img-bg"
              >
                <div className="flex flex-col gap-[0.25rem]">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
                {/* Features hidden for now.
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
                */}
              </div>
            ))}
          </div>
          )}
        </div>

        {/* ISSUE 1 */}
        <div id="subjectivity" className="section">
          <SectionHeader
            description={sections[2].description}
          />
          {/* -2rem pulls the text up under the header, same as the Overview. */}
          <div className="w-slim flex flex-col gap-[1rem] mt-[-2rem]">
            <p className="dark-gray">
              For a long time, most of our questions used a 1–5
              rating, which is arbitrary and uninformative.
            </p>
            <div className="flex flex-col mb-[1rem]">
              {/* Same light gray box as the two Overview images above. */}
              <div className="round img-bg w-full overflow-hidden">
                <img
                  src="/images/work/cooper/old_rating_new.png"
                  alt="The old 'On the job' section: company culture and supervisor ratings shown as bars out of 5 (4.5 and 4.0) against industry averages"
                  className="w-full scale-[1.07] md:scale-100"
                />
              </div>
              <p className="sp gray mt-[0.6rem]">Previous question format</p>
            </div>
            <p className="dark-gray">
              To leave as little room as possible for bias and subjectivity, I
              defined clear criteria for each metric, so every review is
              measured against the same standards across reviewers and roles.
            </p>
            {/* New rating breakdowns, crossfading between the two categories on a loop.
                Both images share one grid cell, so the box is as tall as the taller one. */}
            <div className="flex flex-col mt-[0.75rem]">
              <div className="round img-bg w-full grid place-items-center p-[1rem] md:p-[2rem]">
                {[
                  {
                    src: "/images/work/cooper/company-culture.png",
                    alt: "Company culture breakdown: team outings, coffee chats and constructive feedback, each shown as how many reviewers reported it",
                  },
                  {
                    src: "/images/work/cooper/co-op-support.png",
                    alt: "Co-op support breakdown: onboarding, work structure and career growth statements, each shown as how many reviewers were in favor",
                  },
                ].map((image, i) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="crossfade w-[88%] md:w-[70%] [grid-area:1/1]"
                    style={{ animationDelay: `${i * -5}s` }}
                  />
                ))}
              </div>
              <p className="sp gray mt-[0.6rem]">Current question format</p>
            </div>
          </div>
        </div>

        {/* ISSUE 2 */}
        <div id="moderation" className="section">
          <SectionHeader
            description={sections[3].description}
          />
          <p className="w-slim">Coming soon.</p>
        </div>

        {/* ISSUE 3 */}
        <div id="small-samples" className="section">
          <SectionHeader
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

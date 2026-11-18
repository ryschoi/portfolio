import { useState } from "react";
import "./projects.css";
import { projects } from "../database";
import ProjectHeader from "../components/project-header";
import { Project } from "./project";
import { section } from "./section";
import SectionHeader from "../components/section-header";
import FloatingNav from "../components/floating-nav";
import Pill from "../components/pill";
import MessageFlood from "../components/message-flood";
import CrossfadePauseButton from "../components/crossfade-pause-button";
import SafeguardCarousel, { Safeguard } from "../components/safeguard-carousel";

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

// The three moderation safeguards, in the order a review meets them. Boxes are empty
// placeholders until screenshots are added: give an entry a `src` and `alt` to show it.
const safeguards: Safeguard[] = [
  {
    stage: "In the review form",
    text: "The questions are designed to minimize ambiguity and subjectivity.",
    caption: "Review form questions",
  },
  {
    stage: "Before the review goes live",
    text: "Before a review goes live, an admin must approve it from the admin dashboard.",
    caption: "Admin dashboard",
  },
  {
    stage: "After the review goes live",
    text: "Anyone can report a review, role, or company, and the report goes to the admin dashboard to be looked into.",
    caption: "Reporting feature",
  },
];

export default function Cooper() {
  const thisProject = projects.find((p) => p.path === "/cooper");
  const [formatPaused, setFormatPaused] = useState(false);
  const [interviewPaused, setInterviewPaused] = useState(false);
  const sections: section[] = [
    {
      id: "overview",
      header: "Overview",
      description:
        "Co-op is a _____________ part of the Northeastern student experience,",
    },
    {
      id: "solution",
      header: "Solution",
      description: "Solution: Cooper!",
    },
    {
      id: "my-role",
      header: "My role",
      description: "My role: Design Lead",
    },
    {
      id: "subjectivity",
      header: "Minimizing misinterpretation and subjectivity",
      description: "Minimizing misinterpretation and subjectivity",
    },
    {
      id: "moderation",
      header: "Content safeguards",
      description: "Content safeguards",
    },
    {
      id: "small-samples",
      header: "Representing all sample sizes",
      description: "Visual representation for all sample sizes",
    },
  ];

  const section = (id: string) => sections.find((s) => s.id === id)!;

  return (
    <div className="project-content">
      <ProjectHeader project={thisProject as Project} sections={sections} />
      <FloatingNav sections={sections} />
      <div className="project-content-rest">
        {/* INTRO */}
        <div id="overview" className="section">
          <SectionHeader
            title={section("overview").header}
            description={section("overview").description}
          />
          <div className="flex flex-col gap-[0.5rem] w-slim mt-[-1.5rem]">
            <p className="gray">
              By default, two co-op terms are built into every academic plan,
              and students take off six months from classes to work full time in
              a field of their choice.
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
            <h2 className="mt-[4rem] mb-[0.5rem]">
              but a job description alone is often not enough to confidently
              commit to one.
            </h2>
            <p className="gray">
              Students start searching for co-ops as early as in the fall of
              sophomore year. Students are often filled with many questions,
              especially as it is most students' first professional experience.
              {/* - first time searchers and first professional experience
              - confident decision
              - six month commitment
              - start searching early
              - often just using a job description */}
            </p>
            <MessageFlood className="round img-bg w-full mt-[0.75rem]" />
          </div>
        </div>
        <div id="solution" className="section">
          <SectionHeader description={section("solution").description} />
          <p className="dark-gray mt-[-1.5rem] w-slim">
            It's like Rate My Professor, but for co-ops. Students can read and
            write reviews for co-ops and internships, and since most co-op and
            internship positions recur each cycle, previous students'
            experiences help inform future searchers' decisions.
          </p>
          {/* Same screen recording as Cooper's big box on the home page (image-bg.tsx), in a
              light gray box like the Overview images. -1.5rem keeps it 1rem under the text. */}
          <div className="round img-bg w-slim p-[1.5rem] mt-[-1.5rem]">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="/images/work/cooper/job_compare.mov"
              poster={thisProject?.frontImage}
              className="w-full subtle-shadow round"
            />
          </div>
          {/* Two square light gray boxes side by side (stacked on mobile), each with a caption
              underneath, styled like the Definitive / Just the data pair. Empty for now: put
              an image or video inside a box's div. -1.5rem keeps them 1rem under the video. */}
          <div className="w-slim grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[-1.5rem]">
            {["Review your co-op", "Read another"].map((caption) => (
              <div key={caption} className="flex flex-col">
                <div className="round img-bg relative w-full aspect-square overflow-hidden" />
                <p className="sp gray mt-[0.6rem]">{caption}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="my-role" className="section">
          <SectionHeader description={section("my-role").description} />
          <p className="dark-gray mt-[-1.5rem] w-slim">
            I led the design of Cooper, which involved _________. starting with
            three design pillars I set to guide every decision we made. Here
            they are, with the features that support each one.
          </p>
          {PILLAR_LAYOUT === "rows" ? (
            // Numbered editorial rows: hairline between each, big serif title on the
            // left, the description and its features on the right. Stacks on mobile.
            <div className="w-slim flex flex-col border-b border-[var(--color-gray-stroke)]">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-1 lg:grid-cols-[2.5rem_11rem_1fr] gap-x-[1.5rem] gap-y-[0.5rem] py-[1.75rem] border-t border-[var(--color-gray-stroke)]"
                >
                  <span className="light-gray lg:pt-[0.6rem]">
                    0{i + 1}
                  </span>
                  <h2>{pillar.title}</h2>
                  <div className="flex flex-col gap-[0.75rem] lg:pt-[0.35rem]">
                    <p className="dark-gray">{pillar.description}</p>
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
                </div>
              ))}
            </div>
          )}
        </div>
        {/* ISSUE 1 */}
        <div id="subjectivity" className="section">
          <SectionHeader description={section("subjectivity").description} />
          <div className="w-slim flex flex-col gap-[1rem] mt-[-1.5rem]">
            <p className="dark-gray">
              For a long time, most of our questions used a 1–5 rating, which is
              arbitrary and uninformative.
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
              To leave as little room as possible for bias and subjectivity,
              each metric is now defined with clear criteria, so every review is
              measured against the same standards, across all reviewers and
              roles.
            </p>
            {/* New rating breakdowns, crossfading between the two categories on a loop.
                Both images share one grid cell, so the box is as tall as the taller one. */}
            <div className="flex flex-col mt-[0.75rem]">
              <div
                className={`relative round img-bg w-full grid place-items-center p-[1rem] pb-[2.75rem] md:p-[2rem] ${formatPaused ? "crossfade-paused" : ""}`}
              >
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
                    style={{
                      animationDelay: `calc(var(--crossfade-duration) * ${i * -0.5})`,
                    }}
                  />
                ))}
                <CrossfadePauseButton
                  paused={formatPaused}
                  onToggle={() => setFormatPaused((p) => !p)}
                />
              </div>
              <p className="sp gray mt-[0.6rem]">Current question format</p>
            </div>
            <p className="dark-gray mt-[1rem]">
              Biased reviews don't just stem from vague question phrasing, but
              also differences in individual experiences, like in interview
              difficulty. To address this, both the review form and the
              displayed reviews frame difficulty in relation to similar roles.
            </p>
            {/* The difficulty question in the review form and how it shows on a review,
                crossfading on a loop like the question-format box above. Both slides share
                one grid cell, so the box is as tall as the taller one. The captions sit under
                the box, stacked the same way and on the same timing, so each swaps with its
                image; the paused class goes on the wrapper so it freezes both. */}
            {(() => {
              const slides = [
                {
                  label: "In the review form",
                  src: "/images/work/cooper/interview_diff.png",
                  alt: "Review form difficulty question with options: easier than, about the same as, or harder than other interviews",
                  aspect: 1467 / 951,
                  width: "w-[80%] md:w-[60%]",
                },
                {
                  label: "The displayed review",
                  src: "/images/work/cooper/interview.png",
                  alt: "A displayed review rating the technical and behavioral interviews 'Less difficult', with a tooltip: compared to other interviews for technical roles",
                  // Shown cropped to 1774×650: the PNG has a lot of empty space above and
                  // below its content, and trimming it makes the content larger.
                  aspect: 1774 / 650,
                  width: "w-full md:w-[88%]",
                },
              ];
              const delay = (i: number) => ({
                animationDelay: `calc(var(--crossfade-duration) * ${i * -0.5})`,
              });
              return (
                <div
                  className={`flex flex-col mt-[0.75rem] ${interviewPaused ? "crossfade-paused" : ""}`}
                >
                  <div className="relative round img-bg w-full grid place-items-center p-[1rem] pb-[2.75rem] md:p-[2rem]">
                    {slides.map((slide, i) => (
                      <div
                        key={slide.src}
                        className={`crossfade round bg-white p-[1rem] [grid-area:1/1] ${slide.width}`}
                        style={delay(i)}
                      >
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full object-cover"
                          style={{ aspectRatio: slide.aspect }}
                        />
                      </div>
                    ))}
                    <CrossfadePauseButton
                      paused={interviewPaused}
                      onToggle={() => setInterviewPaused((p) => !p)}
                    />
                  </div>
                  <div className="grid mt-[0.6rem]">
                    {slides.map((slide, i) => (
                      <p
                        key={slide.label}
                        className="crossfade-caption sp gray [grid-area:1/1]"
                        style={delay(i)}
                      >
                        {slide.label}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })()}
            <p className="dark-gray mt-[1rem]">
              Since candidates for similar roles tend to be at similar skill
              levels, comparing against those interviews gives a fairer baseline
              than each reviewer’s personal sense of “hard.”
            </p>
          </div>
        </div>

        {/* ISSUE 2 */}
        <div id="moderation" className="section">
          <SectionHeader description={section("moderation").description} />
          <div className="w-slim flex flex-col gap-[1rem] mt-[-1.5rem]">
            <p className="dark-gray">
              Throughout the project, we periodically checked in with
              Northeastern's co-op directors to make sure they'd be comfortable
              with a site like Cooper existing.
            </p>
            <p className="dark-gray">
              Their main concern was that negative reviews could damage the
              school's long-standing relationships with employers, since many
              co-op positions recur cycle after cycle.
            </p>
            <p className="dark-gray">
              We addressed this with safeguards at three points in a review's
              life.
            </p>
            <div className="mt-[0.75rem]">
              <SafeguardCarousel safeguards={safeguards} />
            </div>
          </div>
        </div>

        {/* ISSUE 3 */}
        <div id="small-samples" className="section">
          <SectionHeader description={section("small-samples").description} />
          <div className="w-slim flex flex-col gap-[1rem] mt-[-1.5rem]">
            <p className="dark-gray">
              Cooper will be around for years to come, but likely without anyone
              actively maintaining it. Some companies hire entire cohorts of
              co-ops each cycle, while others hire just a handful, or even one,
              so every job page had to work just as well with a single review as
              with dozens.
            </p>
            <p className="dark-gray">
              That meant we couldn't rely on review counts alone as a quick
              summary, but we couldn't visualize everything either. Instead,
              some answers are stated definitively, while others show just the
              data and leave the interpretation to the reader.
            </p>
            {/* Side by side, each in the same light gray box + caption as above. The boxes are
                square, and the image bleeds off the bottom right; an entry without a `src`
                shows an empty box. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-[0.75rem] mb-[1rem]">
              {(
                [
                  {
                    caption: "Definitive",
                    width: "w-[127%]",
                    position: "top-[2rem] left-[1.5rem]",
                    images: [
                      {
                        src: "/images/work/cooper/definitive.png",
                        alt: "Job details stated outright, such as 'No overtime reported' and 'Not required' for drug tests, each with the count behind it, like '0/1 reported overtime work'",
                      },
                    ],
                  },
                  {
                    // Four examples that toggle on a loop (no pause button), centered in the box.
                    // Sized a bit larger than the Definitive screenshot's text. All four are
                    // 916px wide, so their text matches; an image can set its own `width`.
                    caption: "Just the data",
                    width: "w-[80%]",
                    position:
                      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    images: [
                      {
                        src: "/images/work/cooper/behavioral.png",
                        alt: "Behavioral: 1/1 reported behavioral interviews, with a dot for the one response and a 'Less difficult' tag",
                      },
                      {
                        src: "/images/work/cooper/technical.png",
                        alt: "Technical: 1/1 reported technical interviews, with a dot for the one response",
                      },
                      {
                        src: "/images/work/cooper/PTO.png",
                        alt: "PTO: 0/1 indicated receiving paid time off, with an empty dot for the one response",
                      },
                      {
                        src: "/images/work/cooper/travel.png",
                        alt: "Travel stipend: 1/1 indicated receiving transportation or relocation assistance, with a dot for the one response",
                      },
                    ],
                  },
                ] as {
                  caption: string;
                  width: string;
                  position: string;
                  images: { src: string; alt: string; width?: string }[];
                }[]
              ).map((box) => (
                <div key={box.caption} className="flex flex-col">
                  {/* The Definitive image starts 2rem down and 1.5rem in from the top left and is
                      wider than the box, so it gets cut off at the right and bottom edges. The
                      Just the data images are centered and take turns, 1.75s each. */}
                  <div className="round img-bg relative w-full aspect-square overflow-hidden">
                    {box.images.map((image, i) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className={`absolute max-w-none ${box.position} ${
                          image.width ?? box.width
                        } ${box.images.length > 1 ? "crossfade-4" : ""}`}
                        style={
                          box.images.length > 1
                            ? // Image i starts i quarters into the cycle, so they play in list order.
                              {
                                animationDelay: `${-((box.images.length - i) % box.images.length) * 1.75}s`,
                              }
                            : undefined
                        }
                      />
                    ))}
                  </div>
                  <p className="sp gray mt-[0.6rem]">{box.caption}</p>
                </div>
              ))}
            </div>
            <br />
            <p className="dark-gray">
              But in <span className="dark-gray font-[400]">Compare Mode</span>,
              counts are shown as percentages so metrics are easier to compare.
            </p>
            {/* Short div: same size as the Overview boxes, 1.5rem padding around a
                2000×570 frame. Empty placeholder until the compare screenshot is added. */}
            <div className="flex flex-col mt-[0.75rem]">
              <div className="round img-bg w-full overflow-hidden p-[1.5rem]">
                <div className="w-full aspect-[2000/570]" />
              </div>
              <p className="sp gray mt-[0.6rem]">Compare mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

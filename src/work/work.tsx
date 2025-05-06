import React from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../database";
import { useRef } from "react";
import "../index.css";
import "../navigation/nav.css";
import "./work.css";
import WorkCard from "./work-card";
export default function Work() {
  const { pathname } = useLocation();
  const links = [
    { label: "Work", path: `/` },
    { label: "Resume", path: `/resume` },
    { label: "About", path: `/about` }
  ];

  const myRef = useRef(null);

  return (
    <div id="work" className="">
      <div className="flex flex-col gap-[0.5rem] mt-[8rem] mb-[12rem] items-center place-content-center">
        <h2 className="text-red-500">
          <span className="gray">UX Designer, coder, kombucha drinker. 🌚</span><br />
          Using tech, design, and data to create intentionally and meaningfully.
        </h2>
      </div>

      {/* WORK DISPLAYS */}
      <div id="work-content" ref={myRef}>
        <div className="work-single-col">
          {projects
            .filter((proj) => proj.active === true)
            .map((proj) => (
              <WorkCard project={proj} />
            ))}
        </div>
      </div>
    </div>
  );
}

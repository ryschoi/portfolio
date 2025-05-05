import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div id="port-resume" className="flex-col gap-[<1.5rem>]">
      <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf">View as pdf</a>
      <div className="resume-img-cont">
        <img className="" id="resume-img" src="images/Rebecca_Choi_Resume.png" alt="" width="85%" />
      </div>
    </div>
  );
}
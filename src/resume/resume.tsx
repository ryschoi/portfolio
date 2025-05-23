import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <div id="" className="flex flex-col gap-[1.5rem] w-3/5 align-center text-center">
        <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf">View as pdf</a>
        <div className="resume-img-cont">
          <img className="" id="resume-img" src="images/Rebecca_Choi_Resume.png" alt="" width="85%" />
        </div>
      </div>
    </div>
  );
}
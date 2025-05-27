import "./resume.css";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[1rem] w-[90vw] max-w-[50rem] align-center text-center">
        <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf">View as pdf</a>
        <div className="resume-shadow p-[2rem]">
          <img className="w-full" src="images/Rebecca_Choi_Resume.png" alt="" />
        </div>
      </div>
    </div>
  );
}
import "./resume.css";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[1rem] max-w-2/3 align-center text-center">
        <a className="underline gray" href="images/Rebecca_Choi_Resume.pdf">View as pdf</a>
        {/* <a href="../public/images/Rebecca_Choi_Resume.pdf"><button className="zoom gray-tag py-[6px] px-[16px] rounded-[0.5rem]">View as pdf</button></a> */}
        <div className="resume-shadow p-[2rem]">
          <img className="w-full" src="images/Rebecca_Choi_Resume.png" alt="" />
        </div>
      </div>
    </div>
  );
}
import Pill from "components/pill";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-[0.5rem] w-full max-w-[50rem] align-center text-center">
        <a href="images/Rebecca_Choi_Resume.pdf"><Pill text="View as pdf" hover={true} clicked={false} /></a>
        <div className="resume-shadow p-[2rem]">
          <img className="w-full" src="images/Rebecca_Choi_Resume.png" alt="" />
        </div>
      </div>
    </div>
  );
}
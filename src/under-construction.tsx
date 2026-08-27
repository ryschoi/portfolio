import Pill from "./components/pill";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col w-full px-4 md:w-1/3 md:px-6 mx-auto min-h-screen items-center justify-center gap-7 text-center">
      <h1 className="nanum leading-[1.3]">Rebecca Choi<br />Product design + UX engineering</h1>
      <h1 className="nanum leading-[1.3] italic">Portfolio under construction–new work coming soon.</h1>
      {/* <p className="caption">Contact</p> */}
      <div className="flex gap-[0.6rem] items-center">
        <Pill copyText="rebecca.choi05@gmail.com" hover={true} clicked={false} />
        <Pill path="https://www.linkedin.com/in/ryschoi/" text="LinkedIn" hover={true} clicked={false} />
      </div>
    </div>
  );
}
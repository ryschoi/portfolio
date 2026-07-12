import Pill from "./components/pill";

export default function UnderConstruction() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Under construction</h1>
      –––
      <p className="caption">Contact</p>
      <div className="flex gap-[1rem] items-center">
        <div className="flex flex-wrap gap-[0.6rem]">
          <Pill copyText="rebecca.choi05@gmail.com" hover={true} clicked={false} />
          <Pill copyText="(510) 682-0020" hover={true} clicked={false} />
          <Pill path="https://www.linkedin.com/in/ryschoi/" text="LinkedIn" hover={true} clicked={false} />
        </div>
      </div>
    </div>
  );
}

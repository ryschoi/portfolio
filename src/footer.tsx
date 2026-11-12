import CopyText from "./components/copy-text";

export default function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      id="footer"
      className={`w-slim ${compact ? "mt-[1.5rem] mb-[1.5rem]" : "mt-[6rem] mb-[2.5rem]"} md:w-full md:max-w-full`}
    >
      <hr />
      <div className={`flex flex-wrap justify-between items-start gap-y-[0.75rem] ${compact ? "mt-[1rem]" : "mt-[2rem]"}`}>
        <p className="caption">Coded and designed by me ◡̈</p>

        <div className="flex flex-wrap gap-x-[1rem] gap-y-[0.5rem]">
          <CopyText text="rebecca.choi05@gmail.com" followCursor />
          <a href="https://www.linkedin.com/in/ryschoi/">LinkedIn</a>
          <a href="/images/Rebecca_Choi_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="https://github.com/ryschoi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

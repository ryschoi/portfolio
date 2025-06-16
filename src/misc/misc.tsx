import { misc } from "../database";
import MiscCard from "../components/misc-card";

export default function Misc() {
    return (
        <div className="flex flex-col place-content-center items-center">
            <h2>Miscellaneous work from over the years</h2>
            <div className="flex flex-wrap gap-[2rem] w-full">
                {misc
                    .filter((proj) => proj.active === true)
                    .map((proj) => (
                        <MiscCard project={proj} />
                    ))}
            </div>
        </div>
    );
}
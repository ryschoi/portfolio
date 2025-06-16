import { misc } from "../database";
import MiscCard from "../components/misc-card";

export default function Misc() {
    return (
        <div className="flex flex-wrap gap-[4rem]">
            {misc
                .filter((proj) => proj.active === true)
                .map((proj) => (
                    <MiscCard project={proj} />
                ))}
        </div>
    );
}
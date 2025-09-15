import { misc } from "database";
import { MiscProj } from "misc/misc-proj";
import Tag from "./tag";

export default function MiscModal({ project }: { project: MiscProj }) {
    return (
        <div className="dark-bg rounded">
            <div className="flex flex-col mx-[1.5rem] my-[2rem]">
                {/* TEXT & TAGS */}
                <div className="frosted-2 m-[1rem] flex justify-between w-full">
                    <p className="white flex gap-[2rem]">
                        {project.title}
                        <span className="gray">{project.year}</span>
                    </p>

                    <div className="flex gap-[0.5rem]">
                        {project.tags
                            .map((tag) =>
                                <button className="py-[6px] px-[16px] tag-clicked">{tag}</button>
                            )
                        }
                    </div>
                </div>
                
                {/* IMAGES */}
                <div>
                    {project.addImg
                        .map((imgPath) =>
                            <img src={imgPath} className="w-full" />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
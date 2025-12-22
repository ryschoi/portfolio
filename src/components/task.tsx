import { section } from "projects/section";

export default function Task({ task, sectionsList }: { task: string, sectionsList: section[] }) {
    const handleScroll = (item: string) => {
        const id = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const section = document.getElementById(id);
        if (section) {
            const offset = 64;
            const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="task-container flex place-content-center">
            <div className="mob-mid-w my-[7rem] flex flex-col gap-[1rem]">
                <p className="caption light-gray">Process</p>
                {sectionsList.map((section, index) => (
                    <div className="hover:underline cursor-pointer flex flex-col gap-[0.25rem]" onClick={() => handleScroll(section.header)}>
                        <p className="caption light-gray">0{index + 1}. {section.header}</p>
                        <h2 className="white">{section.description}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
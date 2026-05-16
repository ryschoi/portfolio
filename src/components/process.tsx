import { section } from "../projects/section";

export default function ProcessBox({ sectionsList }: { sectionsList: section[] }) {
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
                <hr className="border-[#555555] border-[1.25px]" />
                {sectionsList.map((section, index) => (
                    <div key={index} className="flex flex-col gap-[2.25rem]">
                        {/* hover:underline cursor-pointer  onClick={() => handleScroll(section.header)} */}
                        <div className="flex flex-col gap-[0.5rem]">
                            <p className="caption light-gray">{section.header}</p>
                            <h2 className="white">{section.description}</h2>
                        </div>
                        <hr className="border-[#555555] border-[1.25px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
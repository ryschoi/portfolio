export default function Task({ task, processItems }: { task: string; processItems: string[] }) {
    const handleScroll = (item: string) => {
        const id = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const section = document.getElementById(id);
        if (section) {
            const offset = 64; // 4rem = 64px
            const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="task-container flex place-content-center">
            <div className="mob-mid-w my-[7rem]">
                <div>
                    <p className="caption">Task</p>
                    <h1 className="text-[#e8e8e6]">{task}</h1>
                </div>
                <br />
                <br />
                <p className="text-[#e8e8e6]">Process overview</p>
                {processItems.map((item, index) => (
                    <p key={index} onClick={() => handleScroll(item)} className="caption hover:underline cursor-pointer">
                        → {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
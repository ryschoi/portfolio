type inputs = {
    title: string;
    description: string;
    optional: string;
}

export default function SectionHeader({ title, description, optional }: inputs) {
    return (
        <div className="flex flex-row justify-between w-[63vw] self-center">
            {/* TITLE */}
            <h3 className="gray w-1/5">{title}</h3>

            {/* DESCRIPTION */}
            <div className="w-3/5 flex flex-col gap-[1rem]">
                <h3 className="">{description}</h3>
                <p>{optional}</p>
            </div>
        </div>
    );
}
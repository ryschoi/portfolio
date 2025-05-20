type inputs = {
    title: string;
    description: string;
    optional: string;
}

export default function SectionHeader({ title, description, optional }: inputs) {
    return (
        <div className="flex flex-col gap-[0.5rem] w-(--mid-width) self-center">
            {/* TITLE */}
            <p className="caption gray semi-bold">{title}</p>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-[1rem]">
                <h2 className="">{description}</h2>
                <p>{optional}</p>
            </div>
        </div>
    );
}
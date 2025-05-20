type inputs = {
    title: string;
    description: string;
    optional: string;
}

export default function SectionHeader({ title, description, optional }: inputs) {
    return (
        <div className="flex flex-col gap-[0.5rem] w-(--mid-width) self-center">
            <p className="caption gray semi-bold">{title}</p>
            <h2 className="mb-[1rem]">{description}</h2>
            <p>{optional}</p>
        </div>
    );
}
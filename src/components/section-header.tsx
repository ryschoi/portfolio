type inputs = {
    title: string;
    description: string;
    optional?: string;
}

export default function SectionHeader({ title, description, optional }: inputs) {
    return (
        <div className="flex flex-col gap-[0.5rem] w-slim">
            <p className="caption gray semi-bold">{title}</p>
            <h2 className="serif">{description}</h2>
            {optional && (
                <span className="h4 !mt-[1rem] gray">{optional}</span>
            )}
        </div>
    );
}
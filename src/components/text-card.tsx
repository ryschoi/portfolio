export default function TextCard({ main, description }: { main: string, description: string }) {
    return (
        <div className="bg-[#ededdf] rounded w-[30rem] light-border">
            <div className="h-[40vh] flex flex-col m-[1.5rem]">
                <h4 className="mb-[0.5rem]">{main}</h4>
                <p className="dark-gray">{description}</p>
            </div>
        </div>
    );
}
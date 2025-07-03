export default function VerticalImageSpan({ path }: { path: string }) {
    return (
        <div className="rounded img-bg w-full flex place-content-center py-[4vw]">
            <img src={path} alt="" className="w-[36rem] max-w-[84vw] subtle-shadow" />
        </div>
    );
}
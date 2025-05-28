export default function VerticalImageSpan({ path }: { path: string }) {
    return (
        <div className="rounded-[0.5rem] img-bg w-full flex align-center justify-center py-[4vw] w-full">
            <img src={path} alt="" className="w-[36rem] max-w-[84vw] subtle-shadow" />
        </div>
    );
}
export default function TwoImageNoCaption({ path1, path2 }: { path1: string, path2: string }) {
    return (
        <div className="flex flex-wrap gap-[0.5rem]">
            <div className="img-bg rounded flex align-center justify-center w-full max-w-[655px]">
                <div className="self-center my-[4vw]">
                    <img src={path1} alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                </div>
            </div>
            <div className="img-bg rounded flex align-center justify-center w-full max-w-[655px]">
                <div className="self-center my-[4vw]">
                    <img src={path2} alt="" className="w-[30vw] min-w-[332px] subtle-shadow" />
                </div>
            </div>
        </div>
    );
}
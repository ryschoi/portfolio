export default function TwoImageCaptionRock({ path1, cap1, path2, cap2 }: { path1: string, cap1: string, path2: string, cap2: string }) {
    return (
        <div className="flex flex-wrap gap-[0.5rem]">
            <div className="flex flex-col w-full max-w-[655px]">
                <div className="goodnotes-bg-2 rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                    <div className="self-center my-[4vw]">
                        <img src={path1} alt="" className="w-[24vw] min-w-[332px]" />
                    </div>
                </div>
                <p className="caption cap-top">{cap1}</p>
            </div>
            <div className="flex flex-col w-full max-w-[655px]">
                <div className="goodnotes-bg rounded-[0.5rem] flex place-content-center w-full max-w-[655px]">
                    <div className="self-center my-[4vw]">
                        <img src={path2} alt="" className="w-[24vw] min-w-[332px]" />
                    </div>
                </div>
                <p className="caption cap-top">{cap2}</p>
            </div>
        </div>
    );
}
export default function TwoImageCaptionRock({ path1, cap1, path2, cap2 }: { path1: string, cap1: string, path2: string, cap2: string }) {
    return (
        <div className="work-img-group-col">
            <div className="flex flex-col w-full">
                <div className="goodnotes-bg-2 round flex place-content-center work-add-img-cont">
                    <div className="self-center my-[4vw]">
                        <img src={path1} alt="" className="w-[24vw] min-w-[18rem]" />
                    </div>
                </div>
                <p className="caption cap-top">{cap1}</p>
            </div>
            <div className="flex flex-col w-full">
                <div className="goodnotes-bg round flex place-content-center work-add-img-cont">
                    <div className="self-center my-[4vw]">
                        <img src={path2} alt="" className="w-[24vw] min-w-[18rem]" />
                    </div>
                </div>
                <p className="caption cap-top">{cap2}</p>
            </div>
        </div>
    );
}
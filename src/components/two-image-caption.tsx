export default function TwoImageCaption({ path1, cap1, path2, cap2 }: { path1: string, cap1: string, path2: string, cap2: string }) {
    return (
        <div className="work-img-group-col">
            <div>
                <div className="img-bg work-add-img-cont">
                    <div className="self-center my-[3rem]">
                        <img src={path1} alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                    </div>
                </div>
                <p className="caption cap-top">{cap1}</p>
            </div>
            <div>
                <div className="img-bg work-add-img-cont">
                    <div className="self-center my-[3rem]">
                        <img src={path2} alt="" className="w-[30vw] min-w-[18rem] subtle-shadow" />
                    </div>
                </div>
                <p className="caption cap-top">{cap2}</p>
            </div>
        </div>
    );
}
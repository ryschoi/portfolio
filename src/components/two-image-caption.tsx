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

        // <div className="flex flex-wrap gap-[0.5rem]">
        //     <div className="flex flex-col w-full max-w-[655px]">
        //         <div className="img-bg round flex place-content-center w-full max-w-[655px]">
        //             <div className="self-center my-[4vw]">
        //                 <img src={path1} alt="" className="w-[24vw] min-w-[332px] subtle-shadow" />
        //             </div>
        //         </div>
        //         <p className="caption cap-top">{cap1}</p>
        //     </div>
        //     <div className="flex flex-col w-full max-w-[655px]">
        //         <div className="img-bg round flex place-content-center w-full max-w-[655px]">
        //             <div className="self-center my-[4vw]">
        //                 <img src={path2} alt="" className="w-[24vw] min-w-[332px] subtle-shadow" />
        //             </div>
        //         </div>
        //         <p className="caption cap-top">{cap2}</p>
        //     </div>
        // </div>
    );
}
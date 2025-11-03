import "./background.css";

export default function Background() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[4rem] w-(--mob-page-w) max-w-[41rem]">
                <div className="flex flex-col gap-[1.25rem]">
                    <button className="plain-tag self-center">Work background & philosophy</button>
                    <h1 className="text-center text-[2.5rem] leading-[3rem] w-9/10 self-center">From coding to designing, always thinking one level deeper.</h1>
                    <p className="gray text-center">I use my technical skills and design thinking to create meaningful and useful products, but am a thinker at the core and always aim to understand how things work.</p>

                    {/* <div className="flex flex-row">
                        <span className="mr-[0.5rem] mt-[0.2rem]">✦</span>
                        <div>
                            <h3 className="mb-[0.5rem]">Work background & philosophy</h3>
                            <p className="gray">I use my technical skills and design thinking to create meaningful and useful products, but am a thinker at the core and always aim to understand how things work.</p>
                        </div>
                    </div> */}
                </div>

                {/* CODING */}
                <div className="thing">
                    <img src="/images/code_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3 className="tracking-[-0.25px]">Coding as a tool</h3>
                    <p className="">When I took my first coding class in middle school, a summer web development bootcamp, I fell in love with the freedom to code and create whatever I wanted, but soon realized that with that freedom came many decisions surrounding usability and intent. This is when I discovered the importance of design.</p>
                </div>

                {/* DESIGN */}
                <div className="thing">
                    <img src="/images/design_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3 className="tracking-[-0.25px]">Design as a framework</h3>
                    <p>If I wanted to create the greatest product to exist, I would need to know what would make such a product so great. To me, design is a framework for how to create. It teaches you how to make decisions and to think strategically so you can find solutions that fit business, user behavior, and aesthetic constraints. <br /><br />
                        With the practice of many projects, I’ve mastered the ability to successfully create without compromising any constraints. This means that functionality and user experience are always of utmost priority, above aesthetics, and as far as other constraints permit.
                    </p>
                </div>

                {/* DATA */}
                <div className="thing">
                    <img src="/images/data_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3 className="tracking-[-0.25px]">Data</h3>
                    <p>Today, there is no shortage of data. I’m excited by how much information we have access to, and how we can make informed and intentional decisions from it.</p>
                </div>
            </div>
        </div>
    );
}

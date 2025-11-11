import "./background.css";

export default function Background() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[4rem] w-slim">
                <div className="flex flex-col gap-[1.25rem]">
                    <button className="plain-tag self-center subtle-shadow">Work background & philosophy</button>
                    <h1 className="text-center text-[2.5rem] leading-[3rem] w-9/10 self-center">Highly intentional and thoughtful about all the details</h1>
                    <p className="gray text-center">The details make the design. I use my analytical skills and sensitivity to usability in human-computer interactions to create meaningful and useful products. However, at the core, I am just a thinker and am always trying to understand how things work.</p>
                </div>

                {/* CODING */}
                <div className="thing">
                    <img src="/images/code_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Coding as a tool</h3>
                    <p className="">When I took my first coding class in middle school, a summer web development bootcamp, I fell in love with the freedom to code and create whatever I wanted, but soon realized that with that freedom came many decisions surrounding usability and intent. This is when I discovered the importance of design.</p>
                </div>

                {/* DESIGN */}
                <div className="thing">
                    <img src="/images/design_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Design as a framework</h3>
                    <p>If I wanted to create the greatest product to exist, I would need to know what would make such a product so great. To me, design is a framework for how to create. It teaches you how to make decisions and to think strategically so you can find solutions that fit business, user behavior, and aesthetic constraints. <br /><br />
                        With the practice of many projects, I’ve mastered the ability to successfully create without compromising any constraints. <span className="font-[500]">This means that functionality and user experience are always of utmost priority, above aesthetics, and as far as other constraints permit.</span>
                    </p>
                </div>

                {/* DATA */}
                <div className="thing">
                    <img src="/images/data_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Data</h3>
                    <p>Today, there is no shortage of data. I’m excited by how much information we have access to, and how we can make informed and intentional decisions from it.</p>
                </div>
            </div>
        </div>
    );
}

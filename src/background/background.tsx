import "./background.css";

export default function Background() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[2.5rem] w-(--mob-page-w) max-w-[41rem]">
                <hr />
                <div>
                    <p className="caption mb-[0.5rem]">Work background & philosophy</p>
                    <p>I use use my technical skills and design thinking to create meaningful and useful products, but am a thinker at the core and always aim to understand how things work.</p>
                </div>

                {/* CODING */}
                <div className="flex flex-col gap-[0.5rem]">
                    <p className="caption gray italic">[Coding as a tool]</p>
                    <p>When I took my first coding class in middle school, a summer web development bootcamp, I fell in love with the freedom to code and create whatever I wanted, but soon realized that with that freedom came many decisions surrounding usability and intent. This is when I discovered the importance of design.</p>
                </div>

                {/* DESIGN */}
                <div className="flex flex-col gap-[0.5rem]">
                    <p className="caption gray italic">[Design as a framework]</p>
                    <p>If I wanted to create the greatest product to exist, I would need to know what would make such a product so great. To me, design is a framework for how to create. It teaches you how to make decisions and to think strategically so you can find solutions that fit business, user behavior, and aesthetic constraints. <br /><br />
                    With the practice of many projects, I’ve mastered the ability to successfully create without compromising any constraints. This means that functionality and user experience are always of utmost priority, above aesthetics, and as far as other constraints permit.
                    </p>
                </div>

                {/* DATA */}
                <div className="flex flex-col gap-[0.5rem]">
                    <p className="caption grayy italic">[Data]</p>
                    <p>Today, there is no shortage of data. I’m excited by how much information we have access to, and how we can make informed and intentional decisions from it.</p>
                </div>
            </div>
        </div>
    );
}

import Pill from "./components/pill";

export default function Background() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[4rem] w-slim">
                <div className="flex flex-col gap-[1.25rem] items-center">
                    <Pill hover={false} clicked={false} text="Work background & philosophy" />
                    <h1 className="text-center callout w-9.5/10 self-center serif">Highly detail-oriented and intentional from concept to execution</h1>
                    <p className="gray text-center">I use my analytical skills and sensitivity to usability in human-computer interactions to create meaningful and useful products. However, at the core, I am just a thinker and am always trying to understand how things work.</p>
                </div>
                {/* detail-oriented intentional thorough precise full-picture */}

                {/* CODING */}
                <div className="thing">
                    <img src="/images/icons/code_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Coding as a tool</h3>
                    <p className="">When I took my first coding class in middle school, a summer web development bootcamp, I fell in love with the freedom to code whatever I wanted, but quickly realized that freedom came with many decisions surrounding usability and intent: What exactly was I to code?. This is when I discovered the importance of design.</p>
                </div>

                {/* DESIGN */}
                <div className="thing">
                    <img src="/images/icons/design_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Design as a framework</h3>
                    <p>To me, design is a framework for how to create. It teaches you to base your decisions on research findings and proven methods so you can find effective solutions that fit business, user behavior, and aesthetic constraints.<br /><br />
                        The way I have grown most as a UX designer is just by being a little more attentive to the online platforms I interact with. <span className="italic">How did I know to look there for that button? Why might the designers have decided to use that specific input type? What microinteractions here are smoothening out the experience?</span> These kinds of questions and breaking down how my favorite products are designed help me move my designs from static prototypes to products ready to be used and shipped.
                    </p>
                </div>

                {/* DATA */}
                <div className="thing">
                    <img src="/images/icons/data_icon.png" className="w-[4rem] mb-[0.75rem] aspect-square" />
                    <h3>Data</h3>
                    <p>Not only for UX research, but for all disciplines, data is a powerful key to uncovering patterns and themes. As a designer, whenever possible, I incorporate collecting and analyzing data into my work process to make more informed and intetional design choices.</p>
                </div>
            </div>
        </div>
    );
}

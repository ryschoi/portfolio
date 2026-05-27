import Pill from "./components/pill";

export default function Background() {
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col gap-[4rem] w-slim">
                <div className="flex flex-col gap-[1rem] items-center">
                    <Pill hover={false} clicked={false} text="Work background / philosophy" />
                    <h1 className="text-center callout w-9.5/10 self-center serif">My work journey and approach</h1>
                </div>

                {/* CODING */}
                <div className="thing">
                    <img src="/images/icons/code_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
                    <h3 className="serif font-[700]">[2018] Learned to code</h3>
                    <p className="">I first learned to code in middle school, at a summer web development bootcamp. I fell in love with the freedom to code whatever I wanted, but quickly realized that freedom came with many decisions surrounding usability and intent: <span className="italic">What exactly was I to code?</span> This is when I discovered the importance of design.</p>
                </div>

                {/* DESIGN */}
                <div className="thing">
                    <img src="/images/icons/shapes_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
                    <h3 className="serif font-[700]">[2021] Design ≠ art ??</h3>
                    <p>In junior year of high school, I went into my first graphic design class thinking that design was just about making this look aesthetic. That understanding was quickly shaken when I was continually challenged to think about how other people might interpret my designs, and if they clearly communicated the intended message. This kickstarted my practice of being intentional with each design detail I made.</p>
                </div>

                {/* DATA */}
                <div className="thing">
                    <img src="/images/icons/design_icon.png" className="w-[4rem] mb-[1rem] aspect-square" />
                    <h3 className="serif font-[700]">[2023] Designing experiences</h3>
                    <p>In college, I started UI/UX design, expanding my focus from static visual
                        communication to interactive digital experiences.
                        I enjoy designing digital products because of the challenge of 
                        finding solutions that balance the many constraints: business goals, 
                        user needs, technical limitations, aesthetics, time, etc. It keeps things exciting!
                        <br /><br />
                        <span className="caption gray">Key aspects of my design approach:</span>
                        <ul className="mt-[0.5rem]">
                            <li>Being <span className="bold">curious and asking lots of questions</span> (about the problem, about the visual language, and about the products that I use and think work really well, etc.). <span className="italic">
                                What might the user be feeling when first opening this tool? Which microinteractions are
                                making the experience feel more seamless?</span></li>
                            <li><span className="bold">Sorting through vague problem spaces</span> and <span className="bold">using research</span> to hone in on concrete and effective solutions</li>
                            <li>Paying <span className="bold">close attention to every detail</span> for visual craft and a seamless user experience</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

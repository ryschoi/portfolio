import "./philosophy.css";

export default function Philosophy() {
    return (
        <div className="flex flex-col place-content-center">
            {/* <h1>
                My Work Background & Philosophy
            </h1> */}


            <div className="container w-2/3 self-center">
                <div className="timeline">
                    <div className="timeline-section">
                        <div className="box img-bg rounded">
                            <h3 className="">Coding as a tool</h3><br />
                            When I took my first coding class in middle school, a summer web dev bootcamp, I fell in love with the freedom to code and create whatever I wanted, but soon realized that with that freedom came many decisions surrounding usability, _____________, and intent. This is when I discovered the importance of design.
                        </div>
                        {/* <div className="row">
                            <div className="col-sm-4">
                                <div className="timeline-box">
                                    <div className="box-title">
                                        <i className="fa fa-asterisk text-success" aria-hidden="true"></i> Job Created
                                    </div>
                                    <div className="box-content">
                                        When I took my first coding class in middle school, a summer web dev bootcamp, I fell in love with the freedom to code and create whatever I wanted, but soon realized that with that freedom came many decisions surrounding usability, _____________, and intent. This is when I discovered the importance of design.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
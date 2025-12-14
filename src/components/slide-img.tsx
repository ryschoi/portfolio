export default function SlideImg({ src, caption }: { src: string, caption: string } ) {
    return (
        <div className="flex flex-col">
            <img src={src} alt="" className="slide-img" />
            <p className="caption cap-top">{caption}</p>
        </div>
    );
}
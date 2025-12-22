type inputs = {
  src: string;
  caption?: string;
  vert: boolean;
}
export default function SlideImg({ src, caption, vert }: inputs) {
  return (
    <div className="slide">
      <img src={src} alt=""
        className={`
        ${vert ? "vert-slide-img" : "slide-img"} 
        ${src === "images/work/alihacks/sp6.png" ? " mr-[2.5rem]" : "" }`} />
      {caption && (
        < p className="caption cap-top">{caption}</p>
      )}
    </div >
  );
}
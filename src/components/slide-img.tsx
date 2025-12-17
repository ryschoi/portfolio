export default function SlideImg({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="slide">
      <img src={src} alt="" className="slide-img" />
      <p className="caption cap-top">{caption}</p>
    </div>
  );
}
export default function Tag({ text, hover, clicked }: { text: string, hover: boolean, clicked: boolean }) {
    const basePadding = "py-[6px] px-[16px]";
    const style = clicked
        ? "tag-clicked"
        : hover
            ? "tag"
            : "tag-no-hover";

    return (
        <button className={`${style} ${basePadding}`}>{text}</button>
    );
}
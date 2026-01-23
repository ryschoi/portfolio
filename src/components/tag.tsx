type TagProps = {
  text?: string;
  hover: boolean;
  clicked: boolean;
  children?: React.ReactNode;
};

export default function Tag({ text, hover, clicked, children }: TagProps) {
    const basePadding = "py-[6px] px-[16px]";
    const style = clicked
        ? "tag-clicked"
        : hover
            ? "tag"
            : "tag-no-hover";

    return (
        <button className={`${style} ${basePadding} w-fit`}>{text || children}</button>
    );
}
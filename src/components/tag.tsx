export default function Tag({ text, hover }: { text: string, hover: boolean }) {
    return (
        <button className={
            hover
                ? "tag py-[6px] px-[16px] rounded-[0.5rem]"
                : "tag-no-hover py-[6px] px-[16px] rounded-[0.5rem]"}>{text}</button>
    );
}
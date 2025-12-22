export default function TagCursor({ text, x, y, visible }: { text: string, x: number, y: number, visible: boolean}) {
    return (
        <button className="green-tag self-center subtle-shadow">{text}</button>
    );
}
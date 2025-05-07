type input = {
    name: string;
}

export default function Tag({ name }: input) {
    <p className="tag py-[6px] px-[16px]">{name}</p>
}
// Horizontal progress indicator for the Background cards. Modeled on
// FloatingNav, but controlled: the active index and click handler come from the
// parent so it stays in sync with the horizontal/vertical card scroll.
export default function CardNav({
    labels,
    active,
    onSelect,
    visible = true,
}: {
    labels: string[];
    active: number;
    onSelect: (i: number) => void;
    visible?: boolean;
}) {
    return (
        <div className={`card-nav group ${visible ? "" : "is-hidden"}`}>
            {labels.map((label, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => onSelect(i)}
                    aria-label={label}
                    aria-current={i === active}
                    className={`nav-dot ${i === active ? "active" : ""}`}
                >
                    <span className="dot" />
                    <span className="label caption">{label}</span>
                </button>
            ))}
        </div>
    );
}

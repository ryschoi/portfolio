// Horizontal progress indicator for the Background cards. Modeled on
// FloatingNav, but controlled: the active index and click handler come from the
// parent so it stays in sync with the horizontal/vertical card scroll.
export default function CardNav({
    labels,
    active,
    onSelect,
    visible = true,
    inline = false,
    showLabels = true,
}: {
    labels: string[];
    active: number;
    onSelect: (i: number) => void;
    visible?: boolean;
    // Renders in flow instead of fixed to the viewport bottom — for embedding
    // inside page content (e.g. a nested card carousel) rather than as a
    // page-wide floating footer nav. Note: this is a data attribute rather than
    // a class so it can't collide with Tailwind's own `.inline` utility, which
    // (being in the utilities layer) would silently win over `.card-nav`'s
    // `display: flex` and break the row layout.
    inline?: boolean;
    // Hover tooltip naming each dot's card — off for carousels where the dots
    // are just a plain step indicator.
    showLabels?: boolean;
}) {
    return (
        <div
            className={`card-nav group ${visible ? "" : "is-hidden"}`}
            data-inline={inline || undefined}
        >
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
                    {showLabels && <span className="label caption">{label}</span>}
                </button>
            ))}
        </div>
    );
}

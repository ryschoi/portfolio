// Pause/play button for a crossfade box, pinned to its bottom-right corner. The box
// gets the "crossfade-paused" class while paused (see projects.css).
export default function CrossfadePauseButton({
  paused,
  onToggle,
}: {
  paused: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "Play" : "Pause"}
      aria-pressed={paused}
      className="crossfade-toggle absolute right-[0.75rem] bottom-[0.6rem] md:right-[1rem] md:bottom-[0.75rem]"
    >
      {paused ? (
        <svg
          viewBox="0 0 16 16"
          width="15"
          height="15"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 2.5v11l9.5-5.5z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 16 16"
          width="15"
          height="15"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="3.5" y="2.5" width="3" height="11" rx="0.75" />
          <rect x="9.5" y="2.5" width="3" height="11" rx="0.75" />
        </svg>
      )}
    </button>
  );
}

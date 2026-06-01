/**
 * CodeSnippet
 * Fake terminal window with filename and code block.
 */

export default function CodeSnippet({ filename, code }) {
  return (
    <div
      className="
        bg-card
        border border-border
        rounded-md
        overflow-hidden
        w-full
      "
    >
      {/* Header */}
      <div
        className="
          flex items-center
          gap-2
          px-4 py-2
          bg-black/30
          border-b border-border
        "
      >
        <span className="w-2 h-2 rounded-full bg-faint" />
        <span className="w-2 h-2 rounded-full bg-faint" />
        <span className="w-2 h-2 rounded-full bg-faint" />

        <span
          className="
            ml-2
            text-[11px]
            text-muted
            tracking-wide
            truncate
          "
        >
          {filename}
        </span>
      </div>

      {/* Code */}
      <pre
        className="
          p-4
          text-xs
          md:text-sm
          leading-7
          text-muted
          overflow-x-auto
          whitespace-pre
          font-mono
        "
      >
        {code}
      </pre>
    </div>
  );
}
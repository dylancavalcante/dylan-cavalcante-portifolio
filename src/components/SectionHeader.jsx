/**
 * SectionHeader
 * Section title with index number and subtitle.
 */

export default function SectionHeader({ num, title, sub }) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-baseline
        gap-2
        md:gap-4
        mb-9
        pb-4
        border-b border-border
      "
    >
      <span
        className="
          text-green
          text-xs
          tracking-[2px]
          opacity-70
          font-mono
        "
      >
        {num} /
      </span>

      <h2
        className="
          text-xl
          md:text-2xl
          font-semibold
          text-text
          font-mono
          m-0
        "
      >
        {title}
      </h2>

      <span
        className="
          text-xs
          text-faint
          tracking-wide
          md:ml-1
        "
      >
        {sub}
      </span>
    </div>
  );
}
/**
 * ProjectCard
 * Accordion card for portfolio projects.
 */

export default function ProjectCard({ project, open, onToggle }) {
  const { id, name, stack, status, desc, highlight, repo } = project;

  const statusClass =
    status === "deployed"
      ? "bg-green/10 text-green border border-green/20"
      : status === "wip"
      ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
      : "bg-blue-500/10 text-blue-400 border border-blue-500/20";

  return (
    <div
      onClick={onToggle}
      className={`
        bg-card
        border
        rounded-md
        overflow-hidden
        cursor-pointer
        transition-all
        duration-200
        hover:border-zinc-600
        ${
          open
            ? "border-zinc-600"
            : "border-border"
        }
      `}
    >
      {/* Header */}
      <div
        className="
          flex flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          px-5 py-5
        "
      >
        {/* Left */}
        <div className="flex gap-4">
          <span
            className="
              text-[11px]
              text-faint
              font-mono
              shrink-0
              mt-1
            "
          >
            {id}
          </span>

          <div>
            <div
              className="
                text-text
                font-medium
                text-sm
                md:text-base
              "
            >
              {name}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-[10px]
                    px-2 py-1
                    rounded
                    border border-border
                    bg-black/20
                    text-muted
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            flex
            items-center
            gap-3
            md:ml-4
          "
        >
          <span
            className={`
              text-[10px]
              px-3 py-1
              rounded
              tracking-wide
              whitespace-nowrap
              ${statusClass}
            `}
          >
            {status}
          </span>

          <span className="text-faint text-xs">
            {open ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div
          className="
            border-t border-border
            px-5 pb-5
            md:pl-14
          "
        >
          <p
            className="
              text-muted
              text-sm
              leading-7
              mt-4
              mb-4
            "
          >
            {desc}
          </p>

          <div
            className="
              flex
              items-start
              gap-3
              p-3
              rounded
              mb-4
              bg-green/5
              border border-green/10
            "
          >
            <span className="text-green text-xs mt-1">
              ◆
            </span>

            <span
              className="
                text-green
                text-xs
                leading-6
              "
            >
              {highlight}
            </span>
          </div>

          <div>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                inline-flex
                items-center
                px-4 py-2
                text-xs
                rounded
                border border-border
                text-muted
                hover:text-text
                hover:border-zinc-600
                transition
              "
            >
              ver código →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
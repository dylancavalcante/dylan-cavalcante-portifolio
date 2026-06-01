import { STACK } from "../assets/data";
import SectionHeader from "../components/SectionHeader";

/**
 * StackPage
 * Displays the tech stack organized by category.
 * Ends with a terminal-style philosophy note.
 */
export default function StackPage() {
  return (
    <section className="w-full">
      <SectionHeader
        num="02"
        title="Stack atual"
        sub="o que eu uso de verdade no dia-a-dia:"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STACK.map((cat) => (
          <div
            key={cat.cat}
            className="
              bg-[#111827]
              border border-[#1f2937]
              rounded-md
              p-5
            "
          >
            <div
              className="
                text-green
                text-xs
                tracking-[1.5px]
                mb-4
                font-mono
                uppercase
              "
            >
              {cat.cat}
            </div>

            <div className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    font-mono
                  "
                >
                  <span className="text-green text-[8px]">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="
          rounded-md
          border border-[#1f2937]
          bg-[#0f172a]
          p-4
          text-sm
          text-gray-400
          font-mono
          leading-relaxed
        "
      >
        <span className="text-green-400">$ </span>
        Prefiro entender os fundamentos do que acumular frameworks.
        Cada item aqui foi usado em projeto real!
      </div>
    </section>
  );
}
import { CURRICULUM } from "../assets/data";
import SectionHeader from "../components/SectionHeader";

export default function CurriculumPage() {
  return (
    <section className="w-full">
      <SectionHeader
        num="03"
        title="Currículo"
        sub="experiência, projetos e formação."
      />

      <div className="space-y-10">
        {CURRICULUM.map((section) => (
          <div key={section.section}>
            <h3
              className="
                text-green
                text-sm
                uppercase
                tracking-[3px]
                mb-4
                font-mono
              "
            >
              {section.section}
            </h3>

            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="
                    bg-card
                    border border-border
                    rounded-lg
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:justify-between
                      gap-2
                    "
                  >
                    <h4 className="text-text font-semibold">
                      {item.title}
                    </h4>

                    <span
                      className="
                        text-xs
                        text-green
                        font-mono
                      "
                    >
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <p
                      className="
                        mt-3
                        text-sm
                        text-muted
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { useState } from "react";
import { PROJECTS } from "../assets/data";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

/**
 * ProjectsPage
 * Lista de projetos em formato accordion.
 */
export default function ProjectsPage() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-8 md:py-12">
      <SectionHeader
        num="01"
        title="Projetos"
        sub="sistemas públicos que eu construí:"
      />

      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            open={expanded === project.id}
            onToggle={() => handleToggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
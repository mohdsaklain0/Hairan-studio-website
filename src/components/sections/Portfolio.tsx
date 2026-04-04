import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Selected Work"
          subtitle="Campaigns that turned heads"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.client}
              client={project.client}
              description={project.description}
              media={project.media}
              image={project.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

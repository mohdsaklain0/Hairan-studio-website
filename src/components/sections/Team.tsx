import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { TEAM } from "@/lib/constants";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-4 sm:px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="The Minds Behind Hairan" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {TEAM.map((member, i) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

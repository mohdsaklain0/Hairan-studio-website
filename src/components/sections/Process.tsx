import SectionHeading from "@/components/ui/SectionHeading";
import TimelineStep from "@/components/ui/TimelineStep";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="How We Work"
          subtitle="From brief to brilliance in 4 steps"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <TimelineStep
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              index={i}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

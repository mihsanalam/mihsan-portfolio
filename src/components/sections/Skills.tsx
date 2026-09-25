import SkillBadge from "@/components/ui/SkillBadge";
import Reveal from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

const coreStack = [
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "React", icon: "react", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Frontend" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
  { name: "MongoDB", icon: "mongodb", category: "Database" },
  { name: "Tailwind CSS", icon: "tailwind", category: "UI Frameworks" },
];

/*
 * Server Component. Every badge (and the whole react-icons/si brand icon set)
 * is rendered to HTML on the server — none of it is shipped to the browser or
 * hydrated. `<Reveal>` is the single small client island that owns the scroll
 * animations, instead of ~45 individual framer-motion nodes.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-surface/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            <span className="text-accent mr-3">/</span>skills
          </h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </Reveal>

        {/* ── Core Stack ── */}
        <Reveal className="mb-14" duration={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Core Stack
            </span>
            <div className="flex-1 h-px bg-accent/20" />
            <span className="text-xs text-text-secondary font-mono">Primary expertise</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {coreStack.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/25 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(123,111,232,0.18)] transition-all duration-300 cursor-default"
              >
                <SkillBadge skill={skill} coreMode />
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Full Toolkit ── */}
        <Reveal duration={0.4} delay={0.15}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
              Full Toolkit
            </span>
            <div className="flex-1 h-px bg-border/60" />
            <span className="text-xs text-text-secondary font-mono opacity-60">All technologies</span>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <Reveal key={category.name} duration={0.35} delay={catIndex * 0.07} y={15}>
                <h3 className="text-[11px] font-semibold text-text-secondary/70 uppercase tracking-widest mb-3 pl-1">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} compact />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

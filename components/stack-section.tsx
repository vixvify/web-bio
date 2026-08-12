import { backend, frontend, tools } from "@/data/portfolio";
import { SkillGroup } from "./skill-group";

export function StackSection() {
  return (
    <section id="stack" className="section-block animate-fade-up delay-500">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>02</span> / toolkit</p>
          <h2>Built with intent.</h2>
        </div>
        <p className="section-note">A practical stack for shipping<br className="hidden sm:block" /> from first sketch to production.</p>
      </div>
      <div className="stack-grid">
        <div className="stack-column pb-7 sm:pb-0 sm:pr-8">
          <SkillGroup title="Frontend" items={frontend} />
        </div>
        <div className="stack-column py-7 sm:px-8 sm:py-0">
          <SkillGroup title="Backend" items={backend} />
        </div>
        <div className="stack-column pt-7 sm:pl-8 sm:pt-0">
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}

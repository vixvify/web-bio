import { contacts } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section animate-fade-up delay-700">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="shrink-0">
          <p className="section-kicker"><span>04</span> / contact</p>
          <h2 className="contact-title">Have a good<br /><em>idea?</em></h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">I&apos;m always up for interesting problems, thoughtful collaborations, and making the internet a little more useful.</p>
        </div>

        <div className="flex w-full flex-col gap-1 sm:max-w-md">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-link group flex items-center justify-between border-b border-white/10 py-4 last:border-none"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">{contact.label}</span>
              <span className="flex items-center gap-2 text-sm font-medium text-white/80">
                <span className="max-w-[180px] truncate sm:max-w-none">{contact.value}</span>
                <span className="text-[#c8ff6a]/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-24">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">vixvify</span>
        <span className="text-[10px] text-white/20">© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}

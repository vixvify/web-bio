const ITEMS = [
  "Full Stack Developer",
  "Applied Computer Science",
  "ACS @ KMUTT",
  "Next.js",
  "Golang",
  "Spring Boot",
  "React",
  "Docker",
  "Elysia",
  "NestJS",
  "Vixvify",
];

const SEP = <span className="mx-5 text-[#c8ff6a]/50">✦</span>;

export function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrap overflow-hidden border-y border-[#c8ff6a]/20 py-3">
      <div className="marquee-track flex w-max">
        {repeated.map((item, i) => (
          <span key={i} className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
            {item}
            {SEP}
          </span>
        ))}
      </div>
    </div>
  );
}

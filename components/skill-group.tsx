type SkillGroupProps = {
  title: string;
  items: {
    name: string;
    icon?: string;
    iconUrl?: string;
    color: string;
  }[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="stack-group">
      <div className="stack-group-head">
        <p className="stack-group-title">{title}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-1 sm:gap-y-0">
        {items.map((item) => (
          <div key={item.name} className="skill-item group flex items-center gap-3 py-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#c8ff6a]/40">
              {item.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.iconUrl} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              ) : (
                <span
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  style={{
                    background: item.color,
                    mask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                    WebkitMask: `url(https://cdn.simpleicons.org/${item.icon}) center / contain no-repeat`,
                  }}
                />
              )}
            </span>
            <span className="text-sm text-white/60 transition-colors group-hover:text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

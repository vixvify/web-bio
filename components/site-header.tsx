export function SiteHeader() {
  return (
    <header className="site-header animate-fade-in delay-0">
      <a href="#top" className="brand-mark">
        <span className="brand-symbol">V</span>
        <span>vixvify</span>
      </a>
      <nav
        className="hidden items-center gap-7 sm:flex"
        aria-label="Main navigation"
      >
        {[
          { label: "Stack", href: "#stack" },
          { label: "Work", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-status">
        <span className="status-dot" />
        <span>Open to work</span>
      </div>
    </header>
  );
}

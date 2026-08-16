"use client";

import { ScrambleText } from "@/components/scramble-text";

export function HeroSection() {
  return (
    <section id="top" className="hero-section" style={{ paddingTop: 0 }}>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow animate-fade-up delay-100">
            I turn complex ideas into{" "}<br className="hidden sm:block" />
            <em>clear digital experiences.</em>
          </p>
          <h1 className="hero-title animate-fade-up delay-200">
            <ScrambleText text="Vixvify" delay={1500} />
            <span className="hero-title-dot">.</span>
          </h1>

          <div className="hero-footer animate-fade-up delay-400">
            <p className="hero-description">
              Full Stack Developer and Applied Computer Science student at KMUTT.
              Building useful things with sharp edges and a human feel.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:asnaweeezor@gmail.com" className="button button-primary">
                Start a conversation <span>&rarr;</span>
              </a>
              <a href="https://github.com/vixvify" target="_blank" rel="noreferrer" className="button button-ghost">
                GitHub <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

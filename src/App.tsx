import { motion } from 'framer-motion';
import Globe from './components/Globe';
import Typewriter from './components/Typewriter';
import { Chip, Reveal, Section } from './components/Section';
import { about, certifications, experience, leadership, profile, projects, skills } from './data';

const nav = [['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* nav */}
      <header className="fixed inset-x-0 top-0 z-30">
        <div className="glass mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5">
          <a href="#top" className="font-mono text-sm text-gold">jiya<span className="text-muted">::</span>siwach</a>
          <nav className="hidden gap-6 text-sm text-muted sm:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-white">{l}</a>)}
          </nav>
          <a href={profile.resume} download className="rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-bg hover:bg-yellow-300">Résumé ↓</a>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <Globe />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0e0e10_85%)]" />
        <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="font-mono text-sm text-gold">Hello, I'm</div>
            <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">{profile.name}</h1>
            <div className="mt-4 h-10 text-2xl font-semibold sm:text-3xl"><Typewriter words={profile.roles} className="gold-text" /></div>
            <p className="mt-5 max-w-xl text-lg text-muted">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-gold px-5 py-2.5 font-semibold text-bg hover:bg-yellow-300">See the work</a>
              <a href={projects[0].live} target="_blank" rel="noreferrer" className="rounded-md border border-gold-dim px-5 py-2.5 font-semibold text-gold hover:bg-gold/10">Try CyberSec RAG Copilot ↗</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-md border border-line px-5 py-2.5 text-text hover:border-gold-dim">GitHub</a>
            </div>
            <div className="mt-10 flex gap-8 font-mono text-xs text-muted">
              <span><span className="text-gold">100%</span> Hit@5</span><span><span className="text-gold">5/5</span> attacks blocked</span><span><span className="text-gold">948</span> chunks indexed</span>
            </div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted">↓</a>
      </section>

      {/* about */}
      <Section id="about" kicker="01" title="About">
        <div className="grid gap-6 md:grid-cols-[1fr_280px]">
          <div className="space-y-4 text-lg leading-relaxed text-text/90">{about.map((p, i) => <Reveal key={i} delay={i * 0.1}><p>{p}</p></Reveal>)}</div>
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-5 font-mono text-sm">
              <div className="text-gold">// quick facts</div>
              <div className="mt-3 space-y-2 text-muted">
                <div>role: <span className="text-text">AI Engineer @ Magppie</span></div>
                <div>degree: <span className="text-text">B.Tech CSE (Cyber Security)</span></div>
                <div>base: <span className="text-text">{profile.location}</span></div>
                <div>open to: <span className="text-text">AI / ML / GenAI roles</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* projects */}
      <Section id="projects" kicker="02" title="Projects">
        <div className="space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="glass overflow-hidden rounded-2xl">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                      <p className="mt-1 text-muted">{p.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-bg">Live demo ↗</a>}
                      {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="rounded-md border border-gold-dim px-3 py-1.5 text-sm text-gold">Code</a>}
                    </div>
                  </div>
                  {p.metrics.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {p.metrics.map(([v, l]) => (
                        <div key={l} className="rounded-xl border border-line bg-bg/60 p-3"><div className="font-mono text-2xl text-gold">{v}</div><div className="text-xs uppercase tracking-wider text-muted">{l}</div></div>
                      ))}
                    </div>
                  )}
                  <ul className="mt-5 space-y-2 text-text/90">{p.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-gold">▸</span><span>{pt}</span></li>)}</ul>
                  <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                </div>
                {p.embed && p.live && (
                  <div className="border-t border-line">
                    <div className="flex items-center justify-between px-6 py-2 font-mono text-xs text-muted"><span>live · try it here — ask about an ATT&CK technique or click "Try an attack"</span><a href={p.live} target="_blank" rel="noreferrer" className="text-gold">open full ↗</a></div>
                    <iframe title={p.title} src={p.live} loading="lazy" className="h-[560px] w-full bg-bg" />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* experience */}
      <Section id="experience" kicker="03" title="Experience">
        <ol className="relative space-y-8 border-l border-line pl-6">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_#f5c450]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-lg font-bold text-white">{e.role}</h3><span className="font-mono text-xs text-muted">{e.dates}</span></div>
                <div className="text-sm text-gold">{e.org}</div>
                <ul className="mt-2 space-y-1 text-text/85">{e.points.map((pt) => <li key={pt}>— {pt}</li>)}</ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* skills */}
      <Section id="skills" kicker="04" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.06}>
              <div className="glass rounded-2xl p-5"><div className="font-semibold text-white">{group}</div><div className="mt-3 flex flex-wrap gap-2">{items.map((s) => <Chip key={s}>{s}</Chip>)}</div></div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal><div className="glass rounded-2xl p-5"><div className="font-semibold text-white">Certifications</div><ul className="mt-3 space-y-1.5 text-sm text-text/85">{certifications.map((c) => <li key={c}>▸ {c}</li>)}</ul></div></Reveal>
          <Reveal delay={0.1}><div className="glass rounded-2xl p-5"><div className="font-semibold text-white">Leadership</div><ul className="mt-3 space-y-1.5 text-sm text-text/85">{leadership.map((c) => <li key={c}>▸ {c}</li>)}</ul></div></Reveal>
        </div>
      </Section>

      {/* contact */}
      <Section id="contact" kicker="05" title="Let's talk">
        <Reveal>
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-lg text-text/90">Open to AI Engineer, ML Engineer and GenAI/LLM roles — Delhi NCR, hybrid or remote.</p>
            <a href={`mailto:${profile.email}`} className="mt-5 inline-block text-2xl font-bold text-gold hover:underline">{profile.email}</a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-gold-dim px-4 py-2 text-gold hover:bg-gold/10">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-md border border-gold-dim px-4 py-2 text-gold hover:bg-gold/10">GitHub</a>
              <a href={profile.resume} download className="rounded-md bg-gold px-4 py-2 font-semibold text-bg">Download résumé</a>
            </div>
          </div>
        </Reveal>
      </Section>
      <footer className="pb-8 text-center font-mono text-xs text-muted">© {new Date().getFullYear()} Jiya Siwach · built with React, Three.js &amp; Vite</footer>
    </div>
  );
}

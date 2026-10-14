import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        {kicker && <div className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{kicker}</div>}
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-3 h-px w-16 bg-gold" />
      </motion.div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-md border border-gold-dim/60 bg-gold/10 px-2.5 py-1 font-mono text-xs text-gold">{children}</span>;
}

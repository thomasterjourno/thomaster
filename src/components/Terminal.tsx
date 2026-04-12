'use client';

import { motion } from 'framer-motion';

interface TerminalProps {
  title: string;
  lines: { prompt?: string; output?: string }[];
}

export default function Terminal({ title, lines }: TerminalProps) {
  return (
    <motion.div
      className="bg-[var(--bg-tertiary)] rounded-lg overflow-hidden border border-white/5 font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black/30 px-4 py-3 flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27ca40]" />
        <span className="ml-auto text-xs text-[var(--text-muted)]">{title}</span>
      </div>
      <div className="p-4 leading-relaxed">
        {lines.map((line, i) => (
          <p key={i}>
            {line.prompt && <span className="text-[var(--accent)]">{line.prompt} </span>}
            {line.output && <span className="text-[var(--text-secondary)] pl-4">{line.output}</span>}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
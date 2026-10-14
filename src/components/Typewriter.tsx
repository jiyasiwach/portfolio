import { useEffect, useState } from 'react';

/** Cycles through phrases with a type/erase animation. */
export default function Typewriter({ words, className = '' }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = erasing ? 35 : text.length === word.length ? 1600 : 70;
    const t = setTimeout(() => {
      if (!erasing && text.length === word.length) setErasing(true);
      else if (erasing && text.length === 0) { setErasing(false); setI((n) => n + 1); }
      else setText(word.slice(0, text.length + (erasing ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, erasing, i, words]);

  return <span className={`caret ${className}`}>{text}</span>;
}

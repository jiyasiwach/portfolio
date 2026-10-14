/** All portfolio content in one place — edit here, not in components. */
export const profile = {
  name: 'Jiya Siwach',
  roles: ['AI Engineer', 'GenAI & LLM Developer', 'RAG Systems Builder', 'AI for Cybersecurity'],
  tagline: 'I build AI systems that work in production — grounded, guardrailed and measured.',
  location: 'Delhi, India',
  email: 'jiyaswiach1234@gmail.com',
  linkedin: 'https://linkedin.com/in/jiya-siwach-9b5826310',
  github: 'https://github.com/jiyasiwach',
  resume: '/Jiya_Siwach_Resume.pdf',
};

export const about = [
  'AI Engineer at Magppie Wellness Kitchen, where I design and ship Generative AI and ML systems end to end: an AI-automated call system (agentic workflows + voice AI), RAG knowledge flows with guardrails and structured outputs, predictive ML pipelines on industrial data, and the architecture of the company\'s Learning & Development portal.',
  'B.Tech in Computer Science (Cyber Security & Digital Forensics) at Manav Rachna. I care about AI that can be trusted: retrieval you can cite, guardrails you can test, and evals you can show.',
];

export const projects = [
  {
    title: 'CyberSec RAG Copilot',
    subtitle: 'Grounded security Q&A with citations, guardrail and evals',
    live: 'https://cybersec-rag-copilot-tan.vercel.app',
    code: 'https://github.com/jiyasiwach/cybersec-rag-copilot',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'BM25 / RRF', 'LLM via OpenRouter', 'React', 'TypeScript', 'Docker', 'Render', 'Vercel'],
    points: [
      'Answers only from MITRE ATT&CK (706 techniques), OWASP Top 10 and CISA KEV — 948 indexed chunks — and cites the exact source passage for every claim; refuses instead of hallucinating.',
      'Hybrid retrieval: vector search + BM25 fused with Reciprocal Rank Fusion and an exact-ID boost. 100% Hit@5, 1.0 MRR on the test set (0.87 MRR for BM25 alone).',
      'Two-layer prompt-injection guardrail (weighted regex heuristics → LLM classifier), context delimited as data: 5/5 attacks blocked, 0 false positives.',
      'Streaming answers over SSE with latency, token and cost metrics (~3 s, ~$0.001/query); LLM-as-judge evals (faithfulness 1.0, citation accuracy 1.0).',
    ],
    metrics: [['100%', 'Hit@5'], ['1.0', 'MRR'], ['5/5', 'attacks blocked'], ['~$0.001', 'per query']],
    embed: true,
  },
  {
    title: 'AI-Powered Log Anomaly Detection',
    subtitle: 'Real-time log analysis for security threats',
    stack: ['Python', 'Machine Learning', 'Cybersecurity AI'],
    points: ['Parses system logs in real time, detects behavioural deviations and flags security threats with visual alerts.'],
    metrics: [] as [string, string][],
    embed: false,
  },
];

export const experience = [
  { role: 'AI Engineer', org: 'Magppie Wellness Kitchen · Delhi NCR', dates: 'Jun 2026 – Present',
    points: ['AI automated call system — agentic workflows, LLM integration and voice AI — cutting manual calling for the sales team.',
      'RAG knowledge flows with prompt engineering, guardrails and structured outputs for accurate product answers from company data.',
      'Architecture and development of the corporate Learning & Development portal.',
      'Generative-AI applications and predictive ML pipelines on industrial business data.'] },
  { role: 'Data Science & Analyst Intern', org: 'ShadowFox', dates: 'Jul 2025 – Jun 2026',
    points: ['Predictive analytics on engineering datasets (Python, Pandas, Scikit-learn); Exceptional Performance honors.'] },
  { role: 'Intern – Forensic & Cyber Laws', org: 'Delhi Police', dates: 'Jun 2026',
    points: ['Cybersecurity frameworks and digital-forensics workflows; data integrity and digital-evidence protocols.'] },
  { role: 'Full Stack Developer Intern', org: 'TechnoHacks Online', dates: 'Jun – Jul 2025',
    points: ['React.js dashboard on the OpenWeather REST API with optimized real-time rendering.'] },
];

export const skills: [string, string[]][] = [
  ['Generative AI & LLMs', ['RAG', 'Hybrid retrieval', 'Prompt engineering', 'LLM evaluation', 'Guardrails', 'Prompt-injection defense', 'AI agents', 'Tool calling', 'LangChain', 'LangGraph', 'Hugging Face', 'OpenAI API', 'Embeddings']],
  ['Machine Learning & NLP', ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Text classification', 'TF-IDF', 'Feature engineering', 'Anomaly detection']],
  ['Data & Vector Stores', ['Python', 'SQL', 'Pandas', 'NumPy', 'ChromaDB', 'FAISS', 'MongoDB', 'MySQL', 'Oracle']],
  ['Backend & Deployment', ['FastAPI', 'REST / SSE', 'Node.js', 'React', 'TypeScript', 'Docker', 'CI/CD', 'Render', 'Vercel', 'AWS (basics)', 'OCI']],
  ['Security AI', ['MITRE ATT&CK', 'OWASP Top 10', 'CISA KEV', 'Log analysis', 'Threat intelligence', 'Digital forensics', 'VAPT basics']],
];

export const certifications = [
  'Generative AI Landscape — Infosys Springboard (2025)', 'Introduction to Cybersecurity — Cisco Networking Academy (2026)',
  'OCI Application Integration Professional — Oracle (2025)', 'Database Management Systems — Infosys Springboard (2025)',
  'Network Topologies & Technologies — Skillsoft (2025)', 'Product & Brand Management — NPTEL (2025)',
];

export const leadership = [
  'PR & Media Head, MRISA – Manav Rachna InfoSec Army (2024 – present)', 'General Secretary, HackWithIndia Student Chapter',
  'Student Ambassador, SET CSE Specialization, Manav Rachna (2025 – present)', 'Core Organizer, ENIGMA Cybersecurity CTF & Learn IT Tour 2025',
];

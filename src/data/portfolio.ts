export interface AiProject {
  id: 'bludai' | 'ag-mcp-local-llm' | 'mata-mata' | 'face-recog';
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  architectureNotes: string[];
  featured: boolean;
}

export interface StackRow {
  label: string;
  items: string[];
}

export const PROFILE = {
  fullName: 'Hansel Valent Evanthe',
  handle: 'Hansel-vlnt',
  role: 'AI Engineer',
  focus: 'Multi-Agent Systems, Local LLM & Computer Vision',
  institution: 'Universitas Negeri Medan (UNIMED)',
  bio: 'Membangun orkestrasi agen otonom, jembatan protokol inferensi GPU lokal, dan sistem pengenalan biometrik berbasis deep learning.',
  githubUrl: 'https://github.com/Hansel-vlnt',
  portfolioRepoUrl: 'https://github.com/Hansel-vlnt/portofolio-H',
  avatarUrl: 'https://avatars.githubusercontent.com/u/178561939?v=4',
};

export const AI_PROJECTS: AiProject[] = [
  {
    id: 'bludai',
    name: 'Bludai',
    category: 'Multi-Agent Orchestration',
    summary:
      'Sistem alur kerja multi-agen hirarkis berbasis LangGraph yang terhubung secara lokal melalui gateway 9Router.',
    highlights: [
      'Orkestrasi peran supervisor ke agen pekerja dengan evaluasi terukur pada modul evals.',
      'Tersedia dalam antarmuka Terminal CLI maupun Web UI berbasis React.',
    ],
    stack: ['Python', 'LangGraph', '9Router', 'React', 'Astral uv'],
    repoUrl: 'https://github.com/Hansel-vlnt/Bludai',
    architectureNotes: [
      'Supervisor memecah instruksi pengguna berdasarkan definisi peran di .bludai_roles.json.',
      '9Router menyalurkan trafik inferensi lokal antar agen tanpa bergantung pada satu endpoint tunggal.',
      'Rangkaian pengujian otomatis mencatat skor keluaran agen ke eval_results.json.',
    ],
    featured: true,
  },
  {
    id: 'ag-mcp-local-llm',
    name: 'ag-mcp-local-llm',
    category: 'LLM Infrastructure & MCP',
    summary:
      'Jembatan Model Context Protocol (MCP) untuk memindahkan beban analisis kode dan pemindaian file besar ke GPU lokal via Ollama.',
    highlights: [
      'Terhubung langsung ke Antigravity, Claude Desktop, dan Cursor tanpa mengirim kode keluar mesin.',
      'Dibangun di atas standar MCP 2.0+ dan klien asinkron httpx.',
    ],
    stack: ['Python', 'MCP 2.0+', 'Ollama', 'httpx', 'Local GPU'],
    repoUrl: 'https://github.com/Hansel-vlnt/ag-mcp-local-llm',
    architectureNotes: [
      'Mengekspos tool standar MCP untuk analisis berkas lokal, pemeriksaan status model, dan pembuatan kode.',
      'Komunikasi HTTP non-blocking ke instance Ollama lokal untuk memangkas pemakaian kuota cloud.',
      'Dilengkapi unit test terisolasi pada direktori tests.',
    ],
    featured: true,
  },
  {
    id: 'mata-mata',
    name: 'mata-mata',
    category: 'Biometric Deep Learning',
    summary:
      'Sistem pengenalan biometrik iris mata menggunakan ArcFace Metric Learning dan jarak sudut Cosine Similarity.',
    highlights: [
      'Dilengkapi mekanisme Unknown Rejection untuk menolak citra mata yang belum terdaftar.',
    ],
    stack: ['Python', 'Deep Learning', 'ArcFace', 'Metric Learning', 'Cosine Similarity'],
    repoUrl: 'https://github.com/Hansel-vlnt/mata-mata',
    architectureNotes: [
      'Normalisasi area iris mata sebelum ekstraksi vektor fitur berdimensi tetap.',
      'Penalti sudut ArcFace mempertegas batas pemisah antar identitas terdaftar di ruang hipersfer.',
      'Ambang batas Cosine Similarity menyaring percobaan akses dari citra orang asing.',
    ],
    featured: false,
  },
  {
    id: 'face-recog',
    name: 'face-recog-Huggingface',
    category: 'Computer Vision',
    summary:
      'Autentikasi biometrik wajah waktu nyata yang mencakup pendaftaran vektor embedding, verifikasi login, dan pelacakan kamera.',
    highlights: [
      'Pipa utuh dari ekstraksi embedding wajah (/register) hingga pencocokan kamera langsung (/login).',
    ],
    stack: ['HuggingFace', 'Face Embeddings', 'Python', 'WebRTC Camera', 'HTML/JS'],
    repoUrl: 'https://github.com/Hansel-vlnt/face-recog-Huggingface',
    architectureNotes: [
      'Rute /register mengekstrak dan menyimpan representasi vektor wajah pengguna di server.',
      'Rute /login membandingkan tangkapan kamera langsung terhadap basis data embedding.',
      'Pemindaian dan pelacakan posisi wajah berjalan langsung pada antarmuka peramban.',
    ],
    featured: false,
  },
];

export const STACK_ROWS: StackRow[] = [
  {
    label: 'Agents & LLM Runtime',
    items: ['LangGraph', 'Model Context Protocol (MCP)', 'Ollama', '9Router', 'Agent Evals'],
  },
  {
    label: 'Vision & Deep Learning',
    items: ['ArcFace Metric Learning', 'HuggingFace', 'Cosine Similarity', 'Biometric Verification', 'NumPy'],
  },
  {
    label: 'Languages & Tooling',
    items: ['Python', 'Astral uv', 'httpx', 'TypeScript', 'React', 'Astro', 'Git'],
  },
];

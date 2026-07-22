import type { StaticImageData } from "next/image";
import multiAgentImg from "../../images/multi_agent.webp";
import chatbotImg from "../../images/chatbot.png";
import tuningImg from "../../images/tuning.png";
import rocketImg from "../../images/rocket.png";
import restaurantImg from "../../images/restaurant.webp";
import lostInSpaceImg from "../../images/lost_in_space.png";

export type FilterKey = "all" | "ai" | "fullstack" | "video" | "games";
export type ProjectCategory = Exclude<FilterKey, "all">;

export type Project = {
  id: string;
  name: string;
  year: string;
  category: string;
  tagline: string;
  desc: string;
  points: string[];
  stack: string[];
  topStack: string[];
  statusLine: string;
  cats: ProjectCategory[];
  img: StaticImageData | null;
  videoHint?: string;
  url: string;
  isNew?: boolean;
};

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "all" },
  { key: "ai", label: "ai/ml" },
  { key: "fullstack", label: "full-stack" },
  { key: "video", label: "video" },
  { key: "games", label: "games" },
];

export const PROJECTS: Project[] = [
  {
    id: "social-notebook",
    name: "Social Notebook",
    isNew: true,
    year: "2026",
    category: "ai/ml · full-stack",
    tagline:
      "NotebookLM for your social feeds — paste Reels, FB, Insta or YouTube links and chat with them.",
    desc: "Turns short-form social content into an interactive knowledge base. Paste links from Instagram, Facebook or Threads; the app ingests them, runs visual analysis with Gemini's native video understanding, and lets you chat with cited answers grounded in your saved content.",
    points: [
      "Live ingestion via Apify scrapers across 3 platforms",
      "Lazy visual analysis — video understood on demand, not upfront",
      "Cited chat: every answer links back to the source post",
      "Working local MVP, browser-verified end-to-end",
    ],
    stack: [
      "Next.js 16",
      "Tailwind v4",
      "Python 3.12",
      "FastAPI",
      "Gemini 3 Flash",
      "SQLite",
      "Apify",
    ],
    topStack: ["Next.js", "FastAPI", "Gemini"],
    statusLine: "status: working MVP · phases 1–4 done",
    cats: ["ai", "fullstack"],
    img: null,
    videoHint: "/previews/social-notebook.mp4",
    url: "https://github.com/TomHM31",
  },
  {
    id: "youtoshorts",
    name: "YoutoShorts",
    isNew: true,
    year: "2026",
    category: "ai/ml · video",
    tagline:
      "Turns any YouTube video into ranked viral Shorts — clip picking, captions and rendering, fully automated.",
    desc: "An automated video pipeline: drop in a YouTube link and it transcribes, ranks the most viral-worthy moments with an LLM, then renders vertical Shorts with face tracking and karaoke captions. Also generates long-form videos from a topic and researches trending niches.",
    points: [
      "LLM-ranked highlight picking (Claude / GPT / Gemini switchable)",
      "GPU pipeline: faster-whisper (CUDA) + ffmpeg NVENC + MediaPipe face tracking",
      "Trend research via YouTube Data API + TikTok Creative Center",
      "All 3 features verified · 83/83 tests pass",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Gemini 2.5",
      "faster-whisper",
      "ffmpeg",
      "MediaPipe",
      "yt-dlp",
      "Kokoro TTS",
    ],
    topStack: ["Python", "Whisper", "ffmpeg"],
    statusLine: "status: all features working · 83/83 tests",
    cats: ["ai", "video"],
    img: null,
    videoHint: "/previews/youtoshorts.mp4",
    url: "https://github.com/TomHM31",
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Game Generator",
    year: "2025",
    category: "ai/ml · agents",
    tagline:
      "Multi-agent system that synthesizes playable Pacman & Snake games with statistical boards.",
    desc: "Deep learning-based game environment synthesis. A crew of specialized agents collaborates to design, code and validate playable game environments from scratch.",
    points: [
      "Generates complete playable Pacman & Snake games",
      "Agent roles: designer, coder, validator",
      "Statistical board generation",
    ],
    stack: ["Python", "CrewAI", "Gemini"],
    topStack: ["Python", "CrewAI", "Gemini"],
    statusLine: "status: done",
    cats: ["ai"],
    img: multiAgentImg,
    url: "https://github.com/TomHM31/Multi-Agent-Game-Generator",
  },
  {
    id: "ai-chatbox",
    name: "AI Chatbox",
    year: "2025",
    category: "ai/ml · full-stack",
    tagline:
      "Context-aware chatbot powered by Gemini with custom prompt engineering.",
    desc: "The same system running on this site's home page — a context-aware chat experience with custom prompt engineering and natural conversation flow.",
    points: [
      "Context-aware responses",
      "Custom prompt engineering",
      "Production-deployed on this portfolio",
    ],
    stack: ["Next.js", "TypeScript", "Gemini"],
    topStack: ["Next.js", "TypeScript", "Gemini"],
    statusLine: "status: live on this site",
    cats: ["ai", "fullstack"],
    img: chatbotImg,
    url: "https://github.com/TomHM31/AI-Chatbox",
  },
  {
    id: "xdeepfm",
    name: "xDeepFM Replication",
    year: "2025",
    category: "ai/ml · research",
    tagline:
      "Replicated & tuned xDeepFM — 10% faster inference through CIN-layer optimization.",
    desc: "Replication of the xDeepFM recommendation model with hyperparameter tuning experiments — optimizing CIN layers and incorporating dynamic feature selection.",
    points: [
      "10% improvement in inference speed",
      "Dynamic feature selection",
      "Rigorous statistical analysis vs the paper's baseline",
    ],
    stack: ["Python", "PyTorch", "Statistics"],
    topStack: ["Python", "PyTorch"],
    statusLine: "status: done",
    cats: ["ai"],
    img: tuningImg,
    url: "https://github.com/TomHM31/xDeepFM-Replication",
  },
  {
    id: "develop-ml",
    name: "Develop ML Solution",
    year: "2024",
    category: "ai/ml · research",
    tagline:
      "ML pipeline for predictive analytics — competing against published research baselines.",
    desc: "A machine learning pipeline for predictive analytics that competes against a model from a research paper, using ensemble methods and systematic feature elimination.",
    points: [
      "Recursive Feature Elimination + VotingClassifier",
      "RandomizedSearchCV tuning",
      "Benchmarked against a published model",
    ],
    stack: ["Python", "scikit-learn"],
    topStack: ["Python", "scikit-learn"],
    statusLine: "status: done",
    cats: ["ai"],
    img: rocketImg,
    url: "https://github.com/TomHM31/Develop-ML",
  },
  {
    id: "restaurant",
    name: "Restaurant Menu Fullstack",
    year: "2024",
    category: "full-stack",
    tagline:
      "Restaurant management system with real-time ordering and multi-table tracking.",
    desc: "A modern restaurant management system with elegant UI/UX inspired by Michelin-starred establishments — real-time ordering, multi-table management and saved accounts.",
    points: [
      "Multi-table management & order tracking",
      "Saved customer accounts",
      "Full-stack: React front end, Spring + PostgreSQL back end",
    ],
    stack: ["React", "Java Spring", "PostgreSQL"],
    topStack: ["React", "Spring", "PostgreSQL"],
    statusLine: "status: done",
    cats: ["fullstack"],
    img: restaurantImg,
    url: "https://github.com/TomHM31/Restaurant-Menu-FullStack",
  },
  {
    id: "lost-in-space",
    name: "Lost In Space",
    year: "2023",
    category: "games",
    tagline: "2-D space exploration game with real-time physics and infinite worlds.",
    desc: "A 2-D space exploration game featuring infinite exploration, real-time physics with collision detection, and multiple weapon systems and power-ups.",
    points: [
      "Infinite procedural exploration",
      "Real-time physics & collision detection",
      "Multiple weapon systems and power-ups",
    ],
    stack: ["C++"],
    topStack: ["C++"],
    statusLine: "status: done",
    cats: ["games"],
    img: lostInSpaceImg,
    url: "https://github.com/TomHM31/LostinSpace",
  },
];

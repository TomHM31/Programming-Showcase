<div align="center">

# 🚀 Programming Portfolio Showcase

**A modern, interactive web portfolio spanning machine learning, game development, and AI applications.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://programming-showcase-new.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[**🌐 View the Live Site →**](https://programming-showcase-new.vercel.app)

</div>

---

## ✨ Highlights

- ⚡ **Built on Next.js 16 + React 19** with the App Router and Turbopack
- 🤖 **Live AI chat** — integrated with both Google Gemini and Anthropic Claude
- 🎨 **Fully responsive** UI styled with Tailwind CSS and custom Geist fonts
- 📊 **Analytics-ready** via Vercel Analytics
- 🧩 **Six real projects** across games, ML research, and full-stack apps

---

## 🗂️ Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🛸 Lost in Space</h3>
      <img src="app/images/lost_in_space.png" width="100%" alt="Lost in Space" /><br/>
      A 2-D space exploration game with infinite exploration, multiple weapon systems, and power-ups.<br/><br/>
      <b>Stack:</b> C++<br/>
      <a href="https://github.com/TomHM31/LostinSpace">→ View Project</a>
    </td>
    <td width="50%" valign="top">
      <h3>💬 AI Chatbox</h3>
      <img src="app/images/chatbot.png" width="100%" alt="AI Chatbox" /><br/>
      A Gemini-powered chat interface with context-aware responses and custom prompt engineering.<br/><br/>
      <b>Stack:</b> Next.js · TypeScript · Gemini<br/>
      <a href="https://github.com/TomHM31/AI-Chatbox">→ View Project</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🧠 Multi-Agent Game Generator</h3>
      <img src="app/images/multi_agent.webp" width="100%" alt="Multi-Agent Game Generator" /><br/>
      Advanced multi-agent environment generation for automated game creation.<br/><br/>
      <b>Stack:</b> Python · CrewAI · Gemini<br/>
      <a href="https://github.com/TomHM31/Multi-Agent-Game-Generator">→ View Project</a>
    </td>
    <td width="50%" valign="top">
      <h3>🍽️ Restaurant Menu — Full Stack</h3>
      <img src="app/images/restaurant.webp" width="100%" alt="Restaurant Menu Full Stack" /><br/>
      A full-stack restaurant menu application with a relational backend and REST API.<br/><br/>
      <b>Stack:</b> React · Java Spring · PostgreSQL<br/>
      <a href="https://github.com/TomHM31/Restaurant-Menu-FullStack">→ View Project</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>📈 xDeepFM Replication</h3>
      <img src="app/images/tuning.png" width="100%" alt="xDeepFM Replication" /><br/>
      A research-paper replication of xDeepFM for recommender systems, with hyperparameter-tuning experiments.<br/><br/>
      <b>Stack:</b> Python<br/>
      <a href="https://github.com/TomHM31/xDeepFM-Replication">→ View Project</a>
    </td>
    <td width="50%" valign="top">
      <h3>🔬 Develop ML Solution</h3>
      <img src="app/images/coding.png" width="100%" alt="Develop ML Solution" /><br/>
      A deep-learning pipeline covering feature engineering, model training, and optimization.<br/><br/>
      <b>Stack:</b> Python<br/>
      <a href="https://github.com/TomHM31/Develop-ML">→ View Project</a>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

**Framework & Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

**AI & Backend**

![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![Anthropic Claude](https://img.shields.io/badge/Anthropic_Claude-D97757?style=flat-square&logo=anthropic&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel_Analytics-000000?style=flat-square&logo=vercel&logoColor=white)

**Languages across projects**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Java](https://img.shields.io/badge/Java_Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

---

## 📦 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/TomHM31/Programming-Showcase.git
cd Programming-Showcase

# 2. Install dependencies
npm install

# 3. Add environment variables (see below), then run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🔑 Environment Variables

Create a `.env.local` file in the project root:

```bash
# AI API keys (for the chat feature)
GEMINI_API_KEY=your_gemini_key
ANTHROPIC_API_KEY=your_claude_key

# Optional author info (falls back to defaults if omitted)
NEXT_PUBLIC_AUTHOR_NAME=Your Name
NEXT_PUBLIC_AUTHOR_EMAIL=you@example.com
```

---

## 🖥️ Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production server |
| `npm run lint` | Lint the codebase |

---

## 🚀 Deployment

Deployed on **Vercel** with automatic builds on every push to `main`.

🔗 **Live:** [programming-showcase-new.vercel.app](https://programming-showcase-new.vercel.app)

---

## 📫 Contact

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hoangminhkhoi3108@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tom-hoang3108/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TomHM31)

---

## 📝 License

For each replicated or research-based project, please always refer to the original author.

<div align="center">

⭐ *If you like this portfolio, consider giving it a star!*

</div>

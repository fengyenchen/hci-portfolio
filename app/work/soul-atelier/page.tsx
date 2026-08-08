import type { Metadata } from "next";
import { CreativeCase, type CreativeProject } from "../../components/CreativeCase";

export const metadata: Metadata = { title: "Soul Atelier", description: "以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。" };

const project: CreativeProject = {
  title: "Soul Atelier",
  label: "3D Web / AI Interaction",
  summary: "以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。",
  image: "/assets/soul-atelier.png",
  imageAlt: "Soul Atelier 專案封面暫用圖",
  overview: "Soul Atelier 是一個融合 3D 互動場景與 Gemini 2.5 AI 的人格測驗網站。專案把問答、視覺氛圍與回饋結果串成連續體驗，探索 AI 除了產出答案之外，如何參與敘事與自我理解。",
  question: "AI 回答之外，還能如何參與一段自我探索？",
  focus: ["把問答流程轉化成具空間感與節奏的互動體驗", "整合生成式 AI 回饋，同時維持清楚的使用者流程", "在 3D 視覺、載入效能與響應式操作之間取得平衡"],
  stack: ["Next.js", "Tailwind CSS", "React Three Fiber", "Gemini 2.5"],
  liveUrl: "https://soul-atelier.fengyenchen.com",
  githubUrl: "https://github.com/fengyenchen/soul-atelier",
  accent: "text-[#6b4ca5]",
  surface: "bg-[#f2edf9]",
};

export default function SoulAtelierPage() { return <CreativeCase project={project} />; }

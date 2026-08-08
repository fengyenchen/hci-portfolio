import type { Metadata } from "next";
import { CreativeCase, type CreativeProject } from "../../components/CreativeCase";

export const metadata: Metadata = { title: "Pixel Art Generator", description: "從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。" };

const project: CreativeProject = {
  title: "Pixel Art Generator",
  label: "Creative Tool / Web",
  summary: "從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。",
  image: "/assets/pixel-art-generator.png",
  imageAlt: "Pixel Art Generator 專案封面暫用圖",
  overview: "一款支援圖片像素化、手繪編輯、專案儲存與 PNG 匯出的線上像素畫工具。重點不只在轉換效果，而是把輸入、修改、保存與輸出整理成容易理解的完整創作流程。",
  question: "如何讓轉換工具，也成為真正能持續創作的工作區？",
  focus: ["支援圖片像素化與手動繪製兩種創作起點", "設計編輯狀態、專案儲存與匯出之間的清楚關係", "讓畫布操作在不同螢幕尺寸下仍維持可用性"],
  stack: ["TypeScript", "React", "Canvas", "Web Storage"],
  liveUrl: "https://pixel-art-generator.fengyenchen.com/",
  githubUrl: "https://github.com/fengyenchen/pixel-art-generator",
  accent: "text-[#315fa8]",
  surface: "bg-[#edf4fb]",
};

export default function PixelArtGeneratorPage() { return <CreativeCase project={project} />; }

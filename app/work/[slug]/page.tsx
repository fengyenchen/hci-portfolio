import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

type Experiment = {
  title: string;
  label: string;
  summary: string;
  image: string;
  imageAlt: string;
  overview: string;
  focus: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
};

const experiments: Record<string, Experiment> = {
  "soul-atelier": {
    title: "Soul Atelier",
    label: "3D WEB / AI INTERACTION",
    summary: "以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。",
    image: "/assets/soul-atelier.png",
    imageAlt: "Soul Atelier 專案封面暫用圖",
    overview: "Soul Atelier 是一個融合 3D 互動場景與 Gemini 2.5 AI 的人格測驗網站。專案把問答、視覺氛圍與回饋結果串成連續體驗，探索 AI 除了產出答案之外，如何參與敘事與自我理解。",
    focus: [
      "把問答流程轉化成具空間感與節奏的互動體驗",
      "整合生成式 AI 回饋，同時維持清楚的使用者流程",
      "在 3D 視覺、載入效能與響應式操作之間取得平衡",
    ],
    stack: ["Next.js", "Tailwind CSS", "React Three Fiber", "Gemini 2.5"],
    liveUrl: "https://soul-atelier.fengyenchen.com",
    githubUrl: "https://github.com/fengyenchen/soul-atelier",
    accent: "violet",
  },
  "pixel-art-generator": {
    title: "Pixel Art Generator",
    label: "CREATIVE TOOL / WEB",
    summary: "從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。",
    image: "/assets/pixel-art-generator.png",
    imageAlt: "Pixel Art Generator 專案封面暫用圖",
    overview: "一款支援圖片像素化、手繪編輯、專案儲存與 PNG 匯出的線上像素畫工具。重點不只在轉換效果，而是把輸入、修改、保存與輸出整理成容易理解的完整創作流程。",
    focus: [
      "支援圖片像素化與手動繪製兩種創作起點",
      "設計編輯狀態、專案儲存與匯出之間的清楚關係",
      "讓畫布操作在不同螢幕尺寸下仍維持可用性",
    ],
    stack: ["TypeScript", "React", "Canvas", "Web Storage"],
    liveUrl: "https://pixel-art-generator.fengyenchen.com/",
    githubUrl: "https://github.com/fengyenchen/pixel-art-generator",
    accent: "blue",
  },
  "r3f-practice": {
    title: "R3F Practice",
    label: "3D WEB / EXPERIMENT",
    summary: "把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。",
    image: "/assets/r3f-practice.png",
    imageAlt: "R3F Practice 專案封面暫用圖",
    overview: "這是一組以 React Three Fiber 製作的 3D Web 實驗。我將製作完成的模型放進網頁，測試場景配置、光線、鏡頭與使用者輸入如何共同影響物件被理解與探索的方式。",
    focus: [
      "建立 3D 模型從製作工具到 Web 場景的工作流程",
      "練習鏡頭、光線、材質與場景層級的組合",
      "探索滑鼠與觸控輸入如何轉化為空間互動",
    ],
    stack: ["TypeScript", "React Three Fiber", "Three.js", "3D Modeling"],
    liveUrl: "https://r3f-practice.fengyenchen.com",
    githubUrl: "https://github.com/fengyenchen/R3F-practice",
    accent: "orange",
  },
};

export function generateStaticParams() {
  return Object.keys(experiments).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = experiments[slug];
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ExperimentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = experiments[slug];
  if (!project) notFound();

  return (
    <main>
      <SiteHeader />
      <article className={`case-page experiment-case accent-${project.accent}`}>
        <header className="case-hero wrap experiment-hero">
          <Link className="back-link" href="/#work">← 所有作品</Link>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.summary}</p>
          <div className="cover-links" aria-label="專案外部連結">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">開啟 Live Demo ↗</a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">查看 GitHub ↗</a>
          </div>
        </header>

        <figure className="case-wide-image experiment-cover">
          <img src={project.image} alt={project.imageAlt} />
          <figcaption>暫用封面圖；可在 `public/assets/` 以同名檔案直接替換。</figcaption>
        </figure>

        <section className="case-section wrap case-two-col">
          <p className="section-index">01 / OVERVIEW</p>
          <div>
            <h2>把技術組合，<br />整理成一段完整體驗。</h2>
            <p>{project.overview}</p>
          </div>
        </section>

        <section className="case-section wrap case-two-col experiment-focus">
          <p className="section-index">02 / FOCUS</p>
          <div>
            <h2>這個專案在探索什麼？</h2>
            <ol>
              {project.focus.map((item, index) => (
                <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="stack-band">
          <div className="wrap">
            <p className="eyebrow">TOOLS / STACK</p>
            <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <nav className="next-project wrap" aria-label="回到作品列表">
          <span>繼續瀏覽</span>
          <Link href="/#work">所有作品 <b>↗</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { CaseHeader, CaseSection, NextProject, eyebrow, wrap } from "../../components/CaseElements";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Soul Atelier",
  description: "以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。",
};

export default function SoulAtelierPage() {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader compact label="3D Web / AI Interaction" title="Soul Atelier" subtitle="以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。" meta={[
        { label: "我的角色", value: "概念發想、互動設計、前端與 3D 開發" },
        { label: "方法", value: "體驗流程、3D 場景、生成式 AI 回饋" },
        { label: "成果", value: "可操作的 AI 人格探索網站" },
      ]}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href="https://soul-atelier.fengyenchen.com" target="_blank" rel="noreferrer">開啟 Live Demo ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:bg-(--ink) hover:text-white" href="https://github.com/fengyenchen/soul-atelier" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="mx-auto m-0 w-full max-w-310 bg-white px-4 md:px-8">
        <img className="h-auto w-full" src="/assets/soul-atelier.png" alt="Soul Atelier 3D 互動網站畫面" />
      </figure>

      <CaseSection index="01 / CONCEPT" title={<>讓 AI 不只回答，<br />也參與自我探索。</>}>
        <p>Soul Atelier 是一個融合 3D 互動場景與 Gemini 2.5 AI 的人格測驗網站。專案把問答、視覺氛圍與回饋結果串成連續體驗，探索 AI 除了產出答案之外，如何參與敘事與自我理解。</p>
        <p>我將原本線性的表單重新想像成一段有空間感的旅程，讓使用者的每次選擇都能在場景與最後的回饋中留下痕跡。</p>
      </CaseSection>

      <section className={`${wrap} py-20 md:py-28`}>
        <p className={eyebrow}>02 / EXPERIENCE</p>
        <h2 className="mb-14 mt-6 max-w-225 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">一段從提問、感受，<br />走向個人化回饋的旅程。</h2>
        <ol className="grid list-none border-y border-(--ink) p-0 md:grid-cols-3">
          {[
            ["01", "進入場景", "以 3D 空間建立情緒與探索感，讓使用者準備進入問答。"],
            ["02", "留下選擇", "把測驗題目融入連續流程，維持清楚進度與即時回饋。"],
            ["03", "生成映照", "由 AI 整理選擇脈絡，產生能被閱讀與反思的個人結果。"],
          ].map(([number, title, text]) => <li className="flex min-h-61.25 flex-col border-b border-(--ink) p-8 last:border-b-0 md:min-h-82.5 md:border-b-0 md:border-r md:last:border-r-0" key={number}>
            <span className="text-[11px] font-extrabold text-(--primary)">{number}</span>
            <h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{title}</h3>
            <p className="leading-[1.65] text-(--muted)">{text}</p>
          </li>)}
        </ol>
      </section>

      <CaseSection index="03 / DESIGN FOCUS" title={<>在沉浸感與可用性之間，<br />保留清楚的方向。</>}>
        <ul className="m-0 list-none border-t border-(--ink) p-0">
          {[
            "把問答流程轉化成具空間感與節奏的互動體驗",
            "整合生成式 AI 回饋，同時維持清楚的使用者流程",
            "在 3D 視覺、載入效能與響應式操作之間取得平衡",
          ].map((item, index) => <li className="grid grid-cols-[52px_1fr] border-b border-(--line) py-5" key={item}><span className="text-xs font-extrabold text-(--primary)">0{index + 1}</span><p>{item}</p></li>)}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">{["Next.js", "Tailwind CSS", "React Three Fiber", "Gemini 2.5"].map((tool) => <span className="border border-(--ink) px-5 py-3 text-sm font-bold" key={tool}>{tool}</span>)}</div>
      </CaseSection>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

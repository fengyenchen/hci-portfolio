import type { Metadata } from "next";
import { CaseHeader, CaseSection, NextProject, eyebrow, wrap } from "../../components/CaseElements";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Pixel Art Generator",
  description: "從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。",
};

export default function PixelArtGeneratorPage() {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader compact label="Creative Tool / Web" title={<>Pixel Art<br />Generator</>} subtitle="從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。" meta={[
        { label: "我的角色", value: "產品設計、前端開發、Canvas 編輯器實作" },
        { label: "方法", value: "功能拆解、狀態設計、響應式介面" },
        { label: "成果", value: "可儲存專案與匯出 PNG 的像素畫工具" },
      ]}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href="https://pixel-art-generator.fengyenchen.com/" target="_blank" rel="noreferrer">開啟 Live Demo ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:bg-(--ink) hover:text-white" href="https://github.com/fengyenchen/pixel-art-generator" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="mx-auto m-0 w-full max-w-310 bg-white px-4 md:px-8">
        <img className="h-auto w-full" src="/assets/pixel-art-generator.png" alt="Pixel Art Generator 編輯工作區" />
      </figure>

      <CaseSection index="01 / OVERVIEW" title={<>從一次轉換，<br />變成可持續編輯的工具。</>}>
        <p>這是一款支援圖片像素化、手繪編輯、專案儲存與 PNG 匯出的線上像素畫工具。重點不只在產生效果，而是把輸入、修改、保存與輸出整理成容易理解的完整創作流程。</p>
      </CaseSection>

      <section className={`${wrap} py-20 md:py-28`}>
        <p className={eyebrow}>02 / WORKFLOW</p>
        <h2 className="mb-14 mt-6 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">一個畫布，完成四個步驟。</h2>
        <ol className="grid list-none border-y border-(--ink) p-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Import", "匯入圖片或從空白畫布開始。"],
            ["02", "Convert", "調整解析度並產生像素化結果。"],
            ["03", "Edit", "用繪圖工具逐格修正與創作。"],
            ["04", "Save", "保存專案狀態或匯出 PNG。"],
          ].map(([number, title, text], index) => <li className={`flex min-h-61.25 flex-col border-b border-(--ink) p-8 last:border-b-0 lg:min-h-82.5 lg:border-b-0 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 3 ? "lg:border-r" : ""}`} key={number}>
            <span className="text-[11px] font-extrabold text-(--primary)">{number}</span>
            <h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{title}</h3>
            <p className="leading-[1.65] text-(--muted)">{text}</p>
          </li>)}
        </ol>
      </section>

      <section className={wrap}>
        <div className="grid gap-8 border-b border-(--ink) py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32">
          <p className="mt-2 text-[10px] font-extrabold tracking-[0.13em] text-(--primary)">03 / PRODUCT DECISIONS</p>
          <div>
          <h2 className="mb-12 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">讓功能增加時，<br />工作區仍然容易理解。</h2>
          <dl className="border-t border-(--ink)">
            {[
              ["兩種創作起點", "圖片像素化與手動繪製可以自由銜接，不限制使用者的開始方式。"],
              ["狀態可以回來", "將畫布、設定與編輯進度一起保存，讓一次嘗試成為可延續的專案。"],
              ["跨裝置操作", "重新安排小螢幕下的工具與畫布關係，保留基本編輯能力。"],
            ].map(([term, detail]) => <div className="grid gap-3 border-b border-(--line) py-6 md:grid-cols-[180px_1fr]" key={term}><dt className="font-bold">{term}</dt><dd className="leading-7 text-(--muted)">{detail}</dd></div>)}
          </dl>
          <div className="mt-12 flex flex-wrap gap-3">{["TypeScript", "React", "Canvas", "Web Storage"].map((tool) => <span className="border border-(--ink) px-5 py-3 text-sm font-bold" key={tool}>{tool}</span>)}</div>
          </div>
        </div>
      </section>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

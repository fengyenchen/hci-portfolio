import type { Metadata } from "next";
import { CaseHeader, CaseSection, NextProject, eyebrow, wrap } from "../../components/CaseElements";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "R3F Practice",
  description: "把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。",
};

export default function R3fPracticePage() {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader compact label="3D Web / Experiment" title="R3F Practice" subtitle="把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。" meta={[
        { label: "我的角色", value: "3D 模型製作、場景設計、互動開發" },
        { label: "方法", value: "模型輸出、光影配置、鏡頭與輸入測試" },
        { label: "成果", value: "可於瀏覽器探索的 3D Web 實驗" },
      ]}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href="https://r3f-practice.fengyenchen.com" target="_blank" rel="noreferrer">開啟 Live Demo ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:bg-(--ink) hover:text-white" href="https://github.com/fengyenchen/R3F-practice" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="mx-auto m-0 w-full max-w-310 bg-white px-4 md:px-8">
        <img className="h-auto w-full" src="/assets/r3f-practice.png" alt="R3F Practice 3D 場景實驗" />
      </figure>

      <CaseSection index="01 / EXPERIMENT" title={<>模型進入瀏覽器後，<br />才開始成為一段體驗。</>}>
        <p>這是一組以 React Three Fiber 製作的 3D Web 實驗。我將製作完成的模型放進網頁，測試場景配置、光線、鏡頭與使用者輸入如何共同影響物件被理解與探索的方式。</p>
        <p>練習的目標不是單純展示模型，而是建立一套能重複調整、快速驗證的 Web 3D 工作流程。</p>
      </CaseSection>

      <section className={`${wrap} py-20 md:py-28`}>
        <p className={eyebrow}>02 / PIPELINE</p>
        <h2 className="mb-14 mt-6 max-w-225 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">從模型到互動，<br />建立完整的 Web 3D 流程。</h2>
        <ol className="grid list-none border-y border-(--ink) p-0 md:grid-cols-3">
          {[
            ["01", "Model", "整理模型比例、材質與輸出格式。"],
            ["02", "Scene", "配置鏡頭、燈光與空間層級。"],
            ["03", "Interact", "將滑鼠與觸控轉成探索行為。"],
          ].map(([number, title, text]) => <li className="flex min-h-61.25 flex-col border-b border-(--ink) p-8 last:border-b-0 md:min-h-82.5 md:border-b-0 md:border-r md:last:border-r-0" key={number}>
              <span className="text-[11px] font-extrabold text-(--primary)">{number}</span>
              <h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{title}</h3>
              <p className="leading-[1.65] text-(--muted)">{text}</p>
          </li>)}
        </ol>
      </section>

      <section className={wrap}>
        <div className="grid gap-8 border-b border-(--ink) py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32">
          <p className="mt-2 text-[10px] font-extrabold tracking-[0.13em] text-(--primary)">03 / LEARNING LOG</p>
          <div>
          <h2 className="mb-12 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">用小型實驗，建立空間互動的判斷力。</h2>
          <ol className="list-none border-t border-(--ink) p-0">
            {[
              ["場景組成", "理解鏡頭、光線、材質與物件層級如何共同塑造視覺焦點。"],
              ["互動映射", "比較旋轉、縮放與視角移動如何影響探索感與操作負擔。"],
              ["效能取捨", "在模型細節、渲染成本與載入速度之間建立可驗證的選擇。"],
            ].map(([title, text], index) => <li className="grid grid-cols-[52px_1fr] gap-4 border-b border-(--line) py-6" key={title}><span className="text-xs font-extrabold text-(--primary)">0{index + 1}</span><div><h3 className="mb-2 text-xl font-bold">{title}</h3><p className="leading-7 text-(--muted)">{text}</p></div></li>)}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">{["TypeScript", "React Three Fiber", "Three.js", "3D Modeling"].map((tool) => <span className="border border-(--ink) px-5 py-3 text-sm font-bold" key={tool}>{tool}</span>)}</div>
          </div>
        </div>
      </section>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

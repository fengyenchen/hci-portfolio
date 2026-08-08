import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const projects = [
  { index: "01", title: "Nooka", kind: "OpenHCI '26 · Physical Interaction", description: "讓使用者在固定座位上，重新掌握專注、休息與被打擾的邊界。", metaLabel: "My role", meta: "硬體實作 · 燈光控制 · 手機端控制", image: "/assets/nooka-product.png", imageAlt: "Nooka 桌上型互動隔板的產品情境", href: "/work/nooka" },
  { index: "02", title: "多模組化救災探勘載具", kind: "MakeNTU 2026 · IoT System", description: "讓救災人員在不進入高風險區域的情況下，感知環境並操作任務模組。", metaLabel: "My role", meta: "IoT 監控 · 車體與模組電控 · 結構設計", image: "/assets/make-ntu.png", imageAlt: "多模組化救災探勘載具專案", href: "/work/make-ntu", contain: true },
  { index: "03", title: "Soul Atelier", kind: "3D Web · AI Interaction", description: "融合 3D 互動視覺與生成式 AI 的人格探索體驗。", metaLabel: "Tools", meta: "Next.js · R3F · Gemini", image: "/assets/soul-atelier.png", imageAlt: "Soul Atelier 專案封面", href: "/work/soul-atelier" },
  { index: "04", title: "Pixel Art Generator", kind: "Creative Tool · Web", description: "支援像素化、手繪編輯、專案儲存與 PNG 匯出的線上創作工具。", metaLabel: "Tools", meta: "React · Canvas · TypeScript", image: "/assets/pixel-art-generator.png", imageAlt: "Pixel Art Generator 專案封面", href: "/work/pixel-art-generator" },
  { index: "05", title: "R3F Practice", kind: "3D Web · Experiment", description: "將自製 3D 模型帶進瀏覽器，探索物件、鏡頭與互動的關係。", metaLabel: "Tools", meta: "R3F · Three.js · 3D Modeling", image: "/assets/r3f-practice.png", imageAlt: "R3F Practice 專案封面", href: "/work/r3f-practice" },
];

const wrap = "mx-auto w-[calc(100%-2rem)] max-w-[1240px] md:w-[calc(100%-4rem)]";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className={`${wrap} flex min-h-[570px] flex-col justify-between py-14 md:min-h-[680px] md:py-20`}>
        <p className="m-0 text-[11px] font-extrabold tracking-[0.14em] text-[var(--green)]">HCI / CREATIVE TECHNOLOGY / TAIPEI</p>
        <h1 className="my-10 max-w-[1180px] text-[clamp(51px,8.6vw,124px)] font-semibold leading-[0.98] tracking-[-0.075em]">
          把數位邏輯，
          <span className="block text-[var(--green)]">做成可以摸得到的互動。</span>
        </h1>
        <div className="flex items-end justify-between gap-10">
          <p className="m-0 max-w-[650px] text-[clamp(17px,1.65vw,23px)] leading-[1.7] tracking-[-0.02em]">
            我是馮妍禎，臺大工管系大三學生。我在 Web、硬體與空間之間工作，把研究洞察轉化成能被感受、操作與驗證的互動原型。
          </p>
          <a className="hidden size-[66px] shrink-0 place-items-center rounded-full border border-[var(--ink)] text-2xl transition hover:translate-y-1 hover:bg-[var(--ink)] hover:text-white sm:grid" href="#work" aria-label="前往作品區">↓</a>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--ink)] py-4" aria-label="能力摘要">
        <div className="min-w-max text-center text-xs font-extrabold tracking-[0.12em]">USER RESEARCH · PHYSICAL COMPUTING · PROTOTYPING · WEB DEVELOPMENT · CREATIVE CODING</div>
      </section>

      <section className={`${wrap} py-24 md:py-32`} id="work">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-[1fr_2fr]">
          <p className="m-0 text-[11px] font-extrabold tracking-[0.14em] text-[var(--green)]">SELECTED WORK / 01—05</p>
          <h2 className="m-0 text-[clamp(36px,5.5vw,76px)] font-medium leading-[1.05] tracking-[-0.055em]">從問題定義，到真實回饋。</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2" aria-label="精選作品">
          {projects.map((project) => (
            <Link key={project.index} href={project.href} className="group flex flex-col border-t border-[var(--ink)] pt-3.5">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--soft)] lg:aspect-[16/10]">
                <img className={`size-full transition duration-500 group-hover:scale-[1.025] ${project.contain ? "object-contain p-6" : "object-cover"}`} src={project.image} alt={project.imageAlt} />
                <span className="absolute left-3.5 top-3.5 grid size-[42px] place-items-center bg-white text-[11px] font-extrabold">{project.index}</span>
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[var(--green)]">{project.kind}</p>
                <h3 className="mb-4 text-[clamp(32px,3.4vw,50px)] font-semibold leading-[1.04] tracking-[-0.055em]">{project.title}</h3>
                <p className="mb-8 text-[15px] leading-[1.7] text-[var(--muted)]">{project.description}</p>
                <div className="mt-auto flex items-end justify-between gap-6 border-t border-[var(--line)] pt-3.5">
                  <div><span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[var(--green)]">{project.metaLabel}</span><p className="mt-1.5 text-xs">{project.meta}</p></div>
                  <b className="text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</b>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${wrap} border-t border-[var(--ink)] py-20 md:py-28`} id="about">
        <p className="text-[11px] font-extrabold tracking-[0.14em] text-[var(--green)]">ABOUT / APPROACH</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr_0.75fr] lg:gap-16">
          <h2 className="text-[clamp(42px,5.2vw,72px)] font-medium leading-[1.02] tracking-[-0.06em]">技術是媒介，<br />人的感受才是起點。</h2>
          <div className="space-y-6 text-[17px] leading-[1.8] text-[#3f443f]">
            <p>我關心科技如何進入人的身體、空間與日常。比起只把功能做出來，我更在意問題為什麼值得被解決，以及每一次操作會帶來什麼感受。</p>
            <p>我的跨域背景讓我能參與使用者研究、介面設計、前端開發、Arduino 與硬體原型，並在團隊裡把不同語言接成同一段可被測試的體驗。</p>
          </div>
          <dl className="m-0">
            {[['Research','Interview · CJM · Synthesis'],['Build','Web · Arduino · IoT'],['Create','Creative Coding · 3D · Figma']].map(([title, detail]) => (
              <div className="mb-5 border-b border-[var(--line)] pb-5" key={title}><dt className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[var(--green)]">{title}</dt><dd className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{detail}</dd></div>
            ))}
          </dl>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-[var(--ink)] pb-20 pt-7 sm:flex-row">
          <p className="text-xl">互動研究、實體原型、跨域合作</p>
          <div className="flex gap-7 text-sm font-extrabold"><a href="https://www.fengyenchen.com/" target="_blank" rel="noreferrer">個人網站 ↗</a><a href="https://github.com/fengyenchen" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

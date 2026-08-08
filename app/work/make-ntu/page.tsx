import type { Metadata } from "next";
import { CaseHeader, CaseSection, NextProject, PrincipleGrid, eyebrow, wrap } from "../../components/CaseElements";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "多模組化救災探勘載具", description: "MakeNTU 2026 軟硬整合專案：IoT 監控、車體與模組電控、結構設計。" };

export default function MakeNtuCaseStudy() {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader compact label="MakeNTU 2026 / Hardware Hackathon" title={<>多模組化<br />救災探勘載具</>} subtitle="在不讓救災人員進入高風險區域的情況下，完成感知、判讀與任務操作。" meta={[
        { label: "我的角色", value: "IoT 監控／傳輸資訊、千斤頂模組電控及小車結構" },
        { label: "技術面向", value: "感測資料、即時監控、模組化硬體" },
        { label: "成果", value: "企業獎第三名" },
      ]}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href="/assets/make-ntu.pdf" target="_blank" rel="noreferrer">查看專案簡報 ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:border-(--primary) hover:text-(--primary)" href="https://github.com/fengyenchen/MakeNTU2026" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="mx-auto m-0 w-full max-w-310 bg-white px-4 md:px-8"><img className="h-auto w-full" src="/assets/make-ntu.jpg" alt="多模組化救災探勘載具完整專案介紹" /></figure>

      <CaseSection index="01 / CHALLENGE" title={<>讓人先理解風險，<br />再決定如何行動。</>}>
        <p>災難現場的資訊零散且環境風險高。載具必須代替救災人員進入現場，回傳容易判讀的物理數據，同時依災種快速更換感測或作業模組，從瓦斯偵測、火災到坍方支撐都能使用同一平台。</p>
      </CaseSection>

      <PrincipleGrid items={[
        { title: "感知", text: "硬體感測環境變數，降低人員進入危險區域的需要。" },
        { title: "解讀", text: "透過監控介面把原始數值轉成直觀的預警資訊。" },
        { title: "執行", text: "依據現場決策驅動千斤頂、瓦斯偵測等實體模組。" },
      ]} />

      <section className={`${wrap} bg-white`}>
        <div className="grid gap-8 border-b border-(--ink) py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32">
          <p className="mt-2 text-[10px] font-extrabold tracking-[0.13em] text-(--primary)">02 / MY CONTRIBUTION</p>
          <div>
          <h2 className="mb-10 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">把感測、介面與機構，<br />接成一條不中斷的資訊流。</h2>
          <p className="max-w-195 text-[17px] leading-[1.85] text-[#3d433e]">我負責 IoT 監控系統、小車與千斤頂／瓦斯偵測模組的電控，以及千斤頂小車的結構設計。我需要同時思考資料是否能穩定回傳、操作者是否看得懂，以及控制指令能否真的驅動機構。</p>
          <ul className="mt-14 list-none p-0">
            {[
              ["01", "IoT 監控", "整合感測資訊與監控介面，支援遠端判讀。"],
              ["02", "電控整合", "完成車體、千斤頂與瓦斯偵測模組的控制。"],
              ["03", "結構設計", "設計千斤頂小車，使實體模組能完成支撐任務。"],
            ].map((item) => <li className="grid grid-cols-[55px_1fr] border-t border-(--line) py-5" key={item[0]}><span className="text-[11px] text-(--primary)">{item[0]}</span><div><b className="text-lg">{item[1]}</b><p className="mt-1 text-sm text-(--muted)">{item[2]}</p></div></li>)}
          </ul>
          </div>
        </div>
      </section>

      <CaseSection index="03 / TAKEAWAY" title={<>快速原型的速度，<br />來自清楚的系統邊界。</>}>
        <p>在有限時間裡完成可運作的軟硬體系統，讓我學會先定義每個模組的輸入、輸出與失敗情境，再逐步整合。這套思考也延伸到後來的 HCI 專案：互動不只是一個畫面，而是從感知到回饋的完整系統。</p>
      </CaseSection>

      <section className={`${wrap} py-20 md:py-28`}>
        <p className={eyebrow}>04 / PROJECT DECK</p>
        <div className="mt-8 overflow-hidden border border-(--ink) bg-white">
          <iframe className="h-[70vh] min-h-120 max-h-225 w-full" src="/assets/make-ntu.pdf#view=FitH" title="MakeNTU 多模組化救災探勘載具專案簡報" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-(--muted)">若瀏覽器無法顯示 PDF，可<a className="ml-1 font-bold text-(--ink) underline-offset-4 hover:text-(--primary) hover:underline" href="/assets/make-ntu.pdf" target="_blank" rel="noreferrer">另開完整簡報 ↗</a></p>
      </section>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

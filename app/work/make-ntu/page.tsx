import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "多模組化救災探勘載具",
  description: "MakeNTU 2026 軟硬整合專案：IoT 監控、車體與模組電控、結構設計。",
};

export default function MakeNtuCaseStudy() {
  return (
    <main>
      <SiteHeader />
      <article className="case-page make-case">
        <header className="case-hero wrap">
          <Link className="back-link" href="/#work">← 所有作品</Link>
          <p className="eyebrow">MAKENTU 2026 / HARDWARE HACKATHON</p>
          <h1>多模組化<br />救災探勘載具</h1>
          <p className="case-subtitle">在不讓救災人員進入高風險區域的情況下，完成感知、判讀與任務操作。</p>
          <dl className="case-meta">
            <div><dt>我的角色</dt><dd>IoT 監控、車體與模組電控、千斤頂小車結構</dd></div>
            <div><dt>技術面向</dt><dd>感測資料、即時監控、模組化硬體</dd></div>
            <div><dt>成果</dt><dd>企業獎第三名</dd></div>
          </dl>
        </header>

        <figure className="case-wide-image make-wide">
          <img src="/assets/make-ntu.png" alt="多模組化救災探勘載具完整專案介紹" />
        </figure>

        <section className="case-section wrap case-two-col">
          <p className="section-index">01 / CHALLENGE</p>
          <div>
            <h2>讓人先理解風險，<br />再決定如何行動。</h2>
            <p>
              災難現場的資訊零散且環境風險高。載具必須代替救災人員進入現場，回傳容易判讀的物理數據，
              同時依災種快速更換感測或作業模組，從瓦斯偵測、火災到坍方支撐都能使用同一平台。
            </p>
          </div>
        </section>

        <section className="principles wrap make-principles">
          <div><span>01</span><h3>感知</h3><p>硬體感測環境變數，降低人員進入危險區域的需要。</p></div>
          <div><span>02</span><h3>解讀</h3><p>透過監控介面把原始數值轉成直觀的預警資訊。</p></div>
          <div><span>03</span><h3>執行</h3><p>依據現場決策驅動千斤頂、瓦斯偵測等實體模組。</p></div>
        </section>

        <section className="case-section wrap case-two-col contribution-section">
          <p className="section-index">02 / MY CONTRIBUTION</p>
          <div>
            <h2>把感測、介面與機構，<br />接成一條不中斷的資訊流。</h2>
            <p>
              我負責 IoT 監控系統、小車與千斤頂／瓦斯偵測模組的電控，以及千斤頂小車的結構設計。
              我需要同時思考資料是否能穩定回傳、操作者是否看得懂，以及控制指令能否真的驅動機構。
            </p>
            <ul className="deliverables">
              <li><span>01</span><div><b>IoT 監控</b><p>整合感測資訊與監控介面，支援遠端判讀。</p></div></li>
              <li><span>02</span><div><b>電控整合</b><p>完成車體、千斤頂與瓦斯偵測模組的控制。</p></div></li>
              <li><span>03</span><div><b>結構設計</b><p>設計千斤頂小車，使實體模組能完成支撐任務。</p></div></li>
            </ul>
          </div>
        </section>

        <section className="case-section wrap case-two-col">
          <p className="section-index">03 / TAKEAWAY</p>
          <div>
            <h2>快速原型的速度，<br />來自清楚的系統邊界。</h2>
            <p>
              在有限時間裡完成可運作的軟硬體系統，讓我學會先定義每個模組的輸入、輸出與失敗情境，
              再逐步整合。這套思考也延伸到後來的 HCI 專案：互動不只是一個畫面，而是從感知到回饋的完整系統。
            </p>
            <a className="text-link" href="https://github.com/fengyenchen/MakeNTU2026" target="_blank" rel="noreferrer">查看 GitHub 專案 ↗</a>
          </div>
        </section>

        <nav className="next-project wrap" aria-label="下一個作品">
          <span>回到精選作品</span>
          <Link href="/#work">所有作品 <b>↗</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}

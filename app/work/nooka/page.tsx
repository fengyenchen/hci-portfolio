import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Nooka — OpenHCI '26",
  description: "桌上型互動隔板：透過硬體、燈光與手機控制，協助使用者在專注與恢復之間切換。",
};

export default function NookaCaseStudy() {
  return (
    <main>
      <SiteHeader />
      <article className="case-page">
        <header className="case-hero wrap">
          <Link className="back-link" href="/#work">← 所有作品</Link>
          <p className="eyebrow">OPENHCI '26 / 7-PERSON TEAM / 2026</p>
          <h1>Nooka</h1>
          <p className="case-subtitle">當家具學會照顧你：對抗資訊過載的辦公室身心互動裝置。</p>
          <dl className="case-meta">
            <div><dt>我的角色</dt><dd>硬體實作、燈光控制、手機端控制功能</dd></div>
            <div><dt>方法</dt><dd>訪談、互動設計、快速原型、系統整合</dd></div>
            <div><dt>成果</dt><dd>可展示的桌上型互動原型與控制介面</dd></div>
          </dl>
        </header>

        <figure className="case-wide-image">
          <img src="/assets/nooka-product.png" alt="Nooka 安裝於辦公桌上的產品情境" />
        </figure>

        <section className="case-section wrap case-two-col">
          <p className="section-index">01 / WHY</p>
          <div>
            <h2>休息不是缺少時間，<br />而是缺少安心切換的環境。</h2>
            <p>
              團隊訪談 7 位在固定座位工作的知識工作者，發現半開放辦公室裡的視覺、聲音與臨時詢問，
              會持續切斷專注；另一方面，使用者即使想短暫休息，也常因顧慮他人眼光而假裝忙碌。
            </p>
            <p>
              因此我們沒有再做一個提醒休息的 App，而是把介入放回座位本身：讓環境可以被調節，
              也讓專注與恢復狀態能被溫和地理解。
            </p>
          </div>
        </section>

        <section className="principles wrap">
          <div><span>01</span><h3>原地恢復</h3><p>把固定座位轉化為能由使用者掌控的小空間。</p></div>
          <div><span>02</span><h3>干擾緩衝</h3><p>依照當下需求調整遮蔽、吸音與工作狀態。</p></div>
          <div><span>03</span><h3>共同理解</h3><p>讓休息成為可被理解的訊號，而不是需要掩飾的行為。</p></div>
        </section>

        <section className="case-gallery wrap">
          <figure className="gallery-large"><img src="/assets/nooka-prototype.png" alt="Nooka 主板、側板與互動元件設計" /><figcaption>硬體構成：可調式主板、吸音側板、燈光與舒壓互動。</figcaption></figure>
          <figure><img src="/assets/nooka-demo.png" alt="Nooka 原型產品展示" /><figcaption>可拆裝的桌上型原型，支援不同工作情境。</figcaption></figure>
          <figure><img src="/assets/nooka-app.png" alt="Nooka 手機控制介面" /><figcaption>手機端整合模式切換、休息提醒與狀態回顧。</figcaption></figure>
        </section>

        <section className="case-section wrap case-two-col contribution-section">
          <p className="section-index">02 / MY CONTRIBUTION</p>
          <div>
            <h2>把手機上的選擇，<br />變成桌面上看得見的燈光。</h2>
            <p>
              我主要負責實體硬體與手機控制燈光的功能，把團隊定義的專注／休息模式落實成可操作的原型。
              核心不是單向遙控，而是確保手機端的狀態、控制邏輯與實體燈光維持一致，讓使用者能立即理解目前模式。
            </p>
            <div className="flow" aria-label="手機控制燈光流程">
              <div><span>1</span><b>手機選擇模式</b><small>Focus / Rest / Available</small></div>
              <i>→</i>
              <div><span>2</span><b>控制邏輯轉譯</b><small>將介面狀態映射到硬體行為</small></div>
              <i>→</i>
              <div><span>3</span><b>燈光即時回饋</b><small>讓自己與周圍的人都能理解</small></div>
            </div>
          </div>
        </section>

        <section className="case-section wrap case-two-col">
          <p className="section-index">03 / REFLECTION</p>
          <div>
            <h2>硬體不是最後一步，<br />而是體驗被驗證的地方。</h2>
            <p>
              這個專案讓我更確定，HCI 的價值不只在介面是否好看，而在抽象研究洞察能否被轉成一段真實、連續的互動。
              當手機操作、燈光回饋與辦公情境彼此吻合，使用者才真正感受到「我能掌控這個空間」。
            </p>
          </div>
        </section>

        <nav className="next-project wrap" aria-label="下一個作品">
          <span>下一個個案</span>
          <Link href="/work/make-ntu">多模組化救災探勘載具 <b>↗</b></Link>
        </nav>
      </article>
      <SiteFooter />
    </main>
  );
}

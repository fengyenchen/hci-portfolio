import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const experiments = [
  {
    index: "03",
    title: "Soul Atelier",
    kind: "3D Web · AI Interaction",
    description: "融合 3D 互動視覺與生成式 AI 的人格探索體驗。",
    href: "https://soul-atelier.fengyenchen.com",
  },
  {
    index: "04",
    title: "Pixel Art Generator",
    kind: "Creative Tool · Web",
    description: "支援像素化、手繪編輯、專案儲存與 PNG 匯出的線上創作工具。",
    href: "https://pixel-art-generator.fengyenchen.com/",
  },
  {
    index: "05",
    title: "R3F Practice",
    kind: "3D Web · Experiment",
    description: "將自製 3D 模型帶進瀏覽器，探索物件、鏡頭與互動的關係。",
    href: "https://r3f-practice.fengyenchen.com",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero wrap">
        <p className="eyebrow">HCI / CREATIVE TECHNOLOGY / TAIPEI</p>
        <h1>
          把數位邏輯，
          <span>做成可以摸得到的互動。</span>
        </h1>
        <div className="hero-bottom">
          <p className="lede">
            我是馮妍禎，臺大工管系大三學生。我在 Web、硬體與空間之間工作，
            把研究洞察轉化成能被感受、操作與驗證的互動原型。
          </p>
          <a className="round-link" href="#work" aria-label="前往作品區">↓</a>
        </div>
      </section>

      <section className="marquee" aria-label="能力摘要">
        <div>USER RESEARCH · PHYSICAL COMPUTING · PROTOTYPING · WEB DEVELOPMENT · CREATIVE CODING</div>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK / 01—05</p>
          <h2>從問題定義，到真實回饋。</h2>
        </div>

        <Link className="featured-project" href="/work/nooka">
          <div className="project-media nooka-media">
            <img src="/assets/nooka-product.png" alt="Nooka 桌上型互動隔板的產品情境" />
            <span className="project-number">01</span>
          </div>
          <div className="project-copy">
            <div>
              <p className="project-type">OPENHCI '26 · PHYSICAL INTERACTION</p>
              <h3>Nooka</h3>
              <p>讓使用者在固定座位上，重新掌握專注、休息與被打擾的邊界。</p>
            </div>
            <div className="contribution">
              <span>MY ROLE</span>
              <p>硬體實作、燈光控制、手機端控制功能</p>
              <b>閱讀個案 ↗</b>
            </div>
          </div>
        </Link>

        <Link className="featured-project reverse" href="/work/make-ntu">
          <div className="project-media make-media">
            <img src="/assets/make-ntu.png" alt="多模組化救災探勘載具專案頁" />
            <span className="project-number">02</span>
          </div>
          <div className="project-copy">
            <div>
              <p className="project-type">MAKENTU 2026 · IOT SYSTEM</p>
              <h3>多模組化救災探勘載具</h3>
              <p>讓救災人員在不進入高風險區域的情況下，感知環境並操作任務模組。</p>
            </div>
            <div className="contribution">
              <span>MY ROLE</span>
              <p>IoT 監控、車體與模組電控、結構設計</p>
              <b>閱讀個案 ↗</b>
            </div>
          </div>
        </Link>

        <div className="experiment-list" aria-label="其他作品">
          {experiments.map((item) => (
            <a key={item.index} href={item.href} target="_blank" rel="noreferrer" className="experiment-row">
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <em>{item.kind}</em>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section wrap" id="about">
        <p className="eyebrow">ABOUT / APPROACH</p>
        <div className="about-grid">
          <h2>技術是媒介，<br />人的感受才是起點。</h2>
          <div className="about-copy">
            <p>
              我關心科技如何進入人的身體、空間與日常。比起只把功能做出來，
              我更在意問題為什麼值得被解決，以及每一次操作會帶來什麼感受。
            </p>
            <p>
              我的跨域背景讓我能參與使用者研究、介面設計、前端開發、Arduino 與硬體原型，
              並在團隊裡把不同語言接成同一段可被測試的體驗。
            </p>
          </div>
          <dl className="capabilities">
            <div><dt>Research</dt><dd>Interview · CJM · Synthesis</dd></div>
            <div><dt>Build</dt><dd>React · Web · Arduino · IoT</dd></div>
            <div><dt>Create</dt><dd>Creative Coding · 3D · Figma</dd></div>
          </dl>
        </div>
        <div className="contact-line">
          <p>想談互動研究、實體原型或跨域合作？</p>
          <div>
            <a href="https://www.fengyenchen.com/" target="_blank" rel="noreferrer">個人網站 ↗</a>
            <a href="https://github.com/fengyenchen" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

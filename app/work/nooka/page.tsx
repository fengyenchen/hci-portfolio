import type { Metadata } from "next";
import { CaseHeader, CaseSection, NextProject, PrincipleGrid, eyebrow, wrap } from "../../components/CaseElements";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "Nooka — OpenHCI '26", description: "桌上型互動隔板：透過硬體、燈光與手機控制，協助使用者在專注與恢復之間切換。" };

export default function NookaCaseStudy() {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader label="OpenHCI '26 / 7-person team / 2026" title="Nooka" subtitle="當家具學會照顧你：對抗資訊過載的辦公室身心互動裝置。" meta={[
        { label: "我的角色", value: "硬體實作、燈光控制、手機端控制功能" },
        { label: "方法", value: "訪談、互動設計、快速原型、系統整合" },
        { label: "成果", value: "可展示的桌上型互動原型與控制介面" },
      ]}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href="https://nooka-orpin.vercel.app/" target="_blank" rel="noreferrer">開啟 App Demo ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:border-(--primary) hover:text-(--primary)" href="/assets/nooka.pdf" target="_blank" rel="noreferrer">查看專案簡報 ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:border-(--primary) hover:text-(--primary)" href="https://r3f-practice.fengyenchen.com/screenPage" target="_blank" rel="noreferrer">開啟裝置畫面 ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:border-(--primary) hover:text-(--primary)" href="https://github.com/fengyenchen/nooka" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="mx-auto m-0 w-full max-w-310 bg-white px-4 md:px-8"><img className="h-auto w-full" src="/assets/nooka-product.JPG" alt="Nooka 安裝於辦公桌上的產品情境" /></figure>

      <CaseSection index="01 / WHY" title={<>休息不是缺少時間，<br />而是缺少安心切換的環境。</>}>
        <p>團隊訪談 7 位在固定座位工作的知識工作者，發現半開放辦公室裡的視覺、聲音與臨時詢問，會持續切斷專注；另一方面，使用者即使想短暫休息，也常因顧慮他人眼光而假裝忙碌。</p>
        <p>因此我們沒有再做一個提醒休息的 App，而是把介入放回座位本身：讓環境可以被調節，也讓專注與恢復狀態能被溫和地理解。</p>
      </CaseSection>

      <PrincipleGrid items={[
        { title: "原地恢復", text: "把固定座位轉化為能由使用者掌控的小空間。" },
        { title: "干擾緩衝", text: "依照當下需求調整遮蔽、吸音與工作狀態。" },
        { title: "共同理解", text: "讓休息成為可被理解的訊號，而不是需要掩飾的行為。" },
      ]} />

      <section className={`${wrap} grid gap-7 py-20 md:grid-cols-2 md:py-28`}>
        {[
          ["/assets/nooka-prototype.png", "Nooka 主板、側板與互動元件設計", "硬體構成：可調式主板、吸音側板、燈光與舒壓互動。", true],
          ["/assets/nooka-demo.png", "Nooka 原型產品展示", "可拆裝的桌上型原型，支援不同工作情境。", false],
          ["/assets/nooka-app.png", "Nooka 手機控制介面", "手機端整合模式切換、休息提醒與狀態回顧。", false],
        ].map(([src, alt, caption, wide]) => <figure className={`m-0 ${wide ? "md:col-span-2" : ""}`} key={String(src)}><img className="w-full bg-white" src={String(src)} alt={String(alt)} /><figcaption className="mt-3 text-xs text-(--muted)">{String(caption)}</figcaption></figure>)}
      </section>

      <CaseSection index="02 / MY CONTRIBUTION" title={<>把手機上的選擇，<br />變成桌面上看得見的燈光。</>}>
        <p>我主要負責實體硬體與手機控制燈光的功能，把團隊定義的專注／休息模式落實成可操作的原型。核心不是單向遙控，而是確保手機端的狀態、控制邏輯與實體燈光維持一致，讓使用者能立即理解目前模式。</p>
        <div className="mt-14 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {[
            ["01", "手機選擇模式", "Focus / Rest / Available"],
            ["02", "控制邏輯轉譯", "將介面狀態映射到硬體行為"],
            ["03", "燈光即時回饋", "讓自己與周圍的人都能理解"],
          ].map((item, index) => <div className="contents" key={item[0]}><div className="flex min-h-38.75 flex-col border border-(--ink) p-5"><span className="text-xs text-(--muted)">{item[0]}</span><b className="mb-2 mt-auto text-[17px]">{item[1]}</b><small className="leading-6 text-(--muted)">{item[2]}</small></div>{index < 2 && <i className="text-center text-xl not-italic max-md:rotate-90">→</i>}</div>)}
        </div>
      </CaseSection>

      <CaseSection index="03 / REFLECTION" title={<>硬體不是最後一步，<br />而是體驗被驗證的地方。</>}>
        <p>這個專案讓我更確定，HCI 的價值不只在介面是否好看，而在抽象研究洞察能否被轉成一段真實、連續的互動。當手機操作、燈光回饋與辦公情境彼此吻合，使用者才真正感受到「我能掌控這個空間」。</p>
      </CaseSection>

      <section className={`${wrap} py-20 md:py-28`}>
        <p className={eyebrow}>04 / PROJECT DECK</p>
        <div className="mt-8 overflow-hidden border border-(--ink) bg-white">
          <iframe className="h-[70vh] min-h-120 max-h-225 w-full" src="/assets/nooka.pdf#view=FitH" title="Nooka OpenHCI 專案簡報" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-(--muted)">若瀏覽器無法顯示 PDF，可<a className="ml-1 font-bold text-(--ink) underline-offset-4 hover:text-(--primary) hover:underline" href="/assets/nooka.pdf" target="_blank" rel="noreferrer">另開完整簡報 ↗</a></p>
      </section>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

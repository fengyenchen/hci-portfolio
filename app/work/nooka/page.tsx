import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, FlowSteps, MediaGallery, PrincipleGrid, ProjectDeck } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = { title: "Nooka — OpenHCI '26", description: "桌上型互動隔板：透過硬體、燈光與手機控制，協助使用者在專注與恢復之間切換。" };

const meta = [
  { label: "我的角色", value: "硬體實作、燈光控制、手機端控制功能" },
  { label: "方法", value: "訪談、互動設計、快速原型、系統整合" },
  { label: "成果", value: "可展示的桌上型互動原型與控制介面" },
];

export default function NookaCaseStudy() {
  return <CaseStudyShell>
    <CaseHero label="OpenHCI '26 / 7-person team" title="Nooka" subtitle="當家具學會照顧你：對抗資訊過載的辦公室身心互動裝置。" meta={meta} links={[
      { label: "開啟 App Demo", href: "https://nooka-orpin.vercel.app/", primary: true },
      { label: "查看專案簡報", href: "/assets/nooka.pdf" },
      { label: "開啟裝置畫面", href: "https://r3f-practice.fengyenchen.com/screenPage" },
      { label: "查看 GitHub", href: "https://github.com/fengyenchen/nooka" },
    ]} />

    <CaseCover src="/assets/nooka-product.JPG" alt="Nooka 安裝於辦公桌上的產品情境" />

    <CaseSection index="01 / WHY" title={<>休息不是缺少時間，<br />而是缺少安心切換的環境。</>}>
      <p>團隊訪談 7 位在固定座位工作的知識工作者，發現半開放辦公室裡的視覺、聲音與臨時詢問，會持續切斷專注；另一方面，使用者即使想短暫休息，也常因顧慮他人眼光而假裝忙碌。</p>
      <p>因此我們沒有再做一個提醒休息的 App，而是把介入放回座位本身：讓環境可以被調節，也讓專注與恢復狀態能被溫和地理解。</p>
    </CaseSection>

    <PrincipleGrid items={[
      { title: "原地恢復", text: "把固定座位轉化為能由使用者掌控的小空間。" },
      { title: "干擾緩衝", text: "依照當下需求調整遮蔽、吸音與工作狀態。" },
      { title: "共同理解", text: "讓休息成為可被理解的訊號，而不是需要掩飾的行為。" },
    ]} />

    <MediaGallery items={[
      { src: "/assets/nooka-prototype.png", alt: "Nooka 主板、側板與互動元件設計", caption: "硬體構成：可調式主板、吸音側板、燈光與舒壓互動。", wide: true },
      { src: "/assets/nooka-demo.png", alt: "Nooka 原型產品展示", caption: "可拆裝的桌上型原型，支援不同工作情境。" },
      { src: "/assets/nooka-app.png", alt: "Nooka 手機控制介面", caption: "手機端整合模式切換、休息提醒與狀態回顧。" },
    ]} />

    <CaseSection index="02 / MY CONTRIBUTION" title={<>把手機上的選擇，<br />變成桌面上看得見的燈光。</>}>
      <p>我主要負責實體硬體與手機控制燈光的功能，把團隊定義的專注／休息模式落實成可操作的原型。核心不是單向遙控，而是確保手機端的狀態、控制邏輯與實體燈光維持一致，讓使用者能立即理解目前模式。</p>
      <FlowSteps items={[
        { title: "手機選擇模式", text: "Focus / Rest / Available" },
        { title: "控制邏輯轉譯", text: "將介面狀態映射到硬體行為" },
        { title: "燈光即時回饋", text: "讓自己與周圍的人都能理解" },
      ]} />
    </CaseSection>

    <CaseSection index="03 / REFLECTION" title={<>硬體不是最後一步，<br />而是體驗被驗證的地方。</>}>
      <p>這個專案讓我更確定，HCI 的價值不只在介面是否好看，而在抽象研究洞察能否被轉成一段真實、連續的互動。當手機操作、燈光回饋與辦公情境彼此吻合，使用者才真正感受到「我能掌控這個空間」。</p>
    </CaseSection>

    <ProjectDeck index="04 / PROJECT DECK" src="/assets/nooka.pdf" title="Nooka OpenHCI 專案簡報" />
  </CaseStudyShell>;
}

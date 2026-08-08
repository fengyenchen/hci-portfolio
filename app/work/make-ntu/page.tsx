import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, NumberedList, PrincipleGrid, ProjectDeck } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = { title: "多模組化救災探勘載具", description: "MakeNTU 2026 軟硬整合專案：IoT 監控、車體與模組電控、結構設計。" };

const meta = [
  { label: "我的角色", value: "IoT 監控／傳輸資訊、千斤頂模組電控及小車結構" },
  { label: "技術面向", value: "感測資料、即時監控、模組化硬體" },
  { label: "成果", value: "企業獎第三名" },
];

export default function MakeNtuCaseStudy() {
  return <CaseStudyShell>
    <CaseHero compact label="MakeNTU 2026 / Hardware Hackathon" title={<>多模組化<br />救災探勘載具</>} subtitle="在不讓救災人員進入高風險區域的情況下，完成感知、判讀與任務操作。" meta={meta} links={[
      { label: "查看專案簡報", href: "/assets/make-ntu.pdf", primary: true },
      { label: "查看 GitHub", href: "https://github.com/fengyenchen/MakeNTU2026" },
    ]} />

    <CaseCover src="/assets/make-ntu.jpg" alt="多模組化救災探勘載具完整專案介紹" />

    <CaseSection index="01 / CHALLENGE" title={<>讓人先理解風險，<br />再決定如何行動。</>}>
      <p>災難現場的資訊零散且環境風險高。載具必須代替救災人員進入現場，回傳容易判讀的物理數據，同時依災種快速更換感測或作業模組，從瓦斯偵測、火災到坍方支撐都能使用同一平台。</p>
    </CaseSection>

    <PrincipleGrid items={[
      { title: "感知", text: "硬體感測環境變數，降低人員進入危險區域的需要。" },
      { title: "解讀", text: "透過監控介面把原始數值轉成直觀的預警資訊。" },
      { title: "執行", text: "依據現場決策驅動千斤頂、瓦斯偵測等實體模組。" },
    ]} />

    <CaseSection index="02 / MY CONTRIBUTION" title={<>把感測、介面與機構，<br />接成一條不中斷的資訊流。</>}>
      <p>我負責 IoT 監控系統、小車與千斤頂／瓦斯偵測模組的電控，以及千斤頂小車的結構設計。我需要同時思考資料是否能穩定回傳、操作者是否看得懂，以及控制指令能否真的驅動機構。</p>
      <NumberedList items={[
        { title: "IoT 監控", text: "整合感測資訊與監控介面，支援遠端判讀。" },
        { title: "電控整合", text: "完成車體、千斤頂與瓦斯偵測模組的控制。" },
        { title: "結構設計", text: "設計千斤頂小車，使實體模組能完成支撐任務。" },
      ]} />
    </CaseSection>

    <CaseSection index="03 / TAKEAWAY" title={<>快速原型的速度，<br />來自清楚的系統邊界。</>}>
      <p>在有限時間裡完成可運作的軟硬體系統，讓我學會先定義每個模組的輸入、輸出與失敗情境，再逐步整合。這套思考也延伸到後來的 HCI 專案：互動不只是一個畫面，而是從感知到回饋的完整系統。</p>
    </CaseSection>

    <ProjectDeck index="04 / PROJECT DECK" src="/assets/make-ntu.pdf" title="MakeNTU 多模組化救災探勘載具專案簡報" />
  </CaseStudyShell>;
}

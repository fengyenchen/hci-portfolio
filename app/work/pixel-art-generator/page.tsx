import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, DefinitionList, ProcessSection, ToolList } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = { title: "Pixel Art Generator", description: "從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。" };

export default function PixelArtGeneratorPage() {
  return <CaseStudyShell>
    <CaseHero compact label="Creative Tool / Web" title={<>Pixel Art<br />Generator</>} subtitle="從圖片轉換到逐格編輯，讓像素創作在同一個瀏覽器工作區完成。" meta={[
      { label: "我的角色", value: "產品設計、前端開發、Canvas 編輯器實作" },
      { label: "方法", value: "功能拆解、狀態設計、響應式介面" },
      { label: "成果", value: "可儲存專案與匯出 PNG 的像素畫工具" },
    ]} links={[
      { label: "開啟 Live Demo", href: "https://pixel-art-generator.fengyenchen.com/", primary: true },
      { label: "查看 GitHub", href: "https://github.com/fengyenchen/pixel-art-generator" },
    ]} />

    <CaseCover src="/assets/pixel-art-generator.png" alt="Pixel Art Generator 編輯工作區" />

    <CaseSection index="01 / OVERVIEW" title={<>從一次轉換，<br />變成可持續編輯的工具。</>}>
      <p>這是一款支援圖片像素化、手繪編輯、專案儲存與 PNG 匯出的線上像素畫工具。重點不只在產生效果，而是把輸入、修改、保存與輸出整理成容易理解的完整創作流程。</p>
    </CaseSection>

    <ProcessSection columns={4} index="02 / WORKFLOW" title="一個畫布，完成四個步驟。" items={[
      { title: "Import", text: "匯入圖片或從空白畫布開始。" },
      { title: "Convert", text: "調整解析度並產生像素化結果。" },
      { title: "Edit", text: "用繪圖工具逐格修正與創作。" },
      { title: "Save", text: "保存專案狀態或匯出 PNG。" },
    ]} />

    <CaseSection index="03 / PRODUCT DECISIONS" title={<>讓功能增加時，<br />工作區仍然容易理解。</>}>
      <DefinitionList items={[
        { title: "兩種創作起點", text: "圖片像素化與手動繪製可以自由銜接，不限制使用者的開始方式。" },
        { title: "狀態可以回來", text: "將畫布、設定與編輯進度一起保存，讓一次嘗試成為可延續的專案。" },
        { title: "跨裝置操作", text: "重新安排小螢幕下的工具與畫布關係，保留基本編輯能力。" },
      ]} />
      <ToolList tools={["TypeScript", "React", "Canvas", "Web Storage"]} />
    </CaseSection>
  </CaseStudyShell>;
}

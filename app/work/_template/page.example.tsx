import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, NumberedList, ProcessSection, ToolList } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = {
  title: "作品名稱",
  description: "一句話描述這件作品。",
};

export default function NewProjectPage() {
  return <CaseStudyShell>
    <CaseHero compact label="PROJECT TYPE / YEAR" title="作品名稱" subtitle="用一到兩句話說明作品解決的問題與體驗。" meta={[
      { label: "我的角色", value: "填寫你的工作" },
      { label: "方法", value: "填寫研究或製作方法" },
      { label: "成果", value: "填寫作品成果" },
    ]} links={[
      { label: "開啟 Live Demo", href: "https://example.com", primary: true },
      { label: "查看 GitHub", href: "https://github.com/" },
    ]} />

    <CaseCover src="/assets/your-cover.jpg" alt="作品封面描述" />

    <CaseSection index="01 / OVERVIEW" title="章節標題">
      <p>填寫作品背景、問題與主要概念。</p>
    </CaseSection>

    <ProcessSection index="02 / PROCESS" title="流程標題" items={[
      { title: "步驟一", text: "步驟說明" },
      { title: "步驟二", text: "步驟說明" },
      { title: "步驟三", text: "步驟說明" },
    ]} />

    <CaseSection index="03 / DETAILS" title="設計重點">
      <NumberedList items={[
        { title: "重點一", text: "重點說明" },
        { title: "重點二", text: "重點說明" },
        { title: "重點三", text: "重點說明" },
      ]} />
      <ToolList tools={["Tool 1", "Tool 2", "Tool 3"]} />
    </CaseSection>
  </CaseStudyShell>;
}

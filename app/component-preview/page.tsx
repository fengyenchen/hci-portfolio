import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, DefinitionList, FlowSteps, MediaGallery, NumberedList, PrincipleGrid, ProcessSection, ProjectDeck, ToolList } from "../components/CaseStudyBlocks";

export const metadata: Metadata = {
  title: "作品頁元件預覽",
  description: "HCI Portfolio 內部作品頁區塊預覽。",
  robots: { index: false, follow: false },
};

const sampleItems = [
  { title: "第一個重點", text: "在這裡填入這個步驟或設計原則的簡短說明。" },
  { title: "第二個重點", text: "每一項使用相同資料格式，元件會自動處理編號與排版。" },
  { title: "第三個重點", text: "內容可以依作品替換，不需要修改 Tailwind class。" },
];

function PreviewBlock({ name, children }: { name: string; children: ReactNode }) {
  return <section className="mx-auto w-full max-w-330 px-4 py-6 md:px-8"><div className="border-2 border-dashed border-(--primary) p-3 md:p-6"><div className="overflow-hidden">{children}</div><p className="mt-6 border-t border-(--primary) pt-4 font-mono text-xs font-bold tracking-[0.08em] text-(--primary)">COMPONENT / {name}</p></div></section>;
}

export default function ComponentPreviewPage() {
  return <CaseStudyShell>
    <PreviewBlock name="CaseStudyShell">
      <div className="p-6 md:p-10"><p className="text-[11px] font-extrabold tracking-[0.14em] text-(--primary)">PAGE SHELL</p><h1 className="mt-4 text-[clamp(38px,6vw,72px)] font-semibold tracking-[-0.055em]">這一整頁使用 CaseStudyShell</h1><p className="mt-5 max-w-180 leading-7 text-(--muted)">它會自動加入網站導覽、底部「所有作品」連結與共用頁尾。</p></div>
    </PreviewBlock>

    <PreviewBlock name="CaseHero">
      <CaseHero compact label="INTERNAL / COMPONENT PREVIEW" title="作品頁元件" subtitle="集中預覽新增作品時可以直接使用的區塊，不會出現在網站導覽與搜尋結果中。" meta={[
        { label: "用途", value: "新增與維護作品內頁" },
        { label: "編輯方式", value: "填入文字、圖片與連結資料" },
        { label: "視覺系統", value: "白底、primary 綠色、共用間距" },
      ]} links={[
        { label: "主要按鈕", href: "/#work", primary: true },
        { label: "次要按鈕", href: "/#work" },
      ]} />
    </PreviewBlock>

    <PreviewBlock name="CaseCover">
      <CaseCover src="/assets/nooka-product.JPG" alt="作品封面元件預覽" caption="保留原圖比例，可選擇填寫圖說。" />
    </PreviewBlock>

    <PreviewBlock name="CaseSection">
      <CaseSection index="01 / TEXT SECTION" title={<>文字章節標題，<br />可以使用兩行。</>}><p>適合放背景、問題、反思與個人貢獻。可以加入一個或多個段落，也能在段落後組合其他小元件。</p></CaseSection>
    </PreviewBlock>

    <PreviewBlock name="PrincipleGrid">
      <PrincipleGrid items={sampleItems} />
    </PreviewBlock>

    <PreviewBlock name="ProcessSection · columns={3}">
      <ProcessSection index="02 / THREE-COLUMN PROCESS" title="三欄流程或體驗階段" items={sampleItems} />
    </PreviewBlock>

    <PreviewBlock name="ProcessSection · columns={4}">
      <ProcessSection columns={4} index="03 / FOUR-COLUMN PROCESS" title="四欄工作流程" items={[...sampleItems, { title: "第四個重點", text: "設定 columns={4} 即可使用四欄版本。" }]} />
    </PreviewBlock>

    <PreviewBlock name="NumberedList">
      <NumberedList items={sampleItems} />
    </PreviewBlock>

    <PreviewBlock name="DefinitionList">
      <DefinitionList items={sampleItems} />
    </PreviewBlock>

    <PreviewBlock name="ToolList">
      <ToolList tools={["React", "Tailwind CSS", "Arduino", "Figma"]} />
    </PreviewBlock>

    <PreviewBlock name="MediaGallery">
      <MediaGallery items={[
        { src: "/assets/nooka-prototype.png", alt: "寬版圖片範例", caption: "wide 設為 true 時跨兩欄。", wide: true },
        { src: "/assets/nooka-demo.png", alt: "圖片範例一", caption: "一般圖片會在桌機版並排。" },
        { src: "/assets/nooka-app.png", alt: "圖片範例二", caption: "每張圖片都可填寫替代文字與圖說。" },
      ]} />
    </PreviewBlock>

    <PreviewBlock name="FlowSteps">
      <FlowSteps items={sampleItems} />
    </PreviewBlock>

    <PreviewBlock name="ProjectDeck">
      <ProjectDeck index="04 / PROJECT DECK" src="/assets/nooka.pdf" title="PDF 簡報元件預覽" />
    </PreviewBlock>
  </CaseStudyShell>;
}

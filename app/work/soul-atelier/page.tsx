import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, NumberedList, ProcessSection, ToolList } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = { title: "Soul Atelier", description: "以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。" };

export default function SoulAtelierPage() {
  return <CaseStudyShell>
    <CaseHero compact label="3D Web / AI Interaction" title="Soul Atelier" subtitle="以 3D 互動視覺與生成式 AI，重新想像人格測驗如何成為一段探索自我的旅程。" meta={[
      { label: "我的角色", value: "概念發想、互動設計、前端與 3D 開發" },
      { label: "方法", value: "體驗流程、3D 場景、生成式 AI 回饋" },
      { label: "成果", value: "可操作的 AI 人格探索網站" },
    ]} links={[
      { label: "開啟 Live Demo", href: "https://soul-atelier.fengyenchen.com", primary: true },
      { label: "查看 GitHub", href: "https://github.com/fengyenchen/soul-atelier" },
    ]} />

    <CaseCover src="/assets/soul-atelier.png" alt="Soul Atelier 3D 互動網站畫面" />

    <CaseSection index="01 / CONCEPT" title={<>讓 AI 不只回答，<br />也參與自我探索。</>}>
      <p>Soul Atelier 是一個融合 3D 互動場景與 Gemini 2.5 AI 的人格測驗網站。專案把問答、視覺氛圍與回饋結果串成連續體驗，探索 AI 除了產出答案之外，如何參與敘事與自我理解。</p>
      <p>我將原本線性的表單重新想像成一段有空間感的旅程，讓使用者的每次選擇都能在場景與最後的回饋中留下痕跡。</p>
    </CaseSection>

    <ProcessSection index="02 / EXPERIENCE" title={<>一段從提問、感受，<br />走向個人化回饋的旅程。</>} items={[
      { title: "進入場景", text: "以 3D 空間建立情緒與探索感，讓使用者準備進入問答。" },
      { title: "留下選擇", text: "把測驗題目融入連續流程，維持清楚進度與即時回饋。" },
      { title: "生成映照", text: "由 AI 整理選擇脈絡，產生能被閱讀與反思的個人結果。" },
    ]} />

    <CaseSection index="03 / DESIGN FOCUS" title={<>在沉浸感與可用性之間，<br />保留清楚的方向。</>}>
      <NumberedList items={[
        { title: "空間化問答", text: "把問答流程轉化成具空間感與節奏的互動體驗。" },
        { title: "AI 回饋", text: "整合生成式 AI 回饋，同時維持清楚的使用者流程。" },
        { title: "體驗效能", text: "在 3D 視覺、載入效能與響應式操作之間取得平衡。" },
      ]} />
      <ToolList tools={["Next.js", "Tailwind CSS", "React Three Fiber", "Gemini 2.5"]} />
    </CaseSection>
  </CaseStudyShell>;
}

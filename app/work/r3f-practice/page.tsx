import type { Metadata } from "next";
import { CaseCover, CaseHero, CaseSection, CaseStudyShell, NumberedList, ProcessSection, ToolList } from "../../components/CaseStudyBlocks";

export const metadata: Metadata = { title: "R3F Practice", description: "把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。" };

export default function R3fPracticePage() {
  return <CaseStudyShell>
    <CaseHero compact label="3D Web / Experiment" title="R3F Practice" subtitle="把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。" meta={[
      { label: "我的角色", value: "3D 模型製作、場景設計、互動開發" },
      { label: "方法", value: "模型輸出、光影配置、鏡頭與輸入測試" },
      { label: "成果", value: "可於瀏覽器探索的 3D Web 實驗" },
    ]} links={[
      { label: "開啟 Live Demo", href: "https://r3f-practice.fengyenchen.com", primary: true },
      { label: "查看 GitHub", href: "https://github.com/fengyenchen/R3F-practice" },
    ]} />

    <CaseCover src="/assets/r3f-practice.png" alt="R3F Practice 3D 場景實驗" />

    <CaseSection index="01 / EXPERIMENT" title={<>模型進入瀏覽器後，<br />才開始成為一段體驗。</>}>
      <p>這是一組以 React Three Fiber 製作的 3D Web 實驗。我將製作完成的模型放進網頁，測試場景配置、光線、鏡頭與使用者輸入如何共同影響物件被理解與探索的方式。</p>
      <p>練習的目標不是單純展示模型，而是建立一套能重複調整、快速驗證的 Web 3D 工作流程。</p>
    </CaseSection>

    <ProcessSection index="02 / PIPELINE" title={<>從模型到互動，<br />建立完整的 Web 3D 流程。</>} items={[
      { title: "Model", text: "整理模型比例、材質與輸出格式。" },
      { title: "Scene", text: "配置鏡頭、燈光與空間層級。" },
      { title: "Interact", text: "將滑鼠與觸控轉成探索行為。" },
    ]} />

    <CaseSection index="03 / LEARNING LOG" title="用小型實驗，建立空間互動的判斷力。">
      <NumberedList items={[
        { title: "場景組成", text: "理解鏡頭、光線、材質與物件層級如何共同塑造視覺焦點。" },
        { title: "互動映射", text: "比較旋轉、縮放與視角移動如何影響探索感與操作負擔。" },
        { title: "效能取捨", text: "在模型細節、渲染成本與載入速度之間建立可驗證的選擇。" },
      ]} />
      <ToolList tools={["TypeScript", "React Three Fiber", "Three.js", "3D Modeling"]} />
    </CaseSection>
  </CaseStudyShell>;
}

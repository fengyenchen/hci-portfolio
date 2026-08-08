import type { Metadata } from "next";
import { CreativeCase, type CreativeProject } from "../../components/CreativeCase";

export const metadata: Metadata = { title: "R3F Practice", description: "把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。" };

const project: CreativeProject = {
  title: "R3F Practice",
  label: "3D Web / Experiment",
  summary: "把自製 3D 模型帶進瀏覽器，練習用鏡頭、材質與互動建立空間敘事。",
  image: "/assets/r3f-practice.png",
  imageAlt: "R3F Practice 專案封面暫用圖",
  overview: "這是一組以 React Three Fiber 製作的 3D Web 實驗。我將製作完成的模型放進網頁，測試場景配置、光線、鏡頭與使用者輸入如何共同影響物件被理解與探索的方式。",
  question: "一個模型進入瀏覽器後，如何從物件變成可探索的空間？",
  focus: ["建立 3D 模型從製作工具到 Web 場景的工作流程", "練習鏡頭、光線、材質與場景層級的組合", "探索滑鼠與觸控輸入如何轉化為空間互動"],
  stack: ["TypeScript", "React Three Fiber", "Three.js", "3D Modeling"],
  liveUrl: "https://r3f-practice.fengyenchen.com",
  githubUrl: "https://github.com/fengyenchen/R3F-practice",
  accent: "text-[#b94d27]",
  surface: "bg-[#fbf0eb]",
};

export default function R3fPracticePage() { return <CreativeCase project={project} />; }

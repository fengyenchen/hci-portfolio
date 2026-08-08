import { CaseHeader, CaseSection, NextProject, eyebrow, wrap } from "./CaseElements";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type CreativeProject = {
  title: string;
  label: string;
  summary: string;
  image: string;
  imageAlt: string;
  overview: string;
  question: string;
  focus: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
};

export function CreativeCase({ project }: { project: CreativeProject }) {
  return <main>
    <SiteHeader />
    <article>
      <CaseHeader compact label={project.label} title={project.title} subtitle={project.summary}>
        <div className="flex flex-wrap gap-3">
          <a className="border border-(--ink) bg-(--ink) px-5 py-3 text-xs font-extrabold text-white hover:bg-white hover:text-(--ink)" href={project.liveUrl} target="_blank" rel="noreferrer">開啟 Live Demo ↗</a>
          <a className="border border-(--ink) px-5 py-3 text-xs font-extrabold hover:bg-(--ink) hover:text-white" href={project.githubUrl} target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        </div>
      </CaseHeader>

      <figure className="relative m-0 h-[78vw] max-h-190 w-full bg-white p-4 md:h-[62vw] md:p-12">
        <img className="size-full object-contain" src={project.image} alt={project.imageAlt} />
        <figcaption className="absolute bottom-3 right-4 hidden text-[10px] text-(--muted) md:block">暫用封面圖；可在 public/assets/ 以同名檔案直接替換。</figcaption>
      </figure>

      <CaseSection index="01 / OVERVIEW" title={<>把技術組合，<br />整理成一段完整體驗。</>}><p>{project.overview}</p></CaseSection>

      <section className={`${wrap} grid gap-8 border-b border-(--ink) py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32`}>
        <p className={`mt-2 text-[10px] font-extrabold tracking-[0.13em] ${project.accent}`}>02 / DESIGN FOCUS</p>
        <div>
          <h2 className="mb-4 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">{project.question}</h2>
          <p className="mb-12 text-[15px] leading-7 text-(--muted)">從操作流程、回饋方式到視覺節奏，逐步把技術能力轉化為使用者能理解的體驗。</p>
          <ol className="m-0 list-none border-t border-(--ink) p-0">
            {project.focus.map((item, index) => <li className="grid grid-cols-[60px_1fr] gap-4 border-b border-(--line) py-6" key={item}><span className={`text-[11px] font-extrabold ${project.accent}`}>0{index + 1}</span><p className="text-[17px] leading-[1.7]">{item}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="border-b border-(--ink) bg-white py-20 md:py-24">
        <div className={wrap}><p className={eyebrow}>TOOLS / STACK</p><ul className="mt-9 flex list-none flex-wrap gap-3 p-0">{project.stack.map((item) => <li className="rounded-full border border-(--ink) bg-white px-5 py-3.5 text-sm font-bold" key={item}>{item}</li>)}</ul></div>
      </section>

      <NextProject label="繼續瀏覽" href="/#work" title="所有作品" />
    </article>
    <SiteFooter />
  </main>;
}

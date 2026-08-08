import type { ReactNode } from "react";
import { CaseHeader, CaseSection, NextProject, PrincipleGrid, eyebrow, wrap } from "./CaseElements";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type CaseLink = { label: string; href: string; primary?: boolean };
export type CaseMeta = { label: string; value: string };
export type GridItem = { title: string; text: string };
export type GalleryItem = { src: string; alt: string; caption: string; wide?: boolean };

export { CaseSection, PrincipleGrid };

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return <main><SiteHeader /><article>{children}<NextProject label="繼續瀏覽" href="/#work" title="所有作品" /></article><SiteFooter /></main>;
}

export function CaseHero({ label, title, subtitle, meta, links = [], compact = false }: { label: string; title: ReactNode; subtitle: string; meta: CaseMeta[]; links?: CaseLink[]; compact?: boolean }) {
  return <CaseHeader compact={compact} label={label} title={title} subtitle={subtitle} meta={meta}>{links.length > 0 && <CaseLinks links={links} />}</CaseHeader>;
}

export function CaseLinks({ links }: { links: CaseLink[] }) {
  return <div className="flex flex-wrap gap-3">{links.map((link) => <a className={`${link.primary ? "border-(--ink) bg-(--ink) text-white hover:bg-white hover:text-(--ink) focus-visible:bg-white focus-visible:text-(--ink)" : "border-(--ink) hover:border-(--primary) hover:text-(--primary) focus-visible:border-(--primary) focus-visible:text-(--primary)"} border px-5 py-3 text-xs font-extrabold transition-colors duration-300 ease-out`} href={link.href} target="_blank" rel="noreferrer" key={`${link.label}-${link.href}`}>{link.label} ↗</a>)}</div>;
}

export function CaseCover({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return <figure className={`${wrap} m-0 bg-white`}><img className="h-auto w-full" src={src} alt={alt} />{caption && <figcaption className="mt-3 text-xs text-(--muted)">{caption}</figcaption>}</figure>;
}

export function ProcessSection({ index, title, items, columns = 3 }: { index: string; title: ReactNode; items: GridItem[]; columns?: 3 | 4 }) {
  const gridClass = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return <section className={`${wrap} py-20 md:py-28`}><p className={eyebrow}>{index}</p><h2 className="mb-14 mt-6 max-w-225 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">{title}</h2><ol className={`grid list-none border-y border-(--ink) p-0 ${gridClass}`}>{items.map((item, itemIndex) => {
    const borderClass = columns === 4 ? `${itemIndex % 2 === 0 ? "sm:border-r" : ""} ${itemIndex < items.length - 1 ? "lg:border-r" : ""}` : "md:border-r md:last:border-r-0";
    return <li className={`flex min-h-61.25 flex-col border-b border-(--ink) p-8 last:border-b-0 md:min-h-82.5 md:border-b-0 ${borderClass}`} key={item.title}><span className="text-[11px] font-extrabold text-(--primary)">{String(itemIndex + 1).padStart(2, "0")}</span><h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{item.title}</h3><p className="leading-[1.65] text-(--muted)">{item.text}</p></li>;
  })}</ol></section>;
}

export function NumberedList({ items }: { items: GridItem[] }) {
  return <ol className="m-0 mt-12 list-none border-t border-(--ink) p-0">{items.map((item, index) => <li className="grid grid-cols-[52px_1fr] gap-4 border-b border-(--line) py-5" key={item.title}><span className="text-xs font-extrabold text-(--primary)">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-1 text-sm leading-7 text-(--muted)">{item.text}</p></div></li>)}</ol>;
}

export function DefinitionList({ items }: { items: GridItem[] }) {
  return <dl className="border-t border-(--ink)">{items.map((item) => <div className="grid gap-3 border-b border-(--line) py-6 md:grid-cols-[180px_1fr]" key={item.title}><dt className="font-bold">{item.title}</dt><dd className="leading-7 text-(--muted)">{item.text}</dd></div>)}</dl>;
}

export function ToolList({ tools }: { tools: string[] }) {
  return <ul className="mt-12 flex list-none flex-wrap gap-3 p-0">{tools.map((tool) => <li className="border border-(--ink) px-5 py-3 text-sm font-bold" key={tool}>{tool}</li>)}</ul>;
}

export function MediaGallery({ items }: { items: GalleryItem[] }) {
  return <section className={`${wrap} grid gap-7 py-20 md:grid-cols-2 md:py-28`}>{items.map((item) => <figure className={`m-0 ${item.wide ? "md:col-span-2" : ""}`} key={item.src}><img className="h-auto w-full bg-white" src={item.src} alt={item.alt} /><figcaption className="mt-3 text-xs text-(--muted)">{item.caption}</figcaption></figure>)}</section>;
}

export function FlowSteps({ items }: { items: GridItem[] }) {
  return <div className="mt-14 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">{items.map((item, index) => <div className="contents" key={item.title}><div className="flex min-h-38.75 flex-col border border-(--ink) p-5"><span className="text-xs text-(--primary)">{String(index + 1).padStart(2, "0")}</span><b className="mb-2 mt-auto text-[17px]">{item.title}</b><small className="leading-6 text-(--muted)">{item.text}</small></div>{index < items.length - 1 && <i className="text-center text-xl not-italic max-md:rotate-90">→</i>}</div>)}</div>;
}

export function ProjectDeck({ index, src, title }: { index: string; src: string; title: string }) {
  return <section className={`${wrap} py-20 md:py-28`}><p className={eyebrow}>{index}</p><div className="mt-8 overflow-hidden border border-(--ink) bg-white"><iframe className="h-[70vh] min-h-120 max-h-225 w-full" src={`${src}#view=FitH`} title={title} loading="lazy" /></div><p className="mt-4 text-sm text-(--muted)">若瀏覽器無法顯示 PDF，可<a className="ml-1 font-bold text-(--ink) underline-offset-4 transition-colors duration-300 ease-out hover:text-(--primary) hover:underline focus-visible:text-(--primary) focus-visible:underline" href={src} target="_blank" rel="noreferrer">另開完整簡報 ↗</a></p></section>;
}

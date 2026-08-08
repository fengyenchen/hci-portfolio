import Link from "next/link";
import type { ReactNode } from "react";

export const wrap = "mx-auto w-[calc(100%-2rem)] max-w-[1240px] md:w-[calc(100%-4rem)]";
export const eyebrow = "text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--green)]";

export function CaseHeader({ label, title, subtitle, meta, children, compact = false }: { label: string; title: ReactNode; subtitle: string; meta?: { label: string; value: string }[]; children?: ReactNode; compact?: boolean }) {
  return (
    <header className={`${wrap} py-10 md:py-14`}>
      <Link className="mb-12 inline-block text-[13px] font-bold hover:text-[var(--green)] md:mb-14" href="/#work">← 所有作品</Link>
      <p className={eyebrow}>{label}</p>
      <h1 className={`my-7 font-semibold leading-[0.9] tracking-[-0.075em] ${compact ? "text-[clamp(55px,9vw,128px)]" : "text-[clamp(72px,13vw,186px)]"}`}>{title}</h1>
      <p className="my-8 max-w-[850px] text-[clamp(22px,3vw,40px)] leading-[1.35] tracking-[-0.035em] md:my-14">{subtitle}</p>
      {children}
      {meta && <dl className="mt-10 grid border-t border-[var(--ink)] md:grid-cols-3">
        {meta.map((item) => <div className="border-b border-[var(--line)] py-4 md:border-b-0 md:border-r md:px-7 md:first:pl-0" key={item.label}><dt className="text-[10px] font-extrabold tracking-[0.1em] text-[var(--green)]">{item.label}</dt><dd className="mt-2 text-sm leading-6">{item.value}</dd></div>)}
      </dl>}
    </header>
  );
}

export function CaseSection({ index, title, children, dark = false }: { index: string; title: ReactNode; children: ReactNode; dark?: boolean }) {
  return (
    <section className={`${dark ? "w-full bg-[var(--green)] px-4 text-white md:px-[max(2rem,calc((100%-1240px)/2))]" : `${wrap} border-b border-[var(--ink)]`} grid gap-8 py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32`}>
      <p className={`mt-2 text-[10px] font-extrabold tracking-[0.13em] ${dark ? "text-[#cfe7d6]" : "text-[var(--green)]"}`}>{index}</p>
      <div>
        <h2 className="mb-10 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">{title}</h2>
        <div className={`max-w-[780px] space-y-5 text-[17px] leading-[1.85] ${dark ? "text-[#edf6ef]" : "text-[#3d433e]"}`}>{children}</div>
      </div>
    </section>
  );
}

export function PrincipleGrid({ items, orange = false }: { items: { title: string; text: string }[]; orange?: boolean }) {
  return <section className={`${wrap} grid border-b border-[var(--ink)] md:grid-cols-3`}>{items.map((item, index) => <div className="flex min-h-[245px] flex-col border-b border-[var(--ink)] p-8 md:min-h-[330px] md:border-r md:first:border-l" key={item.title}><span className={`text-[11px] font-extrabold ${orange ? "text-[var(--orange)]" : "text-[var(--green)]"}`}>0{index + 1}</span><h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{item.title}</h3><p className="leading-[1.65] text-[var(--muted)]">{item.text}</p></div>)}</section>;
}

export function NextProject({ label, href, title }: { label: string; href: string; title: string }) {
  return <nav className={`${wrap} py-16 md:pb-24`} aria-label={label}><span className={eyebrow}>{label}</span><Link className="mt-4 flex items-center justify-between text-[clamp(34px,5vw,68px)] font-medium tracking-[-0.055em]" href={href}>{title}<b>↗</b></Link></nav>;
}

import Link from "next/link";
import type { ReactNode } from "react";

export const wrap = "mx-auto w-full max-w-310 px-4 md:px-8";
export const eyebrow = "text-[11px] font-extrabold uppercase tracking-[0.14em] text-(--primary)";

export function CaseHeader({ label, title, subtitle, meta, children, compact = false }: { label: string; title: ReactNode; subtitle: string; meta?: { label: string; value: string }[]; children?: ReactNode; compact?: boolean }) {
  return (
    <header className={`${wrap} py-10 md:py-14`}>
      <Link className="mb-12 inline-block text-[13px] font-bold hover:text-(--primary) md:mb-14" href="/#work">← 所有作品</Link>
      <p className={eyebrow}>{label}</p>
      <h1 className={`my-7 font-semibold leading-[0.9] tracking-[-0.075em] ${compact ? "text-[clamp(55px,9vw,128px)]" : "text-[clamp(72px,13vw,186px)]"}`}>{title}</h1>
      <p className="my-8 max-w-212.5 text-[clamp(22px,3vw,40px)] leading-[1.35] tracking-[-0.035em] md:my-14">{subtitle}</p>
      {children}
      {meta && <dl className="mt-10 grid border-t border-(--ink) md:grid-cols-3">
        {meta.map((item) => <div className="border-b border-(--line) py-4 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0" key={item.label}><dt className="text-[10px] font-extrabold tracking-widest text-(--primary)">{item.label}</dt><dd className="mt-2 text-sm leading-6">{item.value}</dd></div>)}
      </dl>}
    </header>
  );
}

export function CaseSection({ index, title, children }: { index: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className={`${wrap} bg-white`}>
      <div className="grid gap-8 border-b border-(--ink) py-20 md:grid-cols-[1fr_2fr] md:gap-14 md:py-32">
        <p className="mt-2 text-[10px] font-extrabold tracking-[0.13em] text-(--primary)">{index}</p>
        <div>
          <h2 className="mb-10 text-[clamp(40px,5.2vw,72px)] font-medium leading-[1.08] tracking-[-0.055em]">{title}</h2>
          <div className="max-w-195 space-y-5 text-[17px] leading-[1.85] text-[#3d433e]">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function PrincipleGrid({ items }: { items: { title: string; text: string }[] }) {
  return <section className={wrap}><div className="grid border-b border-(--ink) md:grid-cols-3">{items.map((item, index) => <div className="flex min-h-61.25 flex-col border-b border-(--ink) p-8 last:border-b-0 md:min-h-82.5 md:border-b-0 md:border-r md:last:border-r-0" key={item.title}><span className="text-[11px] font-extrabold text-(--primary)">0{index + 1}</span><h3 className="mb-3 mt-auto text-[35px] font-semibold tracking-[-0.045em]">{item.title}</h3><p className="leading-[1.65] text-(--muted)">{item.text}</p></div>)}</div></section>;
}

export function NextProject({ label, href, title }: { label: string; href: string; title: string }) {
  return <nav className={`${wrap} py-16 md:pb-24`} aria-label={label}><span className={eyebrow}>{label}</span><Link className="mt-4 flex items-center justify-between text-[clamp(34px,5vw,68px)] font-medium tracking-[-0.055em]" href={href}>{title}<b>↗</b></Link></nav>;
}

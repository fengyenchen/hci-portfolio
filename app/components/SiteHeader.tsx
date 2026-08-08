import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex h-[72px] w-[calc(100%-2rem)] max-w-[1240px] items-center justify-between border-b border-[var(--ink)] md:h-[88px] md:w-[calc(100%-4rem)]">
      <Link className="flex gap-1 text-[19px] font-black tracking-[-0.04em]" href="/" aria-label="回到首頁">
        YCF<span className="text-[var(--green)]" aria-hidden="true">↗</span>
      </Link>
      <nav className="flex items-center gap-4 text-xs font-bold md:gap-8" aria-label="主要導覽">
        <a className="hover:text-[var(--green)]" href="/#work">作品</a>
        <a className="hidden hover:text-[var(--green)] sm:block" href="/#about">關於</a>
        <a className="hover:text-[var(--green)]" href="https://github.com/fengyenchen" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </header>
  );
}

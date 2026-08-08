import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto w-full max-w-310 px-4 md:px-8">
      <div className="flex h-18 items-center justify-between border-b border-(--ink) md:h-22">
        <Link className="flex gap-1 text-[19px] font-black tracking-[-0.04em]" href="/" aria-label="回到首頁">
          Yen-Chen Feng
        </Link>
        <nav className="flex items-center gap-4 text-xs font-bold md:gap-8" aria-label="主要導覽">
          <a className="hover:text-(--primary)" href="/#work">作品</a>
          <a className="hidden hover:text-(--primary) sm:block" href="/#about">關於</a>
          <a className="hover:text-(--primary)" href="https://www.fengyenchen.com" target="_blank" rel="noreferrer">個人網站 ↗</a>
        </nav>
      </div>
    </header>
  );
}

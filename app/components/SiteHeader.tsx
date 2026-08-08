import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="回到首頁">
        YCF<span aria-hidden="true">↗</span>
      </Link>
      <nav aria-label="主要導覽">
        <a href="/#work">作品</a>
        <a href="/#about">關於</a>
        <a href="https://github.com/fengyenchen" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </header>
  );
}

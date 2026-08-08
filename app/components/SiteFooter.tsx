export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[calc(100%-2rem)] max-w-[1240px] flex-col gap-3 border-t border-[var(--ink)] py-6 text-[10px] font-bold tracking-[0.1em] sm:w-[calc(100%-4rem)] sm:flex-row sm:justify-between">
      <p>Yen-Chen Feng / 馮妍禎</p>
      <p className="hidden sm:block">HCI · Physical Computing · Web</p>
      <p>2026</p>
    </footer>
  );
}

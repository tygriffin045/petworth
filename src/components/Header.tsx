import { SiteNav } from "./SiteNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#f3f6f1]/90 backdrop-blur-md">
      <SiteNav />
    </header>
  );
}

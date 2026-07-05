import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {siteConfig.version}
          </span>
        </div>

        <nav
          aria-label="Alt bilgi"
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm"
          >
            Discord
          </a>
        </nav>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

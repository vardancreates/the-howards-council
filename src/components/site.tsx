import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";
import { address, courses, phone, phoneLabel, siteName, whatsapp } from "@/lib/site-data";

const logo = logoAsset.url;

const nav = [
  { to: "/", label: "Home" },
  { to: "/batches", label: "Batches" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Action({ children, href, subtle = false, className = "" }: { children: ReactNode; href: string; subtle?: boolean; className?: string }) {
  const ext = href.startsWith("http");
  return (
    <Button asChild variant={subtle ? "outline" : "default"} className={`h-12 rounded-sm px-6 font-bold shadow-none ${className}`}>
      <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>{children}</a>
    </Button>
  );
}

/** Same look as the outlined Action, for internal links. */
export const outlineLink = "inline-flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-ink px-6 font-bold transition-colors hover:bg-ink hover:text-ink-foreground";

/** Visually intentional marker for content still to be supplied by the institute. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-sm border border-dashed border-coral-deep/50 bg-accent px-2 py-0.5 text-sm font-medium text-coral-deep">{children}</span>;
}

export const makeHead = (title: string, description: string, path?: string) => {
  const full = title.includes(siteName) ? title : `${title} | ${siteName}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(path ? [{ property: "og:url", content: path }] : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: path ? [{ rel: "canonical", href: path }] : [],
  };
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const link = "hover:text-coral-deep data-[status=active]:text-coral-deep";
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link to="/" aria-label={`${siteName} home`} onClick={close} className="shrink-0">
          <img src={logo} alt={siteName} width={140} height={56} className="h-14 w-auto" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-bold lg:flex xl:gap-7">
          <Link to="/" activeOptions={{ exact: true }} className={link}>Home</Link>
          <div className="group relative">
            <Link to="/courses" className={`flex items-center gap-1 ${link}`}>Courses <ChevronDown size={14} /></Link>
            <div className="invisible absolute left-0 top-full w-64 pt-5 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="border border-border bg-card p-2 shadow-xl">
                <Link to="/courses" className="block px-3 py-2 font-bold hover:bg-muted">All courses</Link>
                {courses.map((c) => (
                  <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="block px-3 py-2 font-medium hover:bg-muted">{c.name}</Link>
                ))}
              </div>
            </div>
          </div>
          {nav.slice(1).map((item) => (
            <Link key={item.to} to={item.to} className={link}>{item.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Action href={whatsapp("Hi! I'd like to book a free demo class.")}>Book Free Demo <ArrowRight size={16} /></Action>
        </div>
        <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="max-h-[calc(100vh-5rem)] overflow-auto border-t bg-background px-5 py-2 lg:hidden">
          <Link onClick={close} to="/" activeOptions={{ exact: true }} className="block py-3 font-bold data-[status=active]:text-coral-deep">Home</Link>
          <Link onClick={close} to="/courses" activeOptions={{ exact: true }} className="block border-t py-3 font-bold data-[status=active]:text-coral-deep">Courses</Link>
          <div className="grid grid-cols-2 gap-x-4 pb-2">
            {courses.map((c) => (
              <Link onClick={close} key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="block py-2 pl-3 text-sm text-muted-foreground data-[status=active]:text-coral-deep">{c.name}</Link>
            ))}
          </div>
          {nav.slice(1).map((item) => (
            <Link onClick={close} key={item.to} to={item.to} className="block border-t py-3 font-bold data-[status=active]:text-coral-deep">{item.label}</Link>
          ))}
          <div className="border-t py-4"><Action className="w-full" href={whatsapp("Hi! I'd like to book a free demo class.")}>Book Free Demo</Action></div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const col = "font-display text-lg font-bold";
  const a = "hover:text-secondary";
  return (
    <>
      <footer className="bg-ink px-5 pb-24 pt-14 text-ink-foreground md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <img src={logo} alt={siteName} width={160} height={64} loading="lazy" className="h-16 w-auto rounded-sm bg-background p-1" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/70">A language training institute in Meerut offering English test preparation, spoken English and foreign language courses.</p>
          </div>
          <div>
            <h2 className={col}>Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/courses" className={a}>Courses</Link></li>
              {nav.map((i) => <li key={i.to}><Link to={i.to} className={a}>{i.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className={col}>Courses</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {courses.map((c) => <li key={c.slug}><Link to="/courses/$slug" params={{ slug: c.slug }} className={a}>{c.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className={col}>Contact</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-ink-foreground/70">{address.line1},<br />{address.line2}</address>
            <a href={`tel:${phone}`} className="mt-3 block font-bold">{phoneLabel}</a>
            <a href={whatsapp("Hi! I'd like to know more about your courses.")} target="_blank" rel="noreferrer" className="mt-1 block text-sm text-secondary">Message on WhatsApp</a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-ink-foreground/20 pt-6 text-xs text-ink-foreground/60 lg:px-8">
          <span>© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span className="flex gap-5"><Link to="/privacy" className={a}>Privacy Policy</Link><span>Website by Veb Studio</span></span>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background p-2 shadow-lg md:hidden">
        <Button asChild variant="outline" className="h-12 rounded-sm"><a href={`tel:${phone}`}><Phone size={17} /> Call</a></Button>
        <Button asChild className="h-12 rounded-sm bg-whatsapp text-primary-foreground hover:bg-whatsapp/90">
          <a href={whatsapp("Hi! I'd like to know more about your courses.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
        </Button>
      </div>
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="overflow-x-clip"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-coral-deep">{children}</p>;
}
export function Photo({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" className={`h-full w-full object-cover ${className}`} />;
}
export function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8 lg:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.04] sm:text-5xl md:text-7xl">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

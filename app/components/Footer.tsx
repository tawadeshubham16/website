import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const complianceBadges = ["Ireland registered", "VAT registered", "GDPR aligned"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#0d1533] via-[#0b1c42] to-[#08112b] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(900px at 15% 20%, rgba(74,117,255,0.18), transparent 55%), radial-gradient(800px at 85% 10%, rgba(80,201,255,0.12), transparent 45%), linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 md:py-12">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold leading-tight md:text-2xl">
            Neesh Enterprise Strategies Limited
          </h2>
          <p className="text-sm text-slate-200/90">
            Contract-led engineering across Ireland & the EU.
          </p>
          <div className="flex flex-wrap gap-2">
            {complianceBadges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-dashed border-white/30 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100/90 shadow-inner"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#8fb5ff] shadow-[0_0_0_4px_rgba(143,181,255,0.12)]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d3fa7] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(29,63,167,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(29,63,167,0.28)]"
          >
            Send inquiry
          </Link>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-4 py-6 text-xs text-slate-200 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex flex-wrap gap-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-semibold transition hover:border-white/25 hover:bg-white/10"
            >
              {label}
              <ArrowIcon className="h-3.5 w-3.5 text-[#8fb5ff]" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <LocationIcon className="h-4 w-4 text-[#8fb5ff]" />
          <span>Ireland & EU</span>
          <span className="text-slate-500">|</span>
          <span>© {year} Neesh Enterprise Strategies Limited</span>
        </div>
      </div>
    </footer>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 8H12.5M12.5 8L9.25 4.75M12.5 8L9.25 11.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11.5C11.3807 11.5 12.5 10.3807 12.5 9C12.5 7.61929 11.3807 6.5 10 6.5C8.61929 6.5 7.5 7.61929 7.5 9C7.5 10.3807 8.61929 11.5 10 11.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16 9C16 12.866 12.5 16.5 10 17.5C7.5 16.5 4 12.866 4 9C4 5.68629 6.68629 3 10 3C13.3137 3 16 5.68629 16 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

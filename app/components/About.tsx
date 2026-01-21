const complianceBadges = [
  "Ireland registered",
  "CRO compliant",
  "VAT registered",
  "GDPR compliant",
];

const highlights = [
  {
    title: "Ireland-registered B2B",
    copy: "Independent, tax-compliant contractor registered in Ireland.",
    Icon: BuildingIcon,
  },
  {
    title: "Contract-led delivery",
    copy: "Statements of work with accountable delivery, quality, and risk.",
    Icon: ContractIcon,
  },
  {
    title: "EU-wide coverage",
    copy: "Consulting and delivery for clients across Ireland and the EU.",
    Icon: GlobeIcon,
  },
  {
    title: "Data & compliance first",
    copy: "GDPR-aligned services; no sponsorship or payroll required.",
    Icon: ShieldIcon,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#f8f9ff] to-white py-16 text-[#0f1f4b] md:py-24"
      style={{ scrollMarginTop: "var(--navbar-height)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(900px at 10% 0%, rgba(29,63,167,0.08), transparent 45%), radial-gradient(800px at 90% 20%, rgba(106,98,228,0.08), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(247,249,255,0.6) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5c6fb1]">
            About
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Neesh Enterprise Strategies Limited
          </h2>
          <p className="max-w-3xl text-sm text-slate-600 md:text-base">
            Ireland-registered independent technology consulting and IT services
            company operating across Ireland and the EU.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {complianceBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[#d7def8] bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#1d3fa7]"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1d3fa7] via-[#6a62e4] to-[#1d3fa7]" />
            <div className="relative space-y-4 px-6 py-7 md:px-8">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Neesh Enterprise Strategies Limited is an Ireland-registered technology
                consulting and IT services company delivering solutions on a business-to-business
                basis. The company is fully compliant with Irish corporate and tax regulations and
                operates as an independent contractor entity.
              </p>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Services span IT consulting, software development, and technology advisory across
                Ireland and the EU. All services are delivered under clear contractual arrangements,
                with full responsibility for delivery, quality, and risk assumed by the company.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[22px] top-6 hidden h-[calc(100%-60px)] w-px bg-gradient-to-b from-[#d7def8] via-[#d7def8] to-transparent md:block" />
            <div className="space-y-4">
              {highlights.map(({ title, copy, Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white/92 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eef0ff] to-[#e8f3ff] text-[#1d3fa7] shadow-[0_8px_20px_rgba(29,63,167,0.12)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold leading-tight text-[#0f1f4b]">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 4V20M15 4V20M4 10H20M9 8H10M14 8H15M9 12H10M14 12H15M9 16H10M14 16H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContractIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="4"
        width="12"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 8H13M9 11H13M9 14H11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 8.5L19 10.5L15 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5C9.5 6 8.5 9 8.5 12C8.5 15 9.5 18 12 20.5C14.5 18 15.5 15 15.5 12C15.5 9 14.5 6 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 9.5H20M4 14.5H20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L6 6V11C6 15 8.4 18.6 12 20C15.6 18.6 18 15 18 11V6L12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5L11.3 13.3C11.7 13.7 12.3 13.7 12.7 13.3L14.5 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

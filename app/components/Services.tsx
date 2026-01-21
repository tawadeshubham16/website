import type { ComponentType } from "react";

type Service = {
  title: string;
  description: string;
  badge?: string;
  Icon: ComponentType<{ className?: string }>;
};

const services: Service[] = [
  {
    title: "Frontend / Full-Stack Development",
    description:
      "Building modern, scalable web applications with clean UI, strong performance, integrations, and maintainable code that fits seamlessly into existing teams.",
    badge: "Delivery focused",
    Icon: CodeIcon,
  },
  {
    title: "Day Rate Contracting",
    description:
      "Flexible day-rate engagements with rapid onboarding and immediate impact on product and engineering outcomes.",
    badge: "Immediate start",
    Icon: CalendarFlashIcon,
  },
  {
    title: "6 / 12 Month Contracts",
    description:
      "Medium to long-term engagements for continuity, feature ownership, and consistent delivery over time.",
    badge: "Steady delivery",
    Icon: TimelineIcon,
  },
  {
    title: "Hybrid / Remote Availability",
    description:
      "Open to hybrid or fully remote work, with on-site availability in Dublin and Galway when required.",
    badge: "Hybrid friendly",
    Icon: LocationIcon,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-16 text-[#0f1f4b] md:py-24"
      style={{ scrollMarginTop: "var(--navbar-height)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(900px at 10% 0%, rgba(29,63,167,0.08), transparent 45%), radial-gradient(800px at 90% 15%, rgba(106,98,228,0.08), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5c6fb1]">
            Services
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Partnering with teams to ship reliable software
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Engagement options designed to plug into your workflow—front-end and
            full-stack delivery with flexibility for your roadmap.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, Icon, badge }) => (
            <div
              key={title}
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1d3fa7] via-[#6a62e4] to-[#1d3fa7]" />
              <div className="grid grid-cols-[auto,1fr] items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eef0ff] to-[#e8f3ff] text-[#1d3fa7] shadow-[0_8px_20px_rgba(29,63,167,0.12)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold leading-tight">
                      {title}
                    </h3>
                  </div>
                  {badge && (
                    <span className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-semibold text-[#1d3fa7] capitalize">
                      {badge}
                    </span>
                  )}
                  <p className="text-sm leading-relaxed text-slate-700">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeIcon({ className }: { className?: string }) {
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
        d="M14 6L10 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 9L4 12L8 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9L20 12L16 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarFlashIcon({ className }: { className?: string }) {
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
        y="6"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 4V8M16 4V8M4 10H20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 11L10.5 14H13L10.5 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimelineIcon({ className }: { className?: string }) {
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
        d="M5 6H19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 12H14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 18H11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="7" cy="6" r="1.3" fill="currentColor" />
      <circle cx="16" cy="12" r="1.3" fill="currentColor" />
      <circle cx="13" cy="18" r="1.3" fill="currentColor" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
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
        d="M12 21C12 21 19 15.7279 19 10.5C19 6.35786 15.6421 3 12 3C8.35786 3 5 6.35786 5 10.5C5 15.7279 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

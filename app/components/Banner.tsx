import Link from "next/link";
import banner from "../assets/banner.png";

type IconProps = {
  className?: string;
};

const expertise = [
  {
    title: "Frontend",
    stack: "React, Angular",
    accent: "bg-[#e5edff] text-[#233f9c]",
    Icon: FrontendIcon,
  },
  {
    title: "Backend",
    stack: "Spring Boot, Node.js",
    accent: "bg-[#e7f2ff] text-[#1c5a99]",
    Icon: BackendIcon,
  },
  {
    title: "Cloud",
    stack: "AWS",
    accent: "bg-[#e8f6ff] text-[#0f6ab4]",
    Icon: CloudIcon,
  },
  {
    title: "Delivery",
    stack: "CI/CD, Testing, Monitoring",
    accent: "bg-[#f1ebff] text-[#5a3fa5]",
    Icon: DeliveryIcon,
  },
];

const highlightTags = ["Day Rate", "Hybrid/Remote", "Ireland Based"];

export default function Banner() {
  return (
    <section
      className="relative isolate overflow-hidden text-slate-900"
      style={{ minHeight: "calc(100vh - var(--navbar-height))" }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/82 via-white/56 to-white/10 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 lg:py-24">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a7bb5]">
            Full-Stack Contract Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[#0f1f4b] md:text-5xl lg:text-6xl">
            Full-Stack Contract Engineer in Ireland
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            I help teams deliver modern web applications using React/Angular,
            Java/Spring Boot, Node.js, Docker, and AWS — fast onboarding, clean
            execution, production-ready results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-xl bg-[#1d3fa7] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(29,63,167,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(29,63,167,0.3)]"
            >
              Check availability
            </Link>
          </div>
        </div>

        <div className="w-full md:max-w-md">
          <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-[#0f1f4b]">
                Expertise Overview
              </h3>
              <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1d3fa7]">
                Available
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {expertise.map(({ title, stack, accent, Icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl bg-[#f6f8ff] px-4 py-3"
                >
                  <span
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-2xl ${accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0f1f4b]">
                      {title}
                    </p>
                    <p className="text-sm text-slate-600">{stack}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {highlightTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d9e0fb] bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#1d3fa7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrontendIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 12L10 9.5M7 12L10 14.5M7 12H12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="13.5" cy="12" r="1.2" fill="currentColor" />
      <circle cx="19.5" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function BackendIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="4"
        y="10"
        width="16"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="4"
        y="15"
        width="16"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="7" cy="7" r="0.8" fill="currentColor" />
      <circle cx="7" cy="12" r="0.8" fill="currentColor" />
      <circle cx="7" cy="17" r="0.8" fill="currentColor" />
    </svg>
  );
}

function CloudIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17H17C19.2091 17 21 15.2091 21 13C21 10.9335 19.5531 9.24953 17.5623 9.0254C16.9194 6.71853 14.8115 5 12.3333 5C9.57149 5 7.33333 7.23815 7.33333 10C5.49238 10 4 11.4924 4 13.3333C4 15.1743 5.49238 16.6667 7.33333 16.6667H9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.5L12 12.5L14 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeliveryIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.5"
        y="7"
        width="17"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 12H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11 9.5H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11 14.5H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

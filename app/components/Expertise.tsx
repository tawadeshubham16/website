import type { ComponentType } from "react";

type Item = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  accent: string;
};

const items: Item[] = [
  {
    title: "Frontend Excellence",
    description:
      "Crafting modern, responsive user interfaces with React and Angular as an integrated team member. Contributing to engaging web applications with exceptional user experiences.",
    Icon: FrontendIcon,
    accent: "bg-[#e7edff] text-[#1d3fa7]",
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications using Spring Boot, Java, and Node.js. Collaborating on scalable APIs and microservices architecture within your development team.",
    Icon: BackendIcon,
    accent: "bg-[#e9f4ff] text-[#175a9a]",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Working with AWS cloud solutions, Docker containerization, and CI/CD pipelines. Contributing to modern infrastructure and deployment practices.",
    Icon: CloudIcon,
    accent: "bg-[#e7f7ff] text-[#0f6ab4]",
  },
  {
    title: "Full Stack Integration",
    description:
      "Seamlessly joining product teams to deliver end-to-end solutions. From database design to frontend implementation, contributing across the entire stack.",
    Icon: FullstackIcon,
    accent: "bg-[#f1ebff] text-[#5a3fa5]",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-white to-white py-16 md:py-24"
      style={{ scrollMarginTop: "var(--navbar-height)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(900px at 10% 15%, rgba(29,63,167,0.08), transparent 45%), radial-gradient(800px at 90% 10%, rgba(15,31,75,0.08), transparent 40%)",
        }}
      />
      <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-[#cfd8ff] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#6a7bb5]">
          Collaboration in action
        </p>
        <div className="mt-3 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold leading-[1.1] text-[#0f1f4b] md:text-4xl">
            What I bring to your team
          </h2>
          <p className="max-w-3xl text-sm text-slate-600 md:text-base">
            Drop-in expertise that integrates with your workflows, accelerates
            delivery, and keeps quality high across the stack.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
          {items.map(({ title, description, Icon, accent }) => (
            <div
              key={title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white/92 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span
                  className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl md:flex ${accent}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl md:hidden ${accent}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#0f1f4b]">
                      {title}
                    </h3>
                  </div>
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

function FrontendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 11L10 8.5M7 11L10 13.5M7 11H12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="14" r="1" fill="currentColor" />
      <circle cx="19" cy="14" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function BackendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="4"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="4"
        y="10"
        width="16"
        height="4"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="4"
        y="15"
        width="16"
        height="4"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 7H7.01M7 12H7.01M7 17H7.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16H16.5C18.433 16 20 14.433 20 12.5C20 10.567 18.433 9 16.5 9C16.3551 9 16.212 9.00891 16.0714 9.02613C15.5482 6.73404 13.5235 5 11.0714 5C8.2874 5 6 7.23858 6 10.0226C4.34315 10.0226 3 11.3658 3 13.0226C3 14.6795 4.34315 16.0226 6 16.0226H9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5L12 12L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FullstackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="4"
        y="12"
        width="16"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 8H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 16H12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14.5" cy="16" r="0.8" fill="currentColor" />
      <circle cx="17" cy="16" r="0.8" fill="currentColor" />
    </svg>
  );
}

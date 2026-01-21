const contactEmail = "hello@neesh.ie";

const mailtoLink = `mailto:${contactEmail}?subject=Contract%20Engineer%20Inquiry&body=Email:%0AMessage:%0A`;

const includeItems = [
  {
    text: "Role you’re filling and desired start date",
    Icon: CalendarIcon,
  },
  {
    text: "Tech stack and team size",
    Icon: StackIcon,
  },
  {
    text: "Engagement length and day-rate expectations",
    Icon: DurationIcon,
  },
  {
    text: "Any compliance or onboarding requirements",
    Icon: ShieldIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7f9ff] via-white to-white py-16 text-[#0f1f4b] md:py-24"
      style={{ scrollMarginTop: "var(--navbar-height)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(900px at 20% 20%, rgba(29,63,167,0.12), transparent 45%), radial-gradient(800px at 80% 10%, rgba(91,155,255,0.1), transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5c6fb1]">
            Business & recruiter inquiries
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Ready to discuss?
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Send the essentials and I&apos;ll respond quickly with availability,
            next steps, and a fit check.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="rounded-3xl border border-slate-100 bg-white/92 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur md:p-8">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-[#1d3fa7]" />
              <h3 className="text-lg font-semibold">Send an inquiry</h3>
            </div>
            <form
              className="mt-6 space-y-7"
              action={mailtoLink}
              method="POST"
              encType="text/plain"
            >
              <label className="space-y-2.5 text-sm text-slate-700">
                <span className="mb-1">Email:</span>
                <input
                  name="Email"
                  type="email"
                  required
                  className="mb-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[#0f1f4b] placeholder:text-slate-400 outline-none transition focus:border-[#1d3fa7] focus:ring-2 focus:ring-[#1d3fa7]/15"
                  placeholder="alex@company.com"
                />
              </label>
              <label className="mt-3 space-y-2.5 text-sm text-slate-700">
                <span className="mb-1">Message:</span>
                <textarea
                  name="Message"
                  rows={8}
                  className="mb-2 w-full rounded-xl border resize-none border-slate-200 bg-white px-3 py-2 text-[#0f1f4b] placeholder:text-slate-400 outline-none transition focus:border-[#1d3fa7] focus:ring-2 focus:ring-[#1d3fa7]/15"
                  placeholder="Hi there! I’m looking for a full stack engineer to help with..."
                  required
                />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d3fa7] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(29,63,167,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(29,63,167,0.28)]"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-5 rounded-3xl border border-slate-100 bg-white/92 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur md:p-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#5c6fb1]">
                What to include
              </p>
              <div className="grid gap-3">
                {includeItems.map(({ text, Icon }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#eef0ff] text-[#1d3fa7]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
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
        x="3.5"
        y="6"
        width="17"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 8L11.2 12.6C11.7065 12.9377 12.2935 12.9377 12.8 12.6L19.5 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3.5V5.5M14 3.5V5.5M4.5 7.5H15.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="5.5"
        width="12"
        height="10.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 11H9M11 11H12M8 13H9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7L10 4L16 7L10 10L4 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M4 10L10 13L16 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.5L10 15.5L16 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DurationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4V2.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="11"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10 8V11L12.2 12.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.5L4.5 4.25V9.5C4.5 12.45 6.52 15.14 9.35 16.1L10 16.33L10.65 16.1C13.48 15.14 15.5 12.45 15.5 9.5V4.25L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10L9.2 11.7C9.6 12.1 10.2 12.1 10.6 11.7L13 9.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

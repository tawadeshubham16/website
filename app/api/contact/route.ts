import { NextResponse } from "next/server";

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@neesh.ie";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_EMAIL_URL = "https://api.resend.com/emails";
const MAX_MESSAGE_LENGTH = 5000;

type TurnstileResult = {
  success: boolean;
  "error-codes"?: string[];
};

function invalid(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

function getClientIp(req: Request) {
  const forwarded =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for");

  return forwarded?.split(",")[0]?.trim();
}

async function verifyTurnstile(token: string, ip?: string) {
  const formData = new URLSearchParams();
  formData.append("secret", TURNSTILE_SECRET_KEY!);
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });

  if (!response.ok) {
    throw new Error(`Turnstile responded with ${response.status}`);
  }

  return (await response.json()) as TurnstileResult;
}

async function sendEmail({
  fromEmail,
  replyEmail,
  message,
}: {
  fromEmail: string;
  replyEmail: string;
  message: string;
}) {
  const response = await fetch(RESEND_EMAIL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [CONTACT_TO_EMAIL],
      reply_to: replyEmail,
      subject: "New website inquiry",
      text: `From: ${replyEmail}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend failed (${response.status}): ${errorBody}`);
  }
}

export async function POST(req: Request) {
  if (!TURNSTILE_SECRET_KEY) {
    return invalid("Server is missing TURNSTILE_SECRET_KEY.", 500);
  }

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    return invalid(
      "Server is missing RESEND_API_KEY or CONTACT_FROM_EMAIL.",
      500,
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return invalid("Request body must be valid JSON.");
  }

  const email = normalizeString((body as { email?: unknown }).email);
  const message = normalizeString((body as { message?: unknown }).message);
  const turnstileToken = normalizeString(
    (body as { turnstileToken?: unknown }).turnstileToken,
  );

  if (!email || !message || !turnstileToken) {
    return invalid("Email, message, and Turnstile token are required.");
  }

  if (!isEmail(email)) {
    return invalid("Email must be a valid address.");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return invalid("Message is too long.");
  }

  const requesterIp = getClientIp(req);

  let turnstileResult: TurnstileResult;
  try {
    turnstileResult = await verifyTurnstile(turnstileToken, requesterIp);
  } catch (error) {
    console.error("Turnstile verification error", error);
    return invalid("Unable to verify Turnstile token. Please try again.", 502);
  }

  if (!turnstileResult.success) {
    return invalid(
      `Turnstile verification failed${
        turnstileResult["error-codes"]?.length
          ? `: ${turnstileResult["error-codes"].join(", ")}`
          : ""
      }.`,
      400,
    );
  }

  try {
    await sendEmail({
      fromEmail: CONTACT_FROM_EMAIL,
      replyEmail: email,
      message,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return invalid("Unable to send message right now. Please try again later.", 502);
  }

  return NextResponse.json({ ok: true });
}

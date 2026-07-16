export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  /** Honeypot field — must stay empty. Bots tend to fill every input. */
  botcheck?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Sends the contact form to the owner's inbox via Web3Forms — a no-backend
 * email delivery service. The access key is public by design (it only maps
 * to a destination email), so it lives in a NEXT_PUBLIC_ env var.
 *
 * Setup: create a free key at https://web3forms.com using the destination
 * email, then set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in `.env.local`.
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<{ ok: true }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Email service is not configured yet. Please email me directly for now.",
    );
  }

  // Silently accept spam bots that fill the honeypot — no email is sent.
  if (values.botcheck) {
    return { ok: true };
  }

  let response: Response;
  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: values.name,
        email: values.email,
        message: values.message,
        subject: `New portfolio message from ${values.name}`,
        from_name: "Portfolio Contact Form",
        replyto: values.email,
      }),
    });
  } catch {
    throw new Error("Network error. Please check your connection and try again.");
  }

  const data: { success?: boolean; message?: string } = await response
    .json()
    .catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(
      data.message ?? "Something went wrong while sending your message.",
    );
  }

  return { ok: true };
}

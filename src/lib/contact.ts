export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(
  values: ContactFormValues,
): Promise<{ ok: true }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Email service is not configured yet. Please email me directly for now.",
    );
  }

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

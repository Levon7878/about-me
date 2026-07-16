"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { submitContactForm, type ContactFormValues } from "@/lib/contact";

/**
 * Encapsulates contact-form state: validation (React Hook Form)
 * and async submission (TanStack Query mutation). Keeps the UI dumb.
 */
export function useContactForm() {
  const form = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", message: "", botcheck: "" },
    mode: "onTouched",
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => form.reset(),
  });

  const onSubmit = form.handleSubmit((values) => mutation.mutate(values));

  return {
    register: form.register,
    errors: form.formState.errors,
    onSubmit,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error as Error | null,
    reset: mutation.reset,
  };
}

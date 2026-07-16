"use client";

import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { useContactForm } from "@/hooks/useContactForm";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

const fieldClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const { register, errors, onSubmit, isSubmitting, isSuccess, isError, error } =
    useContactForm();

  return (
    <Section id="contact" aria-label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-5">
        {/* Contact details */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:col-span-2"
        >
          <motion.a
            variants={fadeInUp}
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted">Email</p>
              <p className="truncate font-medium group-hover:text-primary">
                {profile.email}
              </p>
            </div>
          </motion.a>

          {profile.phone && (
            <motion.a
              variants={fadeInUp}
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted">Phone</p>
                <p className="truncate font-medium group-hover:text-primary">
                  {profile.phone}
                </p>
              </div>
            </motion.a>
          )}

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="text-xs text-muted">Location</p>
              <p className="font-medium">{profile.location}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-auto">
            <p className="mb-3 text-sm text-muted">Find me online</p>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-7 lg:col-span-3"
        >
          {/* Honeypot: hidden from users, catches spam bots. */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="sr-only"
            {...register("botcheck")}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className={cn(fieldClasses, errors.name && "border-red-500/60")}
                {...register("name", { required: "Please enter your name." })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className={cn(fieldClasses, errors.email && "border-red-500/60")}
                {...register("email", {
                  required: "Please enter your email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              aria-invalid={!!errors.message}
              className={cn(fieldClasses, "resize-none", errors.message && "border-red-500/60")}
              {...register("message", {
                required: "Please enter a message.",
                minLength: { value: 10, message: "Message is a little too short." },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="size-4" />
                </>
              )}
            </Button>

            {isSuccess && (
              <span className="inline-flex items-center gap-1.5 text-sm text-green-500">
                <CheckCircle2 className="size-4" />
                Message sent!
              </span>
            )}
            {isError && (
              <span className="text-sm text-red-500" role="alert">
                {error?.message ?? "Something went wrong."}
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

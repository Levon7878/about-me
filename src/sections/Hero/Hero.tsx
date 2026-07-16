"use client";

import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/common/SocialLinks";
import { profile, stats } from "@/data/profile";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="animate-aurora absolute -top-24 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-aurora absolute top-24 right-0 size-[24rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {profile.availableForWork && (
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                Available for new opportunities
              </motion.span>
            )}

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m <span className="text-gradient">Levon Babagulyan</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 flex items-center gap-2 text-lg font-medium text-primary sm:text-xl"
            >
              <Sparkles className="size-5" />
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.shortBio}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Button as="a" href="#projects" size="lg">
                View my work
                <ArrowRight className="size-4" />
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="lg">
                Get in touch
              </Button>
              {profile.resumeUrl && (
                <Button as="a" href={profile.resumeUrl} variant="ghost" size="lg">
                  <Download className="size-4" />
                  Resume
                </Button>
              )}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex items-center gap-4 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" />
                {profile.location}
              </span>
              <span className="h-4 w-px bg-border" />
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="order-first lg:order-last"
          >
            <HeroPortrait />
          </motion.div>
        </div>

        <motion.dl
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted sm:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}

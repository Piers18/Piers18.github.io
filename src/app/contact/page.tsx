"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { socials } from "@/data/socials";
import SocialIcon from "@/components/helpers/SocialIcon";
import { containerVariants, itemVariants } from "@/lib/motionVariants";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pieroaguilaranticonajob@gmail.com",
    href: "mailto:pieroaguilaranticonajob@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+51 957 369 914",
    href: "tel:+51957369914",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Peru",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-12 sm:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl font-light tracking-tight sm:text-4xl">
            Get in Touch
          </h1>
          <p className="text-base font-light leading-7 text-muted-foreground sm:text-lg">
            Open to collaborations, freelance projects, and new opportunities.
            Feel free to reach out.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-card border border-dashed border-border/80 p-4 rounded-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
                <Icon size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-base font-light text-foreground hover:underline underline-offset-4"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-light text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-light tracking-tight">Socials</h2>
          <div className="flex items-center gap-4">
            {socials.map(({ name, icon, darkIcon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-card border border-dashed border-border/80 px-4 py-2.5 rounded-xl hover:bg-accent transition-colors"
              >
                <SocialIcon
                  icon={icon}
                  darkIcon={darkIcon}
                  alt={name}
                  className="h-5 w-5"
                />
                <span className="text-sm font-light">{name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

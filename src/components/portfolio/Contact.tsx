import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ahmedswabah.dev@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Thanks for reaching out!" });
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great."
      description="Open to collaboration, product innovation, and ambitious ideas. Drop a message — I reply fast."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {[
            { icon: Mail, label: "Email", value: "ahmedswabah.dev@gmail.com", href: "mailto:ahmedswabah.dev@gmail.com" },
            { icon: Github, label: "GitHub", value: "@swabah", href: "https://github.com/swabah" },
            { icon: Linkedin, label: "LinkedIn", value: "sw-abah", href: "https://www.linkedin.com/in/sw-abah/" },
            { icon: MapPin, label: "Location", value: "Kozhikode, Kerala" },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all">
                <span className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 inline-flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium truncate">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl border border-border bg-card/50 p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="bg-background/60 border-border focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="bg-background/60 border-border focus-visible:ring-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</Label>
            <Textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project, idea, or role…"
              className="bg-background/60 border-border focus-visible:ring-primary resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow rounded-full px-6">
            Send message <Send className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};

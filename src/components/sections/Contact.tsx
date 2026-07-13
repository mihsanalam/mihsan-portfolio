"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Access key configuration loaded from environment variables
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("Web3Forms Access Key is missing. Please define NEXT_PUBLIC_WEB3FORMS_KEY in your environment.");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-sm font-mono text-accent">08. Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">Let&apos;s Work Together</h2>
          <div className="w-16 h-1 bg-accent/30 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-text-secondary leading-relaxed">
              I&apos;m currently available for freelance work and full-time opportunities.
              If you have a project in mind or just want to chat, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href="mailto:mdmihsanalam@gmail.com" aria-label="Send email to mdmihsanalam@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all group">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><Mail size={18} aria-hidden="true" /></div>
                <div>
                  <p className="text-xs text-text-secondary">Email</p>
                  <p className="text-sm text-text-primary group-hover:text-accent transition-colors">mdmihsanalam@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/mihsanalam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Mihsan Alam" className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all group">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><FaLinkedinIn size={18} aria-hidden="true" /></div>
                <div>
                  <p className="text-xs text-text-secondary">LinkedIn</p>
                  <p className="text-sm text-text-primary group-hover:text-accent transition-colors">linkedin.com/in/mihsanalam</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent"><MapPin size={18} aria-hidden="true" /></div>
                <div>
                  <p className="text-xs text-text-secondary">Location</p>
                  <p className="text-sm text-text-primary">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Available for work</span>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-1.5">Name</label>
              <input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/60 focus:shadow-[0_0_15px_rgba(123,111,232,0.1)] transition-all placeholder:text-text-secondary/60" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1.5">Email</label>
              <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/60 focus:shadow-[0_0_15px_rgba(123,111,232,0.1)] transition-all placeholder:text-text-secondary/60" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-text-secondary mb-1.5">Subject</label>
              <input id="subject" type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/60 focus:shadow-[0_0_15px_rgba(123,111,232,0.1)] transition-all placeholder:text-text-secondary/60" placeholder="Project inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
              <textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:outline-none focus:border-accent/60 focus:shadow-[0_0_15px_rgba(123,111,232,0.1)] transition-all resize-none placeholder:text-text-secondary/60" placeholder="Tell me about your project..." />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(123,111,232,0.25)] hover:shadow-[0_0_30px_rgba(123,111,232,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" /> Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm mt-3"
              >
                Thank you! Your message has been sent successfully. I will get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm mt-3"
              >
                Failed to send message. Please try again or email me directly at mdmihsanalam@gmail.com.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Linkedin, Github, Twitter, Facebook, Phone, Copy, Check, Send, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopyPhone = (num) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(num);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 }
    });

    setTimeout(() => setCopiedPhone(''), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[var(--color-card)]/50 border-t-2 border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b-2 border-[var(--color-border)] pb-4">
          <span className="text-2xl text-[var(--color-accent-crimson)]">✦</span>
          <h2 className="font-display font-extrabold text-xl sm:text-4xl uppercase text-[var(--color-text-main)]">
            GET IN TOUCH &amp; LINKS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Direct Links & Contact Pills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="retro-card p-6 sm:p-8 flex-1 space-y-6">

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[var(--color-accent-yellow)]" />
                  <h3 className="font-display font-bold text-2xl uppercase text-[var(--color-text-main)]">
                    ✦ DIRECT CONTACT
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Have a creative project, motion design mandate, or full-stack web application in mind? Reach out directly via email, phone, or social channels below.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="bg-[var(--color-card-secondary)] p-3.5 sm:p-4 rounded-md border-2 border-[var(--color-border)] flex items-center justify-between gap-2.5 shadow-[2px_2px_0px_var(--color-border)]">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <div className="p-2 rounded bg-[var(--color-accent-crimson)] text-white shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-tech text-[9px] sm:text-[10px] uppercase font-bold text-[var(--color-text-muted)] block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-tech text-xs sm:text-sm font-bold text-[var(--color-text-main)] truncate block hover:text-[var(--color-accent-crimson)] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 sm:px-3 py-1.5 bg-[var(--color-card)] hover:bg-[var(--color-pill-bg)] border border-[var(--color-border)] rounded text-[11px] sm:text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent-sage)]" />
                      <span className="text-[var(--color-accent-sage)]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--color-text-main)]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Numbers Section */}
              <div className="space-y-3">
                <h4 className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
                  <span>DIRECT PHONE NUMBERS</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone Primary */}
                  <div className="bg-[var(--color-card-secondary)] p-3 rounded border border-[var(--color-border)] flex items-center justify-between gap-2 shadow-[2px_2px_0px_var(--color-border)]">
                    <div className="min-w-0">
                      <span className="font-tech text-[9px] uppercase font-bold text-[var(--color-text-muted)] block">
                        PRIMARY PHONE
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="font-tech text-xs font-bold text-[var(--color-text-main)] hover:text-[var(--color-accent-crimson)] transition-colors block"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopyPhone(personalInfo.phone)}
                      className="p-1.5 bg-[var(--color-card)] hover:bg-[var(--color-pill-bg)] border border-[var(--color-border)] rounded text-xs shrink-0 cursor-pointer"
                      title="Copy Primary Phone"
                    >
                      {copiedPhone === personalInfo.phone ? (
                        <Check className="w-3.5 h-3.5 text-[var(--color-accent-sage)]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[var(--color-text-main)]" />
                      )}
                    </button>
                  </div>

                  {/* Phone Secondary */}
                  <div className="bg-[var(--color-card-secondary)] p-3 rounded border border-[var(--color-border)] flex items-center justify-between gap-2 shadow-[2px_2px_0px_var(--color-border)]">
                    <div className="min-w-0">
                      <span className="font-tech text-[9px] uppercase font-bold text-[var(--color-text-muted)] block">
                        SECONDARY PHONE
                      </span>
                      <a
                        href={`tel:${personalInfo.phoneSecondary}`}
                        className="font-tech text-xs font-bold text-[var(--color-text-main)] hover:text-[var(--color-accent-crimson)] transition-colors block"
                      >
                        {personalInfo.phoneSecondary}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopyPhone(personalInfo.phoneSecondary)}
                      className="p-1.5 bg-[var(--color-card)] hover:bg-[var(--color-pill-bg)] border border-[var(--color-border)] rounded text-xs shrink-0 cursor-pointer"
                      title="Copy Secondary Phone"
                    >
                      {copiedPhone === personalInfo.phoneSecondary ? (
                        <Check className="w-3.5 h-3.5 text-[var(--color-accent-sage)]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[var(--color-text-main)]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <h4 className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                  SOCIAL CHANNELS &amp; PORTFOLIOS
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={formatUrl(personalInfo.github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-card-secondary)] rounded border border-[var(--color-border)] hover:border-[var(--color-accent-yellow)] hover:translate-y-[-2px] transition-all flex items-center gap-3"
                  >
                    <Github className="w-4 h-4 text-[var(--color-accent-yellow)]" />
                    <span className="font-tech text-xs font-bold uppercase text-[var(--color-text-main)]">GITHUB</span>
                  </a>

                  <a
                    href={formatUrl(personalInfo.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-card-secondary)] rounded border border-[var(--color-border)] hover:border-[var(--color-accent-sage)] hover:translate-y-[-2px] transition-all flex items-center gap-3"
                  >
                    <Linkedin className="w-4 h-4 text-[var(--color-accent-sage)]" />
                    <span className="font-tech text-xs font-bold uppercase text-[var(--color-text-main)]">LINKEDIN</span>
                  </a>

                  <a
                    href={formatUrl(personalInfo.twitter)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-card-secondary)] rounded border border-[var(--color-border)] hover:border-[var(--color-accent-crimson)] hover:translate-y-[-2px] transition-all flex items-center gap-3"
                  >
                    <Twitter className="w-4 h-4 text-[var(--color-accent-crimson)]" />
                    <span className="font-tech text-xs font-bold uppercase text-[var(--color-text-main)]">TWITTER / X</span>
                  </a>

                  <a
                    href={formatUrl(personalInfo.facebook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-card-secondary)] rounded border border-[var(--color-border)] hover:border-[#1877F2] hover:translate-y-[-2px] transition-all flex items-center gap-3"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span className="font-tech text-xs font-bold uppercase text-[var(--color-text-main)]">FACEBOOK</span>
                  </a>

                  <a
                    href={formatUrl(personalInfo.behance)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-card-secondary)] rounded border border-[var(--color-border)] hover:border-[var(--color-accent-salmon)] hover:translate-y-[-2px] transition-all flex items-center gap-3 sm:col-span-2"
                  >
                    <span className="font-display font-extrabold text-xs text-[var(--color-accent-salmon)]">Bē</span>
                    <span className="font-tech text-xs font-bold uppercase text-[var(--color-text-main)]">BEHANCE</span>
                  </a>
                </div>
              </div>

              {/* Location Badge */}
              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-tech text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--color-accent-crimson)]" />
                <span>{personalInfo.location}</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="retro-card p-6 sm:p-8 flex-1">

              <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-border-subtle)] pb-3">
                <MessageSquare className="w-5 h-5 text-[var(--color-accent-crimson)]" />
                <h3 className="font-display font-bold text-2xl uppercase text-[var(--color-text-main)]">
                  ✦ SEND A MESSAGE
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-lg bg-[var(--color-card-secondary)] border-2 border-[var(--color-accent-sage)] text-center space-y-4 my-auto">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-sage)] text-white flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[var(--color-text-main)] uppercase">
                    MESSAGE TRANSMITTED !
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                    Thank you for reaching out. I've received your request and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-tech text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean Dupont"
                        className="w-full px-4 py-2.5 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-main)] font-body text-sm focus:border-[var(--color-accent-crimson)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-tech text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean@company.com"
                        className="w-full px-4 py-2.5 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-main)] font-body text-sm focus:border-[var(--color-accent-crimson)] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-tech text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] mb-1">
                      Project Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Web App Development / Motion Design"
                      className="w-full px-4 py-2.5 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-main)] font-body text-sm focus:border-[var(--color-accent-crimson)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] mb-1">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timeline, and aesthetic preferences..."
                      className="w-full px-4 py-2.5 rounded border-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-main)] font-body text-sm focus:border-[var(--color-accent-crimson)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-widest rounded border-2 border-[var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border)] active:translate-y-0 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

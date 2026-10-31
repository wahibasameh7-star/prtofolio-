import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquareCode,
  Terminal,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    const subjectLine = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyText}`;
    setStatus({
      state: 'success',
      message: 'Mail client opened! Sameh will review your message shortly.'
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow & subtle grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMUNICATION PORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Initiate <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Whether you want to discuss AI engineering opportunities, collaborate on an applied vision or embedded ML system, or review technical details — let's connect.
          </p>
        </div>

        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Direct channels & Quick Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card with quick copy */}
            <div className="bento-card p-6 border-emerald-500/20 relative group hover:border-emerald-500/40 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <div className="mt-2.5 text-xs font-mono text-emerald-400 animate-fadeIn flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Address copied to clipboard!
                </div>
              )}
            </div>

            {/* Direct Phone Card */}
            <div className="bento-card p-6 border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Line / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-teal-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Verification Card */}
            <div className="bento-card p-6 border-slate-800/80 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Professional Network</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      linkedin.com/in/sameh-wahiba
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Status Pill */}
            <div className="bento-card p-6 border-slate-800/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Geographic Base</span>
                    <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                All contact credentials and project deliverables match the official curriculum vitae of Sameh Reda Wahiba from Delta University for Science &amp; Technology.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 border-slate-800/80 relative">
              <div className="flex items-center gap-2 mb-6 text-xs font-mono text-emerald-400">
                <MessageSquareCode className="w-4 h-4" />
                <span>DIRECT_TRANSMISSION // FORM</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Ahmed Hassan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. a.hassan@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI Engineering Opportunity / Computer Vision Project"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or question..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Feedback message */}
                {status.message && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-mono flex items-center gap-2 ${
                      status.state === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                        : 'bg-red-500/10 border border-red-500/30 text-red-300'
                    }`}
                  >
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-obsidian-bg font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

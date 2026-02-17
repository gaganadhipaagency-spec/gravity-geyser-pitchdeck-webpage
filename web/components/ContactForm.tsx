"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        classification: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error?.message || 'Failed to send inquiry. Please try again.');
            }

            setIsSubmitted(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 font-mono text-sm uppercase tracking-tight">
                    A TECHNICAL ADVISOR WILL RESPOND WITHIN 24 BUSINESS HOURS.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline"
                >
                    Send another inquiry
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm"
        >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Inquiry</h3>
            <p className="text-slate-500 text-sm mb-8">
                Access technical briefs, licensing terms, and validation data.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                            Contact Name
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full legal name"
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                            Corporate Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@organization.com"
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all rounded"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                            Organization Entity
                        </label>
                        <input
                            required
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder="Full legal company name"
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all rounded"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                            Classification
                        </label>
                        <select
                            required
                            name="classification"
                            value={formData.classification}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all rounded appearance-none cursor-pointer"
                        >
                            <option value="">Select Inquiry Type</option>
                            <option value="licensing">OEM Licensing Discussion</option>
                            <option value="investment">Institutional Investment</option>
                            <option value="technical">Technical Due Diligence</option>
                            <option value="partnership">Strategic Partnership</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                        Technical Brief / Message
                    </label>
                    <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Outline specific technical requirements or strategic interests..."
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all rounded resize-none"
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-xs font-mono">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span className="text-xs uppercase tracking-[0.2em]">Submit Inquiry</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

export default function MissionSection() {
    const patents = ["416895", "468142", "533644"];

    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

                    {/* Left: Headline & Patents */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-mono text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                            Fundamental Innovation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Redefining <br className="hidden lg:block" />
                            Thermal Storage <br className="hidden lg:block" />
                            Architecture
                        </h2>

                        {/* Patent Block */}
                        <div className="pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-semibold text-slate-900 tracking-wide">GRANTED INTELLECTUAL PROPERTY</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {patents.map((patent) => (
                                    <div key={patent} className="inline-flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm font-mono text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                        {patent}
                                    </div>
                                ))}
                                <div className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-slate-400">
                                    VALID TILL 2037
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:pt-12"
                    >
                        <p className="text-2xl md:text-3xl text-slate-900 leading-tight font-medium mb-8">
                            HG SOLTEC Pvt. Ltd. has developed a fundamentally redesigned storage water heater architecture that reduces electricity consumption through selective volume heating, cold water isolation, and gravity-based discharge.
                        </p>
                        <p className="text-xl text-slate-500 leading-relaxed mb-8">
                            Unlike conventional systems that heat dead volume, our open-loop design maintains atmospheric pressure and complete water turnover. The system is protected by three granted Indian patents and validated for 5-Star efficiency through government laboratory testing.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

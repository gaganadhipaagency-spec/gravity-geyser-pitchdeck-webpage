"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, ShieldCheck, Factory, FileText, ChevronRight } from "lucide-react";

export default function PartnershipSection() {
    return (
        <section id="partnership" className="py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Market Opportunity */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-blue-600 font-mono text-sm font-bold tracking-[0.2em] uppercase block mb-4"
                            >
                                Market Landscape
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight uppercase"
                            >
                                Market Opportunity
                            </motion.h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    The Indian storage water heater market is approximately <span className="text-slate-900 font-bold">₹10,000 Crores annually</span> and expanding.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    While energy costs and safety expectations have surged, the fundamental architecture of storage geysers has remained <span className="text-slate-900 font-bold italic">stagnant for 130 years</span>. This creates a unique vacuum for differentiated engineering.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Gravity Geyser provides an <span className="text-blue-600 font-bold">OEM-ready platform</span> to introduce measurable energy savings and safety within this high-volume product category.
                                </motion.p>
                            </div>
                        </div>

                        {/* Market Stat Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-50 border border-slate-200 rounded-[32px] p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <TrendingUp size={240} />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-8">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">Projected Annual Market</span>
                                </div>

                                <div className="mb-12">
                                    <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter block mb-2">₹10K</span>
                                    <span className="text-2xl font-bold text-slate-400 font-mono tracking-tight uppercase">Crores Valuation</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-slate-600 border-t border-slate-200 pt-6">
                                        <TrendingUp className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-medium">Consistent 8-10% CAGR Outlook</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <Award className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-medium">Shift towards BEE 5-Star mandates</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Licensing Opportunity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden"
                >
                    <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob" />
                    <div className="absolute -z-10 bottom-0 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob animation-delay-2000" />

                    <div className="relative z-10 grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full border border-blue-500 tracking-[0.2em] uppercase mb-8 inline-block">
                                Licensing
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase">Strategic OEM Licensing Opportunity</h2>
                            <p className="text-blue-100/70 text-lg mb-8 max-w-2xl leading-relaxed">
                                HG SOL TEC Pvt. Ltd. is currently evaluating <span className="text-white font-bold underline decoration-blue-500 underline-offset-4 uppercase">structured, stage-based India exclusive licensing partnerships</span> with one strategic manufacturer before opening wider industry access.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                                {[
                                    { icon: ShieldCheck, text: "Production-ready design" },
                                    { icon: Factory, text: "Integration-ready manufacturing model" },
                                    { icon: FileText, text: "Patent protection till 2037" },
                                    { icon: Award, text: "Performance-linked exclusivity structure" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                        </div>
                                        <span className="font-medium text-slate-200">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-blue-100 text-lg font-medium border-l-4 border-blue-600 pl-6 py-2">
                                We are seeking a long-term OEM partner to scale this architecture nationally.
                            </p>
                        </div>

                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-4">Request OEM Brief</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                    Access confidential technical datasets, manufacturing workflows, and licensing terms.
                                </p>
                                <a href="#contact" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                    <FileText className="w-5 h-5" />
                                    Request Technical Brief
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <p className="text-[10px] text-slate-500 mt-4 text-center font-mono uppercase tracking-widest">
                                    Subject to NDA Approval
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

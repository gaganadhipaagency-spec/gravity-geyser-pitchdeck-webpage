"use client";

import { motion } from "framer-motion";
import { Building2, Activity, ArrowRight, Zap, Home, LayoutGrid, School } from "lucide-react";

export default function ValidationSection() {
    return (
        <section id="validation" className="min-h-screen lg:h-screen bg-slate-50 border-y border-slate-200 snap-start flex flex-col pt-24 pb-8 overflow-hidden relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
                {/* Header Section - Compact */}
                <div className="mb-8 flex-none">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-mono text-sm font-bold tracking-[0.2em] uppercase block mb-1"
                    >
                        Proven Reliability
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                    >
                        Field Validation & Certification
                    </motion.h2>
                </div>

                {/* Main Content Grid - Balanced to fill height */}
                <div className="grid lg:grid-cols-2 gap-6 flex-1 min-h-0 mb-4">
                    {/* Left Column: Capital & Installations */}
                    <div className="flex flex-col justify-center gap-6 min-h-0 relative z-10">
                        {/* Installations */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col gap-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Active Field Units</h3>
                                    <p className="text-sm text-slate-500">Real-world deployment metrics</p>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    { label: "Residential Blocks", value: "09", icon: Home, suffix: "Units" },
                                    { label: "Apartment Complexes", value: "02", icon: LayoutGrid, suffix: "Units" },
                                    { label: "Institutional Sites", value: "02", icon: School, suffix: "Units" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-200 hover:bg-white transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-lg bg-white border border-slate-100 group-hover:border-blue-100">
                                                <item.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                            </div>
                                            <span className="text-slate-700 font-semibold">{item.label}</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold font-mono text-slate-900">{item.value}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.suffix}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Total Live Deployments</span>
                                <span className="text-lg font-mono font-black text-blue-600">13</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Hospital Study & Certification */}
                    <div className="flex flex-col justify-center gap-6 min-h-0 relative z-10">
                        {/* Hospital Study Highlight */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-blue-900 rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col shadow-xl"
                        >
                            {/* Decorative Activity Icon */}
                            <div className="absolute -top-6 -right-6 opacity-10 pointer-events-none">
                                <Activity size={200} className="text-white" />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block bg-blue-500/20 text-blue-200 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/30 tracking-widest uppercase mb-4">
                                    Clinical Case Study
                                </span>

                                <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight leading-tight">
                                    ~50% Energy <span className="text-blue-400">Reduction</span>
                                </h3>

                                <p className="text-blue-100/70 max-w-sm text-sm leading-relaxed mb-6">
                                    A controlled 1 month comparative audit conducted within a multi-specialty hospital environment.
                                </p>
                            </div>

                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="bg-blue-950/50 rounded-[20px] p-5 border border-blue-700/50">
                                    <p className="text-[10px] text-blue-300 font-mono mb-2 uppercase tracking-widest font-bold">Measured Savings</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-white">50</span>
                                        <span className="text-sm font-bold text-blue-400">%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-950/50 rounded-[20px] p-5 border border-blue-700/50">
                                    <p className="text-[10px] text-blue-300 font-mono mb-2 uppercase tracking-widest font-bold">Audit Period</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-white">12</span>
                                        <span className="text-sm font-bold text-blue-400">MO.</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certification */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col justify-between flex-1"
                        >
                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0 shadow-inner">
                                    <Zap className="w-7 h-7 text-yellow-600 fill-yellow-600/10" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">BEE 5-Star Compliant</h3>
                                    <p className="text-sm text-slate-500 font-medium">Standing Loss Compliance</p>
                                </div>
                            </div>

                            <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white text-sm font-bold py-5 rounded-[20px] transition-all duration-300 group active:scale-[0.98] shadow-lg hover:shadow-slate-200">
                                Request Certification Summary
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

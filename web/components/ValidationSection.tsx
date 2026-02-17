"use client";

import { motion } from "framer-motion";
import { Building2, Wallet, Activity, ArrowRight, Zap } from "lucide-react";

export default function ValidationSection() {
    return (
        <section id="validation" className="min-h-screen lg:h-screen bg-slate-50 border-y border-slate-200 snap-start flex flex-col pt-24 pb-8 overflow-hidden">
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
                    <div className="flex flex-col gap-6 min-h-0">
                        {/* Capital Structure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col justify-between flex-1"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    <Wallet className="w-5 h-5 text-slate-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Capital Structure</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-50">
                                    <p className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-wider">Founder Capital</p>
                                    <p className="text-2xl font-bold text-slate-900 font-mono">₹3.72 Cr</p>
                                </div>
                                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                                    <p className="text-[10px] text-blue-600 font-mono mb-1 uppercase tracking-wider">External Capital</p>
                                    <p className="text-2xl font-bold text-blue-600 font-mono">₹2.25 Cr</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Installations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col flex-[1.5] min-h-0"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-slate-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Active Field Units</h3>
                            </div>

                            <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 flex-1 flex flex-col justify-center">
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-slate-600 text-sm font-medium">Residential Blocks</span>
                                        <span className="font-mono font-bold text-slate-900">09 Units</span>
                                    </li>
                                    <li className="flex items-center justify-between border-t border-slate-200/50 pt-3">
                                        <span className="text-slate-600 text-sm font-medium">Apartment Complexes</span>
                                        <span className="font-mono font-bold text-slate-900">02 Units</span>
                                    </li>
                                    <li className="flex items-center justify-between border-t border-slate-200/50 pt-3">
                                        <span className="text-slate-600 text-sm font-medium">Institutional</span>
                                        <span className="font-mono font-bold text-slate-900">02 Units</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Hospital Study & Certification */}
                    <div className="flex flex-col gap-6 min-h-0">
                        {/* Hospital Study Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-blue-900 rounded-[24px] p-8 text-white relative overflow-hidden flex-[1.5] flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Activity size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-blue-800 text-blue-100 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-700 tracking-wider">
                                        CASE STUDY: HOSPITAL
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-2 tracking-tight">~50% Less Energy</h3>
                                <p className="text-blue-100/80 mb-6 max-w-sm text-sm leading-relaxed">
                                    Measured reduction in electricity consumption compared to conventional storage geysers.
                                </p>

                                <div className="flex gap-3">
                                    <div className="bg-blue-800/50 rounded-xl p-4 border border-blue-700 backdrop-blur-sm flex-1">
                                        <p className="text-[10px] text-blue-200 font-mono mb-1 uppercase tracking-wider">Savings</p>
                                        <p className="text-2xl font-bold">~50%</p>
                                    </div>
                                    <div className="bg-blue-800/50 rounded-xl p-4 border border-blue-700 backdrop-blur-sm flex-1">
                                        <p className="text-[10px] text-blue-200 font-mono mb-1 uppercase tracking-wider">Duration</p>
                                        <p className="text-2xl font-bold">12 Mo.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Certification */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col justify-between flex-1"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center shrink-0">
                                    <Zap className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">BEE 5-Star Compliant</h3>
                                    <p className="text-xs text-slate-500 font-medium">Standing Loss Compliance</p>
                                </div>
                            </div>

                            <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-4 rounded-xl transition-all group active:scale-[0.98]">
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

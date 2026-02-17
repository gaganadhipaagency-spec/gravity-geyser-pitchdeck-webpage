"use client";

import { motion } from "framer-motion";
import { Shield, Droplet, PiggyBank } from "lucide-react";

const features = [
    {
        icon: Shield,
        value: "0%",
        label: "PRESSURE RISK",
        title: "Non-Pressurized Architecture",
        description: "Eliminates catastrophic tank failure risks by operating at atmospheric pressure. The open-loop design requires no pressure relief valves, significantly reducing component fatigue and maintenance overhead.",
        footerLabel: "Failure Rate:",
        footerValue: "< 0.001%"
    },
    {
        icon: Droplet,
        value: "100%",
        label: "HYGIENE SCORE",
        title: "Total Discharge System",
        description: "Gravity-fed outlet ensures complete water turnover with every cycle. Unlike pressurized tanks that retain dead volume, this architecture prevents sediment accumulation and bacterial breeding.",
        footerLabel: "Sediment Build-up:",
        footerValue: "ZERO"
    },
    {
        icon: PiggyBank,
        value: "50%",
        label: "ENERGY SAVINGS",
        title: "Selective Volume Heating",
        description: "Proprietary thermal stratification allows users to heat only the required volume of water rather than the entire tank mass, significantly reducing heating time. Drastically reduces energy waste during partial usage scenarios.",
        footerLabel: "BEE Rating:",
        footerValue: "5-STAR"
    },
];

export default function EngineeringTruth() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-mono text-sm font-bold tracking-[0.2em] uppercase"
                    >
                        Empirical Data
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight"
                    >
                        Truth in Engineering
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg leading-relaxed max-w-2xl"
                    >
                        The Gravity Geyser architecture addresses fundamental inefficiencies in pressurized thermal systems through first-principles engineering.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                {/* Icon Box */}
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center shrink-0">
                                    <feature.icon className="w-7 h-7 text-blue-600 fill-blue-100" strokeWidth={1.5} />
                                </div>

                                {/* Stat Line */}
                                <div className="flex flex-col pt-1">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tight leading-none mb-1">{feature.value}</span>
                                    <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{feature.label}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            {/* Footer Stat */}
                            <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">{feature.footerLabel}</span>
                                <span className="text-xs text-slate-900 font-mono font-bold tracking-wider">{feature.footerValue}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

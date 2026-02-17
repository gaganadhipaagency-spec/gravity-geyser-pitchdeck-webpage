"use client";

import { motion } from "framer-motion";
import { Files, Factory, ShieldCheck, Briefcase } from "lucide-react";

export default function OEMLicensing() {
    const points = [
        { title: "Production-ready design", icon: ShieldCheck },
        { title: "Integration-ready manufacturing model", icon: Factory },
        { title: "Patent protection till 2037", icon: Files },
        { title: "Performance-linked exclusivity model", icon: Briefcase },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-6 md:p-12 lg:p-16 bg-blue-600 rounded-[40px] text-white overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <span className="text-blue-200 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                                Partnership Strategy
                            </span>
                            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                                Strategic OEM Licensing Opportunity
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                We are currently evaluating structured, stage-based India exclusive licensing partnerships with one strategic manufacturer before opening wider industry access. This creates scarcity and ensures high standards.
                            </p>

                            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl">
                                Request Confidential Technical Brief
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {points.map((point, idx) => (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col gap-4"
                                >
                                    <point.icon className="w-6 h-6 text-blue-300" />
                                    <span className="font-bold text-sm tracking-tight">{point.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-50 -scale-100 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

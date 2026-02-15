"use client";

import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <section className="py-20 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                        Fundamental Innovation
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                        Redefining Thermal Storage Architecture
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-900">HG SOL TEC Pvt. Ltd.</span> has developed a fundamentally redesigned storage water heater architecture that reduces electricity consumption through selective volume heating and gravity-based discharge.
                    </p>
                    <p className="text-lg text-slate-500 leading-relaxed mt-6">
                        The system is protected by three granted Indian patents (valid till 2037) and validated through government laboratory testing.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

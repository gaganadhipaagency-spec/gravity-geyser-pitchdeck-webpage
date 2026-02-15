"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function PatentRibbon() {
    const patents = ["416895", "468142", "533644"];
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="bg-slate-900 border-y border-slate-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-emerald-500/10 p-2 rounded-full">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="text-slate-300 font-medium">
                            Intellectual Property Protection
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <span className="text-slate-500 text-sm font-mono uppercase tracking-wider self-center hidden md:block">
                            Granted Patents:
                        </span>
                        {patents.map((patent, index) => (
                            <motion.button
                                key={patent}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => copyToClipboard(patent)}
                                className="group relative flex items-center gap-2 px-4 py-2 bg-slate-800 rounded border border-slate-700 hover:border-blue-500/50 hover:bg-slate-750 transition-all duration-300"
                            >
                                <span className="font-mono text-slate-200 font-bold tracking-widest">
                                    {patent}
                                </span>
                                {copied === patent ? (
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                    <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                )}

                                {copied === patent && (
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded shadow-sm">
                                        Copied
                                    </span>
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

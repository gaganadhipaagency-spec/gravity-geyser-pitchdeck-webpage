"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Zap, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-8 max-w-2xl"
                    >
                        <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            <span className="text-xs font-mono font-semibold text-blue-700 tracking-wider uppercase">
                                TRL 9: Production Ready
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Patented Gravity-Based Storage Water Heater Architecture
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg border-l-4 border-slate-200 pl-6">
                            An open-loop thermal system engineered for zero-pressure discharge and selective volume heating.
                        </p>

                        {/* Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex items-center gap-3">
                                <Zap className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-mono font-medium text-slate-700 uppercase">47% ENERGY REDUCTION</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-mono font-medium text-slate-700 uppercase">3 GRANTED PATENTS</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-mono font-medium text-slate-700 uppercase">BEE 5-STAR VALIDATED</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 group">
                                Request OEM Licensing
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 group">
                                <Download className="mr-2 w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                Download Spec Sheet (PDF)
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Visual - Interactive Overlap */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        {/* Container for Hover Effect */}
                        <div className="relative w-full max-w-lg aspect-square group cursor-crosshair">

                            {/* Card Container Style */}
                            <div className="absolute inset-0 bg-slate-50 rounded-2xl border border-slate-100 shadow-2xl transform transition-transform duration-500 group-hover:scale-105" />

                            {/* Images Container */}
                            <div className="absolute inset-4 overflow-hidden rounded-xl bg-white border border-slate-100">

                                {/* Original Image (Base) */}
                                <Image
                                    src="/images/homepage-original.webp"
                                    alt="Gravity Geyser Original Product"
                                    fill
                                    className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                                    priority
                                />

                                {/* Blueprint Image (Overlay) */}
                                <Image
                                    src="/images/homepage-sketch.webp"
                                    alt="Gravity Geyser Technical Blueprint"
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                                    priority
                                />

                                {/* Tech Overlay UI */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-600 rounded-full animate-ping" />
                                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-600 rounded-full" />

                                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-600 rounded-full animate-ping delay-300" />
                                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-600 rounded-full" />

                                    {/* Grid overlay */}
                                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end border-t border-slate-200/50 pt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-slate-400">Model</span>
                                    <span className="text-xs font-mono font-bold text-slate-700">GG-X200-OEM</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements around the image */}
                        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob" />
                        <div className="absolute -z-10 bottom-0 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob animation-delay-2000" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

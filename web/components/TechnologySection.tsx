"use client";

import { motion } from "framer-motion";
import { Beaker, ShieldCheck, Zap, Star, Activity, Thermometer, Droplets, Cpu, Layers, Shield } from "lucide-react";

const features = [
    {
        title: "Selective Volume Heating",
        description: "User-configurable heating zones allow activation of 10L, 18L, or 25L segments independently.",
        footer: "Variable Resistor Array",
        icon: Layers,
        renderDiagram: () => (
            <div className="relative w-full h-[260px] flex items-end justify-center gap-4 px-10 pb-6">
                <div className="absolute top-3 left-6 px-2 py-0.5 bg-white/80 border border-slate-100 rounded text-[9px] font-mono text-slate-400 z-10">
                    FIG 2.1: VOLUMETRIC CONTROL
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <span className="text-[11px] font-bold text-blue-600 font-mono mb-2">10L</span>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "80px" }}
                        viewport={{ once: true }}
                        className="w-full bg-[#BFDBFE] rounded-t-sm"
                    />
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <span className="text-[11px] font-bold text-blue-700 font-mono mb-2">18L</span>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "140px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="w-full bg-[#60A5FA] rounded-t-sm"
                    />
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <span className="text-[11px] font-bold text-blue-800 font-mono mb-2">25L</span>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "200px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full bg-[#2563EB] rounded-t-sm"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Cold Water Isolation",
        description: "Vertical separation ensures fresh inlet water never mixes with the active heating zone.",
        footer: "Hydro-Dynamic Separation",
        icon: Droplets,
        renderDiagram: () => (
            <div className="relative w-full h-[260px] flex items-center justify-center">
                <div className="absolute top-3 left-6 px-2 py-0.5 bg-white/80 border border-slate-100 rounded text-[9px] font-mono text-slate-400 z-10">
                    FIG 2.2: THERMAL BARRIER
                </div>
                <div className="relative w-36 h-36">
                    <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full" />
                    <div className="absolute inset-4 border border-dashed border-slate-100 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-2 h-2 bg-blue-500 rounded-full opacity-20"
                        />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-[10px]">❄️</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-red-50 border border-red-100 rounded-full flex items-center justify-center">
                        <span className="text-[10px]">🔥</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "SS-304 Tank Durability",
        description: "Medical-grade stainless steel construction eliminates corrosion risks common in mild steel tanks.",
        footer: "Corrosion Resistance Index: 9.8",
        icon: Shield,
        renderDiagram: () => (
            <div className="relative w-full h-[260px] flex items-center justify-center">
                <div className="absolute top-3 left-6 px-2 py-0.5 bg-white/80 border border-slate-100 rounded text-[9px] font-mono text-slate-400 z-10">
                    FIG 2.3: MATERIAL COMPOSITION
                </div>
                <div className="w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center font-mono font-bold text-slate-400">
                            Fe
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-mono uppercase">Chromium</span>
                            <span className="text-sm font-bold text-slate-700 font-mono">18%</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-mono uppercase">Nickel</span>
                            <span className="text-sm font-bold text-slate-700 font-mono">8%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

export default function TechnologySection() {
    const specs = [
        {
            label: "WORKING PRESSURE",
            conventional: "8 Bar (High Risk)",
            gravity: "0 Bar (Atmospheric)",
        },
        {
            label: "DISCHARGE MECHANISM",
            conventional: "Pressure Displacement",
            gravity: "Gravity Feed",
        },
        {
            label: "DEAD VOLUME",
            conventional: "~15% (Sediment Trap)",
            gravity: "0% (Total Drain)",
        },
        {
            label: "HEATING LOGIC",
            conventional: "Full Tank Mass",
            gravity: "Selective Volume",
        },
        {
            label: "MATERIAL STRESS",
            conventional: "Cyclic Fatigue",
            gravity: "Negligible",
        },
    ];

    return (
        <section id="technology" className="py-20 bg-[#F8FAFC] border-y border-slate-200 min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-32">
                {/* --- BLOCK 1: STRUCTURAL REDESIGN --- */}
                <div>
                    {/* Header Section - Unified Left Alignment */}
                    <div className="flex flex-col items-start gap-4 mb-12 border-b border-slate-200 pb-8 transition-all">
                        <div className="max-w-4xl">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-[#2563EB] font-mono text-[12px] font-bold tracking-[0.2em] uppercase block mb-2"
                            >
                                Engineering Specification
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight mb-4 tracking-tight"
                            >
                                Gravity Geyser: Technical Architecture
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-[#64748B] text-base leading-relaxed max-w-2xl font-medium mb-6"
                            >
                                A detailed breakdown of the structural redesign and selective heating mechanics.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-row items-baseline gap-4 border-l-2 border-[#2563EB]/20 pl-4 py-1"
                            >
                                <h3 className="text-xl font-bold text-[#0F172A] whitespace-nowrap">The Structural Redesign</h3>
                                <p className="text-[#64748B] text-sm leading-relaxed">
                                    Comparative analysis of system architecture vs. legacy pressurized models.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Comparison Card - High Fidelity Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[24px] border border-slate-300 overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row"
                    >
                        {/* Left Panel */}
                        <div className="p-10 lg:w-[32%] flex flex-col justify-center items-start border-b lg:border-b-0 lg:border-r border-slate-200 relative bg-slate-50/50">
                            <div className="relative z-10 w-full">
                                <h4 className="text-[20px] font-bold text-[#0F172A] mb-3">Technical Parameters</h4>
                                <p className="text-[#64748B] text-[14px] leading-relaxed mb-8 max-w-[280px]">
                                    Key performance indicators measured under controlled lab conditions.
                                </p>
                                <div className="flex items-center gap-3 bg-blue-50/50 px-4 py-2 rounded-full w-fit border border-blue-100/50">
                                    <Beaker className="w-4 h-4 text-[#2563EB]" />
                                    <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wider">
                                        TEST STANDARD: IS 302-2-21
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Table */}
                        <div className="lg:w-[68%] flex flex-col">
                            {/* Header Row */}
                            <div className="grid grid-cols-2 border-b border-slate-200">
                                <div className="py-5 px-8">
                                    <h5 className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider">Conventional Pressurized</h5>
                                </div>
                                <div className="py-5 px-8 bg-[#ECF5FF] relative">
                                    <h5 className="text-[12px] font-bold text-[#2563EB] uppercase tracking-wider">Gravity Geyser</h5>
                                    <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-[8px] uppercase tracking-tight">
                                        New Standard
                                    </div>
                                </div>
                            </div>

                            {/* Data Matrix */}
                            <div className="divide-y divide-slate-200 flex-1">
                                {specs.map((spec, index) => (
                                    <div key={index} className="grid grid-cols-2 group hover:bg-slate-50/30 transition-colors">
                                        <div className="py-5 px-8 border-r border-slate-200">
                                            <span className="block text-[11px] text-[#94A3B8] font-mono uppercase tracking-widest mb-1.5">
                                                {spec.label}
                                            </span>
                                            <span className="text-[15px] font-bold text-[#334155] font-mono leading-tight group-hover:text-[#0F172A] transition-colors">
                                                {spec.conventional}
                                            </span>
                                        </div>
                                        <div className="py-5 px-8 bg-[#F8FBFF] group-hover:bg-[#F0F7FF] transition-colors">
                                            <span className="block text-[11px] text-[#94A3B8] font-mono uppercase tracking-widest mb-1.5">
                                                {spec.label}
                                            </span>
                                            <span className="text-[15px] font-bold text-[#2563EB] font-mono leading-tight">
                                                {spec.gravity}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- BLOCK 2: CORE ENGINEERING FEATURES --- */}
                <div>
                    <div className="mb-12 border-b border-slate-200 pb-8">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#2563EB] font-mono text-[12px] font-bold tracking-[0.2em] uppercase block mb-2"
                        >
                            Proprietary Mechanisms
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight mb-4 tracking-tight"
                        >
                            Core Engineering Features
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#64748B] text-base leading-relaxed max-w-2xl font-medium"
                        >
                            Patent-protected mechanisms that fundamentally differentiate Gravity Geyser from existing market solutions.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_48px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 group h-full"
                            >
                                {/* Diagram Area */}
                                <div className="h-[280px] bg-[#F8FAFC] flex items-center justify-center relative border-b border-slate-100">
                                    {feature.renderDiagram()}
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="text-[20px] font-bold text-[#0F172A] mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#64748B] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400">
                                        <feature.icon className="w-4 h-4" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                                            {feature.footer}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- BLOCK 3: IOT/AI LOGIC CONTROLLER --- */}
                <div className="scroll-mt-24">
                    {/* Section Header */}
                    <div className="mb-12 border-b border-slate-200 pb-8">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#2563EB] font-mono text-[12px] font-bold tracking-[0.2em] uppercase block mb-2"
                        >
                            Embedded Systems
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight tracking-tight mb-4"
                        >
                            IoT/AI Logic Controller
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#64748B] text-base leading-relaxed max-w-2xl font-medium"
                        >
                            The intelligent control unit continuously monitors thermal gradients and user patterns to optimize energy consumption.
                        </motion.p>
                    </div>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[24px] border border-slate-300 overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row h-full min-h-[500px]"
                    >
                        {/* Left Panel: Content */}
                        <div className="p-10 lg:w-[45%] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/30">

                            {/* Feature Points */}
                            <div className="space-y-4">
                                {/* Point 1: Dry Run Prevention */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-start gap-5 p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ShieldCheck className="w-5 h-5 text-[#EF4444]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">Dry-Run Prevention</h4>
                                        <p className="text-[11px] font-mono text-[#94A3B8] mb-1.5 bg-slate-50 px-2 py-0.5 rounded w-fit">
                                            IF water_level &lt; min_threshold THEN disable(element)
                                        </p>
                                        <p className="text-[#475569] text-[13px] leading-relaxed">
                                            Prevents dry run conditions through capacitive water-level sensing.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Point 2: 47% Energy Savings */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start gap-5 p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-sm transition-all"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">47% Electricity Reduction</h4>
                                        <p className="text-[11px] font-mono text-[#94A3B8] mb-1.5 bg-slate-50 px-2 py-0.5 rounded w-fit">
                                            hospital_comparison_study: measured
                                        </p>
                                        <p className="text-[#475569] text-[13px] leading-relaxed">
                                            Reduces daily electricity consumption up to 47% (hospital measured).
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Point 3: BEE 5-Star */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-start gap-5 p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#F59E0B]/30 hover:shadow-sm transition-all"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#0F172A] mb-1">BEE 5-Star Compliant</h4>
                                        <div className="flex items-center gap-1 mb-1.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                                            ))}
                                            <span className="text-[10px] font-mono text-[#94A3B8] ml-2">MSME Lab, Bangalore</span>
                                        </div>
                                        <p className="text-[#475569] text-[13px] leading-relaxed">
                                            BEE 5-Star standing loss compliant per IS 302-2-21.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Panel: Code + System Status */}
                        <div className="lg:w-[55%] flex flex-col bg-[#FAFBFC] relative min-h-[400px]">
                            {/* Code Block */}
                            <div className="p-8 flex-1 font-mono text-[12px] leading-[1.7] text-[#94A3B8] overflow-hidden relative">
                                <div className="space-y-0 opacity-70">
                                    <div><span className="text-[#2563EB]">class</span> <span className="text-[#0F172A] font-semibold">ThermalController</span> {'{'}</div>
                                    <div className="pl-6"><span className="text-[#2563EB]">constructor</span>() {'{'}</div>
                                    <div className="pl-10"><span className="text-[#64748B]">this</span>.maxTemp = <span className="text-[#10B981]">75</span>;</div>
                                    <div className="pl-10"><span className="text-[#64748B]">this</span>.status = <span className="text-[#F59E0B]">&apos;IDLE&apos;</span>;</div>
                                    <div className="pl-6">{'}'}</div>
                                    <div>&nbsp;</div>
                                    <div className="pl-6"><span className="text-[#2563EB]">monitor</span>(sensorData) {'{'}</div>
                                    <div className="pl-10"><span className="text-[#2563EB]">if</span> (sensorData.temp &gt; <span className="text-[#64748B]">this</span>.maxTemp) {'{'}</div>
                                    <div className="pl-14"><span className="text-[#EF4444]">return</span> <span className="text-[#64748B]">this</span>.<span className="text-[#2563EB]">hardStop</span>();</div>
                                    <div className="pl-10">{'}'}</div>
                                    <div>&nbsp;</div>
                                    <div className="pl-10"><span className="text-[#2563EB]">if</span> (sensorData.waterLevel &lt; <span className="text-[#10B981]">0.15</span>) {'{'}</div>
                                    <div className="pl-14"><span className="text-[#EF4444]">return</span> <span className="text-[#64748B]">this</span>.<span className="text-[#2563EB]">disableElement</span>();</div>
                                    <div className="pl-10">{'}'}</div>
                                    <div className="pl-6">{'}'}</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>

                            {/* System Status Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] overflow-hidden z-20"
                            >
                                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
                                    <span className="text-[12px] font-bold text-[#0F172A] uppercase tracking-wider">System Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase">Live</span>
                                    </div>
                                </div>
                                <div className="divide-y divide-slate-50 bg-white">
                                    <div className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                                        <span className="text-[13px] font-mono text-[#64748B] group-hover:text-[#0F172A] transition-colors">SENSOR_T1</span>
                                        <span className="text-[13px] font-mono font-bold text-blue-600">42.5°C</span>
                                    </div>
                                    <div className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                                        <span className="text-[13px] font-mono text-[#64748B] group-hover:text-[#0F172A] transition-colors">SENSOR_T2</span>
                                        <span className="text-[13px] font-mono font-bold text-blue-600">42.6°C</span>
                                    </div>
                                    <div className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                                        <span className="text-[13px] font-mono text-[#64748B] group-hover:text-[#0F172A] transition-colors">WATER_LVL</span>
                                        <span className="text-[13px] font-mono font-bold text-[#2563EB]">100%</span>
                                    </div>
                                    <div className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                                        <span className="text-[13px] font-mono text-[#64748B] group-hover:text-[#0F172A] transition-colors">HEATER_RELAY</span>
                                        <span className="text-[13px] font-mono font-bold text-[#0F172A]">ACTIVE</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

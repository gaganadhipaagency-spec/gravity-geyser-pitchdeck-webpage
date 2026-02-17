"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 mb-24 items-start">
                    {/* Left Side: Brand & Info */}
                    <div className="lg:col-span-5 space-y-16">
                        {/* Brand & About */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">About HG SOL TEC</h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-8">
                                Founded in 2017 and headquartered in Mysuru, Karnataka, <span className="text-slate-900 font-bold">HG SOL TEC Pvt. Ltd.</span> focuses on structural innovation in water heating systems with emphasis on energy efficiency, safety, hygienic and long-term sustainability.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all text-slate-500 shadow-sm">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Grid */}
                        <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
                            {/* Location */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Headquarters</h3>
                                <div className="flex gap-4 text-slate-600 leading-relaxed">
                                    <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                                    <address className="not-italic text-sm">
                                        Mysuru, Karnataka<br />
                                        India
                                    </address>
                                </div>
                            </div>

                            {/* Direct Contact */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Inquiries</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-center group">
                                        <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                                        <a href="tel:+919901119991" className="text-sm font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                                            +91-9901119991
                                        </a>
                                    </li>
                                    <li className="flex gap-4 items-center group">
                                        <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                                        <a href="mailto:info@gravitygeyser.in" className="text-sm font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
                                            info@gravitygeyser.in
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-bold text-slate-900 tracking-tighter hover:text-blue-600 transition-colors cursor-pointer" onClick={scrollToTop}>
                            GRAVITY GEYSER
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                            © {new Date().getFullYear()} HG SOL TEC Pvt. Ltd. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-8 items-center">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest">Back to top</span>
                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

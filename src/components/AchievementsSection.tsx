"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import resumeData from "@/data/resume.json";

export function AchievementsSection() {
    const { achievements } = resumeData;

    if (!achievements || achievements.length === 0) return null;

    return (
        <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-blue-900/10">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-purple-500/10 text-purple-400">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl font-bold">Key Achievements</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-purple-500/20 hover:border-purple-400/50"
                        >
                            {/* Hover spotlight effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-300">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 rounded-full text-lg font-bold bg-purple-500/20 text-purple-300">
                                        {item.metric}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.context}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

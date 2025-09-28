"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, Star } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

export default function ToolsPage() {
    const [animated, setAnimated] = useState<Set<string>>(new Set());
    useEffect(() => {
        const t = setTimeout(() => setAnimated(new Set(["features"])), 100);
        return () => clearTimeout(t);
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tools</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover our arsenal of cutting-edge automation tools designed to propel your business into the future.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <AnimatedCard delay={0} show={animated.has("features")}>
                        <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">Coming Soon</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Lead Nurturing</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">Revolutionary lead nurturing system that uses advanced AI to personalize every interaction, predict customer behavior, and optimize conversion rates in real-time.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Machine Learning</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Predictive Analytics</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Auto-Personalization</span>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center"><Star className="w-4 h-4 text-purple-400 mr-2" />Dynamic content personalization</li>
                                <li className="flex items-center"><Star className="w-4 h-4 text-purple-400 mr-2" />Behavioral prediction algorithms</li>
                                <li className="flex items-center"><Star className="w-4 h-4 text-purple-400 mr-2" />Multi-channel orchestration</li>
                            </ul>
                        </div>
                    </AnimatedCard>
                    <AnimatedCard delay={200} show={animated.has("features")}>
                        <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">Coming Soon</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Quantum Menu Systems</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">Next-generation restaurant menu platforms that adapt in real-time based on inventory, customer preferences, weather, and demand patterns using quantum-inspired algorithms.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Real-time Adaptation</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Smart Pricing</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">IoT Integration</span>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center"><Star className="w-4 h-4 text-cyan-400 mr-2" />Dynamic pricing optimization</li>
                                <li className="flex items-center"><Star className="w-4 h-4 text-cyan-400 mr-2" />Inventory-driven recommendations</li>
                                <li className="flex items-center"><Star className="w-4 h-4 text-cyan-400 mr-2" />Predictive demand modeling</li>
                            </ul>
                        </div>
                    </AnimatedCard>
                </div>
                <div className="text-center">
                    <div className="p-8 bg-gradient-to-r from-purple-800/30 to-cyan-800/30 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">More Tools Coming Soon</h3>
                        <p className="text-gray-300 mb-6">We're constantly developing new automation tools to meet the evolving needs of modern businesses. Stay tuned for revolutionary solutions in AI-driven customer service, automated financial analysis, intelligent supply chain management, and more.</p>
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">Get Notified</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

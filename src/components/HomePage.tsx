"use client";

import { useEffect, useState } from "react";
import { Zap, ArrowRight, Bot, Cpu, Mail, Phone, MapPin } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

export default function HomePage() {
    const [animated, setAnimated] = useState<Set<string>>(new Set());
    useEffect(() => {
        const t = setTimeout(() => setAnimated(new Set(["hero", "features", "stats"])), 100);
        return () => clearTimeout(t);
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className={`text-center transform transition-all duration-1000 ${animated.has("hero") ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                        <div className="flex justify-center mb-8">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl">
                                <Zap className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Peak<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Flow</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">Automate Beyond Tomorrow</p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Transform your business with cutting-edge process automation powered by AI agents and intelligent programming. We don't just optimize workflows – we revolutionize them.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                Start Automating
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </button>
                            <a
                                href="/tools"
                                className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                            >
                                Explore Tools
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rotate-45 opacity-20 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20 animate-ping"></div>
            </div>

            <div className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Intelligent Automation Excellence</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Harness the power of next-generation AI to create seamless, intelligent workflows that adapt and evolve with your business.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimatedCard delay={0} show={animated.has("features")}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                                    <Bot className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">AI Agent Networks</h3>
                                <p className="text-gray-300 leading-relaxed">Deploy intelligent agents that learn, adapt, and optimize your processes in real-time. Our AI doesn't just follow rules – it creates them.</p>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard delay={200} show={animated.has("features")}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                                    <Cpu className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Custom Programming</h3>
                                <p className="text-gray-300 leading-relaxed">Tailored automation solutions built with cutting-edge programming techniques. Every line of code optimized for maximum efficiency and scalability.</p>
                            </div>
                        </AnimatedCard>
                        <AnimatedCard delay={400} show={animated.has("features")}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                                <p className="text-gray-300 leading-relaxed">Experience automation at the speed of thought. Our systems process millions of operations per second while maintaining perfect accuracy.</p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid md:grid-cols-3 gap-8 text-center transform transition-all duration-1000 ${animated.has("stats") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        <div>
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">99.9%</div>
                            <div className="text-xl text-gray-300">Uptime Guarantee</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">10x</div>
                            <div className="text-xl text-gray-300">Efficiency Boost</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">24/7</div>
                            <div className="text-xl text-gray-300">AI Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
                        <p className="text-xl text-gray-300">Let's discuss how PeakFlow can revolutionize your business processes.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                            <p className="text-gray-300">info@peakflow.ro</p>
                        </div>
                        <div className="p-6">
                            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                            <p className="text-gray-300">+40750250468</p>
                        </div>
                        <div className="p-6">
                            <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                            <p className="text-gray-300">Bucharest, Romania</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

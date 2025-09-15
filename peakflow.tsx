import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Bot, Cpu, ArrowRight, Mail, Phone, MapPin, Menu, X, Star, Users, Briefcase } from 'lucide-react';

const PeakFlowWebsite = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [animatedElements, setAnimatedElements] = useState(new Set());

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedElements(new Set(['hero', 'features', 'stats']));
        }, 100);
        return () => clearTimeout(timer);
    }, [currentPage]);

    const navigation = [
        { name: 'Home', id: 'home' },
        { name: 'Tools', id: 'tools' },
        { name: 'Privacy', id: 'privacy' },
        { name: 'Terms', id: 'terms' },
    ];

    const AnimatedCard = ({ children, delay = 0, className = "" }) => (
        <div className={`transform transition-all duration-700 ${animatedElements.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
             style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );

    const HomePage = () => (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className={`text-center transform transition-all duration-1000 ${animatedElements.has('hero') ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="flex justify-center mb-8">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl">
                                <Zap className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Peak<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Flow</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
                            Automate Beyond Tomorrow
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Transform your business with cutting-edge process automation powered by AI agents and intelligent programming.
                            We don't just optimize workflows – we revolutionize them.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                Start Automating
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </button>
                            <button
                                onClick={() => setCurrentPage('tools')}
                                className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                Explore Tools
                            </button>
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
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Harness the power of next-generation AI to create seamless, intelligent workflows that adapt and evolve with your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimatedCard delay={0}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                                    <Bot className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">AI Agent Networks</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Deploy intelligent agents that learn, adapt, and optimize your processes in real-time.
                                    Our AI doesn't just follow rules – it creates them.
                                </p>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={200}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                                    <Cpu className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Custom Programming</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Tailored automation solutions built with cutting-edge programming techniques.
                                    Every line of code optimized for maximum efficiency and scalability.
                                </p>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={400}>
                            <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Experience automation at the speed of thought. Our systems process millions of operations
                                    per second while maintaining perfect accuracy.
                                </p>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`grid md:grid-cols-3 gap-8 text-center transform transition-all duration-1000 ${animatedElements.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
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
                            <p className="text-gray-300">contact@peakflow.ai</p>
                        </div>
                        <div className="p-6">
                            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                            <p className="text-gray-300">+1 (555) 123-FLOW</p>
                        </div>
                        <div className="p-6">
                            <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                            <p className="text-gray-300">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ToolsPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tools</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover our arsenal of cutting-edge automation tools designed to propel your business into the future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <AnimatedCard delay={0}>
                        <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">Coming Soon</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Lead Nurturing</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Revolutionary lead nurturing system that uses advanced AI to personalize every interaction,
                                predict customer behavior, and optimize conversion rates in real-time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Machine Learning</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Predictive Analytics</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Auto-Personalization</span>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                                    Dynamic content personalization
                                </li>
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                                    Behavioral prediction algorithms
                                </li>
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                                    Multi-channel orchestration
                                </li>
                            </ul>
                        </div>
                    </AnimatedCard>

                    <AnimatedCard delay={200}>
                        <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">Coming Soon</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Quantum Menu Systems</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Next-generation restaurant menu platforms that adapt in real-time based on inventory,
                                customer preferences, weather, and demand patterns using quantum-inspired algorithms.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Real-time Adaptation</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Smart Pricing</span>
                                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">IoT Integration</span>
                            </div>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-cyan-400 mr-2" />
                                    Dynamic pricing optimization
                                </li>
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-cyan-400 mr-2" />
                                    Inventory-driven recommendations
                                </li>
                                <li className="flex items-center">
                                    <Star className="w-4 h-4 text-cyan-400 mr-2" />
                                    Predictive demand modeling
                                </li>
                            </ul>
                        </div>
                    </AnimatedCard>
                </div>

                <div className="text-center">
                    <div className="p-8 bg-gradient-to-r from-purple-800/30 to-cyan-800/30 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">More Tools Coming Soon</h3>
                        <p className="text-gray-300 mb-6">
                            We're constantly developing new automation tools to meet the evolving needs of modern businesses.
                            Stay tuned for revolutionary solutions in AI-driven customer service, automated financial analysis,
                            intelligent supply chain management, and more.
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                            Get Notified
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const PrivacyPage = () => (
        <div className="min-h-screen bg-slate-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-purple max-w-none">
                    <div className="bg-slate-800 rounded-xl p-8 space-y-6 text-gray-300">
                        <p className="text-sm text-gray-400">Last updated: September 15, 2025</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                            <p>PeakFlow collects information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, company information, and usage data.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, maintain, and improve our automation services</li>
                                <li>To process transactions and send related information</li>
                                <li>To send technical notices, updates, and support messages</li>
                                <li>To respond to your comments and questions</li>
                                <li>To monitor and analyze trends and usage patterns</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>With your consent or at your direction</li>
                                <li>With service providers who assist us in operating our business</li>
                                <li>To comply with legal obligations or protect our rights</li>
                                <li>In connection with a business transfer or acquisition</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                            <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us at privacy@peakflow.ai.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p>If you have any questions about this privacy policy, please contact us at privacy@peakflow.ai.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );

    const TermsPage = () => (
        <div className="min-h-screen bg-slate-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
                <div className="prose prose-invert prose-purple max-w-none">
                    <div className="bg-slate-800 rounded-xl p-8 space-y-6 text-gray-300">
                        <p className="text-sm text-gray-400">Last updated: September 15, 2025</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                            <p>By accessing and using PeakFlow's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you should not use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                            <p>PeakFlow provides AI-powered process automation solutions, including but not limited to custom programming, AI agent deployment, and workflow optimization tools. Our services are designed to enhance business efficiency through intelligent automation.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete information when using our services</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Use our services in compliance with all applicable laws and regulations</li>
                                <li>Not attempt to disrupt or interfere with our services</li>
                                <li>Respect intellectual property rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                            <p>While we strive to provide continuous service availability, PeakFlow does not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any aspect of our services with or without notice.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                            <p>All content, software, and materials provided through PeakFlow's services are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                            <p>PeakFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of your use of our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                            <p>You agree to indemnify and hold PeakFlow harmless from any claims, losses, damages, liabilities, and expenses arising out of your use of our services or violation of these terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                            <p>These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                            <p>For questions about these terms, please contact us at legal@peakflow.ai.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPage = () => {
        switch(currentPage) {
            case 'tools': return <ToolsPage />;
            case 'privacy': return <PrivacyPage />;
            case 'terms': return <TermsPage />;
            default: return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen">
            <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                                setCurrentPage('home');
                                setAnimatedElements(new Set());
                                setTimeout(() => setAnimatedElements(new Set(['hero', 'features', 'stats'])), 100);
                            }}
                        >
                            <Zap className="w-8 h-8 text-purple-400 mr-3" />
                            <span className="text-2xl font-bold text-white">PeakFlow</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setAnimatedElements(new Set());
                                        setTimeout(() => setAnimatedElements(new Set(['hero', 'features', 'stats'])), 100);
                                    }}
                                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                        currentPage === item.id
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-300 hover:text-white"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-slate-700 py-4">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setMobileMenuOpen(false);
                                        setAnimatedElements(new Set());
                                        setTimeout(() => setAnimatedElements(new Set(['hero', 'features', 'stats'])), 100);
                                    }}
                                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                                        currentPage === item.id
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            <main className="pt-16">
                {renderPage()}
            </main>
        </div>
    );
};

export default PeakFlowWebsite;

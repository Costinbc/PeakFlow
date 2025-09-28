"use client";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-900 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
                <div className="prose prose-invert prose-purple max-w-none">
                    <div className="bg-slate-800 rounded-xl p-8 space-y-6 text-gray-300">
                        <p className="text-sm text-gray-400">Last updated: September 15, 2025</p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                            <p>By accessing and using PeakFlow's services, you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not agree to these terms, you should not use
                                our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                            <p>PeakFlow provides AI-powered process automation solutions, including but not limited to
                                custom programming, AI agent deployment, and workflow optimization tools. Our services
                                are designed to enhance business efficiency through intelligent automation.</p>
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
                            <p>While we strive to provide continuous service availability, PeakFlow does not guarantee
                                uninterrupted access to our services. We reserve the right to modify, suspend, or
                                discontinue any aspect of our services with or without notice.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                            <p>All content, software, and materials provided through PeakFlow's services are protected
                                by intellectual property laws. You may not reproduce, distribute, or create derivative
                                works without explicit permission.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                            <p>PeakFlow shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages, including but not limited to loss of profits, data, or use, arising
                                out of your use of our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                            <p>You agree to indemnify and hold PeakFlow harmless from any claims, losses, damages,
                                liabilities, and expenses arising out of your use of our services or violation of these
                                terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                            <p>These terms shall be governed by and construed in accordance with the laws of the State
                                of California, without regard to its conflict of law provisions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Changes will be effective
                                immediately upon posting. Your continued use of our services constitutes acceptance of
                                any changes.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                            <p>For questions about these terms, please contact us at info@peakflow.ro.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

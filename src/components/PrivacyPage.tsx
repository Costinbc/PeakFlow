"use client";

export default function PrivacyPage() {
    return (
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
                            <p>If you have any questions about this privacy policy, please contact us at info@peakflow.ro.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

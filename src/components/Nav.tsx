"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const nav = [
        { name: "Home", href: "/" },
        { name: "Tools", href: "/tools" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
    ];
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="flex items-center">
                        <Zap className="w-8 h-8 text-purple-400 mr-3" />
                        <span className="text-2xl font-bold text-white">PeakFlow</span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {nav.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                    pathname === item.href
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(v => !v)} className="text-gray-300 hover:text-white">
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-700 py-4">
                        {nav.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                                    pathname === item.href
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

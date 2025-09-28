"use client";

import { ReactNode } from "react";

export default function AnimatedCard({
                                         children,
                                         delay = 0,
                                         className = "",
                                         show,
                                     }: {
    children: ReactNode;
    delay?: number;
    className?: string;
    show: boolean;
}) {
    return (
        <div
            className={`transform transition-all duration-700 ${
                show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

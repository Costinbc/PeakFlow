import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: "PeakFlow",
    description: "Automate Beyond Tomorrow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-slate-900">
        <Nav />
        <main className="pt-16">{children}</main>
        </body>
        </html>
    );
}

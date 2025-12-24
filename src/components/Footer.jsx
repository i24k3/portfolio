"use strict";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 mt-24">
            <div className="max-w-3xl mx-auto px-6 py-10">
                <p className="text-sm text-gray-500 leading-relaxed">
                    Still figuring things out.  
                    <span className="block mt-2 italic text-gray-400">
                        © {new Date().getFullYear()} Arsalan (Izake)
                    </span>
                </p>
            </div>
        </footer>
    );
}


"use strict";

export default function Header() {
    return (
        <header className="w-full border-b border-gray-200">
            <div className="max-w-3xl mx-auto px-6 py-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <nav className="flex gap-5 text-sm text-gray-600">
                        <a
                            href="#projects"
                            className="hover:text-gray-900 transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#ideas"
                            className="hover:text-gray-900 transition"
                        >
                            Ideas
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-900 transition"
                        >
                            About
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}


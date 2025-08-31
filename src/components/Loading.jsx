"use strict";

export default function Loading() {
    return (
        <section className="bg-white text-gray-900 min-h-screen flex items-center justify-center px-6 border-amber-600">
            <div className="max-w-3xl text-center animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-rose-500">
                    Just a moment...
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">
                    Getting things ready for you.
                </p>
                <div className="inline-flex items-center gap-2 text-base sm:text-lg font-medium">
                    <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                    Loading data in the background...
                </div>
            </div>
        </section>
    );
}


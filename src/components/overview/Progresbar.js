"use client";

export default function Progresbar() {
    const progress = 15; // Nilai progress dalam persen

    return (
        <div className="flex items-center gap-3" style={{ width: "120px" }}>
            {/* Progress Bar */}
            <div className="w-40 h-1 bg-gray-200 rounded-full relative">
                <div
                    className="h-1 bg-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            {/* Persentase */}
            <span className="text-gray-700 font-medium">{progress}%</span>
        </div>
    );
}

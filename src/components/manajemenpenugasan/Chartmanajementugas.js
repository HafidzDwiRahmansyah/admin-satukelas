"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartComponent() {
    const data = {
        datasets: [
            {
                data: [3, 2, 1, 1],
                backgroundColor: ["#22c55e", "#ef4444", "#f97316", "#3b82f6"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "58%",
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
        },
    };

    return (
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                <div>
                    <p className="text-center text-gray-800">7</p>
                    <p className="text-center text-gray-600 text-sm">Penugasan</p>
                </div>
            </div>
        </div>
    );
}

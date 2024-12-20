"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPluginLiveClass = {
    id: "centerTextLiveClass",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        ctx.save();

        const text12 = "50"; // Angka untuk Live Class
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(text12, width / 2, height / 2 - 10);

        const text22 = "Live Class"; // Label untuk Live Class
        ctx.font = "normal 14px Arial";
        ctx.fillStyle = "#666";
        ctx.fillText(text22, width / 2, height / 2 + 15);

        ctx.restore();
    },
};

ChartJS.register(centerTextPluginLiveClass);

export default function ChartClass() {
    const data = {
        labels: ["Selesai", "Belum Selesai"],
        datasets: [
            {
                data: [50, 50],
                backgroundColor: ["#4CAF50", "#007BFF"],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "70%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className="flex items-center justify-center w-40 h-40 rounded-full shadow-lg">
            <Doughnut data={data} options={options} id="chartLiveClass" />
        </div>
    );
}

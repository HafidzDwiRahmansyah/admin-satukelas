"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin untuk teks tengah
const centerTextPluginPelatihan = {
    id: "centerTextPelatihan",
    beforeDraw(chart) {
        if (chart.canvas.id !== "chartPelatihan") return;

        const { width, height } = chart;
        const ctx = chart.ctx;
        ctx.save();

        // Bersihkan canvas
        ctx.clearRect(0, 0, width, height);

        // Teks utama (angka)
        const text3 = "36";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(text3, width / 2, height / 2 - 10);

        // Teks kedua (label)
        const text4 = "Pelatihan";
        ctx.font = "normal 14px Arial";
        ctx.fillStyle = "#666";
        ctx.fillText(text4, width / 2, height / 2 + 15);

        ctx.restore();
    },
};

ChartJS.register(centerTextPluginPelatihan);

export default function ChartPelatihan() {
    const data2 = {
        labels: ["Selesai", "Belum Selesai"],
        datasets: [
            {
                data: [50, 50],
                backgroundColor: ["#4CAF50", "#007BFF"],
                borderWidth: 0,
            },
        ],
    };

    const options2 = {
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
        <div className="flex items-center justify-center w-40 h-40 rounded-full shadow-lg m-4">
            <Doughnut data={data2} options={options2} id="chartPelatihan" />
        </div>
    );
}
"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin untuk menambahkan teks di tengah chart
const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        ctx.save();

        // Teks utama (angka)
        const text1 = "36";
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(text1, width / 2, height / 2 - 10);

        // Teks kedua (label)
        const text2 = "Pelatihan";
        ctx.font = "normal 14px Arial";
        ctx.fillStyle = "#666";
        ctx.fillText(text2, width / 2, height / 2 + 15);

        ctx.restore();
    },
};

ChartJS.register(centerTextPlugin);

export default function Chartpelatihan() {
    const data = {
        labels: ["Selesai", "Belum Selesai"],
        datasets: [
            {
                data: [50, 50], // Persentase data
                backgroundColor: ["#4CAF50", "#007BFF"], // Warna hijau dan biru
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "70%", // Ukuran lubang tengah
        plugins: {
            legend: {
                display: false, // Hilangkan legenda
            },
            tooltip: {
                enabled: false, // Hilangkan tooltip
            },
        },
    };

    return (
        <div className="flex items-center justify-center w-40 h-40 rounded-full shadow-lg">
            <Doughnut data={data} options={options} />
        </div>
    );
}
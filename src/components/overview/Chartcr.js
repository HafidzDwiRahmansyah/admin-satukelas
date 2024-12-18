"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin untuk menampilkan teks di tengah donat
const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        const text = "69%"; // Teks di tengah
        ctx.save();
        ctx.font = "poppins bold 40px"; // Gaya dan ukuran font
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000"; // Warna teks
        ctx.fillText(text, width / 2, height / 2); // Posisi teks
        ctx.restore();
    },
};

ChartJS.register(centerTextPlugin);

export default function DonutChart({ cutoutSize = "10%" }) {
    const data = {
        labels: ["69", "31%"],
        datasets: [
            {
                // Lapisan luar untuk biru
                data: [71, 29],
                backgroundColor: ["#007bff", "rgba(0,0,0,0)"], // Biru dan transparan
                borderWidth: 0,
                hoverOffset: 0,
            },
            {
                // Lapisan dalam untuk abu-abu
                data: [0, 29], // Bagian abu-abu saja
                backgroundColor: ["rgba(0,0,0,0)", "rgba(214, 226, 245, 1)"], // Transparan dan abu-abu
                borderWidth: 0,
                cutout: "55%", // Ukuran lapisan lebih kecil
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hilangkan legenda
            },
            tooltip: {
                enabled: false, // Hilangkan tooltip
            },
        },
        cutout: cutoutSize, // Ukuran lubang tengah dinamis
    };

    return (
        <div style={{ width: "165px", height: "165px" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

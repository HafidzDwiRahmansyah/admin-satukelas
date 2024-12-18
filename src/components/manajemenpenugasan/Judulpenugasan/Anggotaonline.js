"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Plugin } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin untuk menampilkan teks di tengah donat
const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        const text = "71%"; // Teks di tengah
        ctx.save();
        ctx.font = "regular 20px"; // Gaya dan ukuran font
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
        labels: ["71%", "29%"],
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
        <div className="flex justify-between">
            <div className="block">
                <button className="bg-blue-500 text-white rounded-full px-4 py-1 poppins-regular">Berlangsung</button>
                <h1 className="poppins-semibold fs-28 py-2"><span className="text-blue-600"> 5 </span> dari <span className="text-blue-600"> 7 </span> Anggota</h1>
                <p className="text-gray-400 poppins-regular fs-14">Telah menyelesaikan semua pelatihan yang ditugaskan</p>
            </div>
            <div className="mt-2" style={{ width: "115px", height: "115px" }}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
}

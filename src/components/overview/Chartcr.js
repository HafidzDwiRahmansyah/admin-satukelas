"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        const text = "69%";
        ctx.save();
        ctx.font = "bold 21px poppins";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(text, width / 2, height / 2);
        ctx.restore();
    },
};

ChartJS.register(centerTextPlugin);

export default function ChartCR({ cutoutSize = "10%" }) {
    const data = {
        labels: ["69%", "31%"],
        datasets: [
            {
                data: [69, 31], // 69% untuk biru dan sisanya (31%) untuk transparan
                backgroundColor: ["#007bff", "rgba(0,0,0,0)"], // Warna biru
                borderWidth: 0,
                hoverOffset: 0,
            },
            {
                data: [0, 31], // Sisanya untuk latar belakang warna abu-abu
                backgroundColor: ["rgba(0,0,0,0)", "rgba(214, 226, 245, 1)"], // Warna abu-abu
                borderWidth: 0,
                cutout: "55%",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        cutout: cutoutSize,
    };

    return (
        <div style={{ width: "170px", height: "170px" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

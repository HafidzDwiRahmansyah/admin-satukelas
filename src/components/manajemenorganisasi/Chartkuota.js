"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
        const { width, height } = chart;
        const ctx = chart.ctx;
        const text = "50%";
        ctx.save();
        ctx.font = "poppins bold 40px";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        ctx.fillText(text, width / 2, height / 2);
        ctx.restore();
    },
};

ChartJS.register(centerTextPlugin);

export default function ChartKuota({ cutoutSize = "10%" }) {
    const data = {
        labels: ["50%", "50%"],
        datasets: [
            {
                data: [50, 50],
                backgroundColor: ["#007bff", "rgba(0,0,0,0)"],
                borderWidth: 0,
                hoverOffset: 0,
            },
            {
                data: [0, 50],
                backgroundColor: ["rgba(0,0,0,0)", "rgba(214, 226, 245, 1)"],
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
        <div style={{ width: "100px", height: "100px" }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Plugin untuk menambahkan teks di tengah donut
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    ctx.save();

    // Teks utama (angka)
    const text1 = "42";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    ctx.fillText(text1, width / 2, height / 2 - 10);

    // Teks kedua (label)
    const text2 = "Anggota";
    ctx.font = "normal 14px Arial";
    ctx.fillStyle = "#666";
    ctx.fillText(text2, width / 2, height / 2 + 15);

    ctx.restore();
  },
};

ChartJS.register(centerTextPlugin);

export default function DonutChart() {
  const data = {
    labels: ["Selesai", "Belum Selesai"],
    datasets: [
      {
        data: [50, 50], // Nilai untuk setengah lingkaran
        backgroundColor: ["#007BFF", "#E5EAF2"], // Warna biru dan abu-abu terang
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: 0, // Memulai dari atas (arah jam 12)
    circumference: 360, // Membatasi lingkaran menjadi setengah
    plugins: {
      legend: {
        display: false, // Hilangkan legenda
      },
      tooltip: {
        enabled: false, // Hilangkan tooltip
      },
    },
    cutout: "70%", // Ukuran lubang tengah
  };

  return (
    <div className="flex items-center justify-center w-40 h-40 rounded-full shadow-md">
      <Doughnut data={data} options={options} />
    </div>
  );
}
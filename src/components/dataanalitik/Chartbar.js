"use client";

import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chartbar = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: [
            {
                label: "Live Consultation",
                data: [6, 2, 4, 6, 8, 10, 5, 5, 5, 5, 5, 5],
                backgroundColor: "#BFDBFE",
                borderRadius: 4,
            },
            {
                label: "Webinar",
                data: [3, 3, 5, 7, 9, 11, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#60A5FA",
                borderRadius: 4,
            },
            {
                label: "Sertifikasi",
                data: [6, 4, 6, 8, 10, 12, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#2563EB",
                borderRadius: 4,
            },
            {
                label: "On Demand",
                data: [3, 5, 8, 10, 12, 15, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#1E3A8A",
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#374151",
                },
                reverse: true,
            },
            title: {
                display: true,
                text: "Jumlah Pelatihan Selesai",
                color: "#111827",
                font: {
                    size: 18,
                },
            },
            tooltip: {
                enabled: false,
                external: (context) => {
                    const tooltipEl = document.getElementById("chartjs-tooltip");

                    if (!tooltipEl) {
                        const tooltipDiv = document.createElement("div");
                        tooltipDiv.id = "chartjs-tooltip";
                        tooltipDiv.style.position = "absolute";
                        tooltipDiv.style.background = "white";
                        tooltipDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        tooltipDiv.style.borderRadius = "8px";
                        tooltipDiv.style.padding = "10px";
                        tooltipDiv.style.pointerEvents = "none";
                        tooltipDiv.style.fontSize = "12px";
                        tooltipDiv.style.color = "#374151";
                        tooltipDiv.style.zIndex = "100";
                        document.body.appendChild(tooltipDiv);
                    }

                    if (context.tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    const { offsetLeft: chartLeft, offsetTop: chartTop } = context.chart.canvas;
                    const position = context.chart.canvas.getBoundingClientRect();

                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = `${position.left + context.tooltip.caretX}px`;
                    tooltipEl.style.top = `${position.top + context.tooltip.caretY}px`;

                    const tooltipData = context.tooltip.dataPoints;
                    const dataIndex = tooltipData[0].dataIndex;
                    let tooltipHTML = `<div class="text-sm font-semibold mb-2">${data.labels[dataIndex]}</div>`;
                    let total = 0;

                    // Balik urutan dataset untuk tooltip
                    data.datasets
                        .slice()
                        .reverse()
                        .forEach((dataset) => {
                            const value = dataset.data[dataIndex] || 0;
                            total += value;
                            tooltipHTML += `
                                <div class="flex justify-between items-center">
                                    <span class="flex items-center mb-1">
                                        <div style="width: 20px; height: 20px; background: ${dataset.backgroundColor}; margin-right: 8px; border-radius: 4px;"></div>
                                        ${dataset.label}
                                    </span>
                                    <span class="font-medium text-green-500 ps-2">${value}</span>
                                </div>
                            `;
                        });

                    tooltipHTML += `
                        <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold text-green-500">${total}</span>
                        </div>
                    `;

                    tooltipEl.innerHTML = tooltipHTML;
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: "#6B7280",
                },
                grid: {
                    drawOnChartArea: false, // Menghapus garis grid pada sumbu X
                    drawTicks: false, // Menghapus tanda tick pada sumbu X
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: false, // Tidak menampilkan angka patokan di sumbu Y
                },
                grid: {
                    drawOnChartArea: false, // Menghapus garis grid pada sumbu Y
                    drawTicks: false, // Menghapus tanda tick pada sumbu Y
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-md p-4 relative">
            <Bar ref={chartRef} data={data} options={options} style={{ width: "500px", height: "300px" }} />
        </div>
    );
};

export default Chartbar;

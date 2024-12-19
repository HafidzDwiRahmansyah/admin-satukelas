"use client";
import Image from "next/image";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chartmanajementugas() {
    const data = {
        datasets: [
            {
                data: [3, 2, 1, 1],
                backgroundColor: ['#22c55e', '#ef4444', '#f97316', '#3b82f6'],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '58%',
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    return (
        <div className="chart bg-white rounded-md shadow-md py-4 mt-4">
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative" style={{ width: '170px', height: '170px' }}>
                        <Doughnut data={data} options={options} />
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                            <div>
                                <p className="text-center text-gray-800">7</p>
                                <p className="text-center text-gray-600 text-sm">Penugasan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-md p-3 shadow-sm">
                        <h2 className="text-blue-600 font-bold text-lg">2 Pelatihan</h2>
                        <p className="text-blue-500 text-sm">Berlangsung</p>
                    </div>
                    <div className="bg-green-100 rounded-md p-3 shadow-sm">
                        <h2 className="text-green-600 font-bold text-lg">3 Pelatihan</h2>
                        <p className="text-green-500 text-sm">Selesai</p>
                    </div>
                    <div className="bg-yellow-200 rounded-md p-3 shadow-sm">
                        <h2 className="text-yellow-800 font-bold text-lg">1 Pelatihan</h2>
                        <p className="text-yellow-700 text-sm">Belum Selesai</p>
                    </div>
                    <div className="bg-red-100 rounded-md p-3 shadow-sm">
                        <h2 className="text-red-600 font-bold text-lg">1 Pelatihan</h2>
                        <p className="text-red-500 text-sm">Terlambat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

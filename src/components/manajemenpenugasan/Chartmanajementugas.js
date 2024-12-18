"use client"
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
        <div className="chart bg-white rounded-md shadow-md py-4  mt-4">
            <div className="grid grid-cols-2 gap-2 items center mb-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative" style={{ width: '170px', height: '170px' }}>
                        <Doughnut data={data} options={options} />
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                            <div>
                                <p className="poppins-bold fs-20 text-center leading-none">7</p>
                                <p className="poppins-regular fs-12 text-center leading-none">Penugasan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 items-center">
                        <div className="flex flex-col">
                            <div className="card bg-blue-300 shadow-md rounded-md px-3 py-1">
                                <h2 className="poppins-bold text-blue-600 fs-16">2 Pelatihan</h2>
                                <p className="poppins-regular text-blue-500 fs-14">Berlangsung</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="card bg-green-300 shadow-md rounded-md px-3 py-1">
                                <h2 className="poppins-bold text-green-600 fs-16">3 Pelatihan</h2>
                                <p className="poppins-regular text-green-500 fs-14">Selesai</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="card bg-yellow-500 shadow-md rounded-md px-3 py-1">
                                <h2 className="poppins-bold text-white fs-16">1 Pelatihan</h2>
                                <p className="poppins-regular text-white fs-14">Belum Selesai</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="card bg-red-300 shadow-md rounded-md px-3 py-1">
                                <h2 className="poppins-bold text-red-600 fs-16">1 Pelatihan</h2>
                                <p className="poppins-regular text-red-500 fs-14">Terlambat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
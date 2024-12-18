"use client";
import { useState } from "react";
import Image from "next/image";
import Completionrate from "@/components/dataanalitik/judul_pelatihan/Completionrate";
import Rerata from "@/components/dataanalitik/judul_pelatihan/Rerata";
import Nilairatarata from "@/components/dataanalitik/judul_pelatihan/Nilairatarata";
import Capaianbelajar from "@/components/dataanalitik/judul_pelatihan/Capaianbelajar";
import Table from "@/components/dataanalitik/judul_pelatihan/Table";

export default function NavTabs() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="w-full bg-white shadow-sm p-4">
            {/* Navbar with Bottom Border */}
            <div className="flex items-center space-x-6 border-b-2">
                {/* All Student Tab */}
                <button
                    onClick={() => setActiveTab("all")}
                    className={`flex items-center pb-2 ${activeTab === "all"
                        ? "poppins-semibold fs-14 text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "poppins-semibold fs-14 text-gray-500 hover:text-gray-700"
                        }`}
                >
                    All Student
                    <span
                        className={`ml-1 px-2 py-0.5 ${activeTab === "all" ? "poppins-semibold fs-14 bg-orange-500 text-white" : "poppins-semibold fs-14 bg-gray-300 text-gray-600"
                            }  rounded-md`}
                    >
                        50
                    </span>
                </button>

                {/* Tax Learning Tab */}
                <button
                    onClick={() => setActiveTab("tax")}
                    className={`flex items-center pb-2 ${activeTab === "tax"
                        ? "poppins-semibold fs-14 text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "poppins-semibold fs-14 text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Tax Learning
                    <span
                        className={`ml-1 px-2 py-0.5 ${activeTab === "tax" ? "poppins-semibold fs-14 bg-orange-500 text-white" : "poppins-semibold fs-14 bg-gray-300 text-gray-600"
                            }  rounded-md`}
                    >
                        2
                    </span>
                </button>

                {/* Creative Pro Tab */}
                <button
                    onClick={() => setActiveTab("creative")}
                    className={`flex items-center pb-2 ${activeTab === "creative"
                        ? "poppins-semibold fs-14 text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "poppins-semibold fs-14 text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Creative Pro
                    <span
                        className={`ml-1 px-2 py-0.5 ${activeTab === "creative" ? "poppins-semibold fs-14 bg-orange-500 text-white" : "poppins-semibold fs-14 bg-gray-300 text-gray-600"
                            }  rounded-md`}
                    >
                        6
                    </span>
                </button>

                {/* Plus Button */}
                <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <span className="text-2xl font-light">+</span>
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "all" &&
                    <div className="tabs p-4">
                        <div className="flex gap-4">
                            <Completionrate />
                            <Rerata />
                            <Nilairatarata />
                            <div className="card rounded-md shadow bg-white" style={{ width: "180px" }}>
                                <Capaianbelajar />
                            </div>
                        </div>
                        <Table />
                    </div>
                }
                {activeTab === "tax" && <div className="text-gray-700">Content for Tax Learning.</div>}
                {activeTab === "creative" && <div className="text-gray-700">Content for Creative Pro.</div>}
            </div>
        </div>
    );
}

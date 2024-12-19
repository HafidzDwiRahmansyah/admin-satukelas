import Image from "next/image";
import Chartcr from "@/components/overview/Chartcr";

export default function completionrate() {
  return (
    <div className="mx-auto bg-white rounded-lg w-full">
      <h3 className="text-gray-800 font-bold fs-16">Completion Rate</h3>
      <div className="flex items-center my-6">
        <p className="text-gray-400 poppins-regular fs-16 flex-1">
          Completion Rate menunjukkan perbandingan antara pelatihan yang sudah
          diselesaikan dan diikuti
        </p>
        <Chartcr />
      </div>

      <button className="mt-10 border border-blue-500 text-blue-500 font-medium px-2 py-1 mx-auto rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 mr-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Buat Penugasan
      </button>
    </div>
  );
}

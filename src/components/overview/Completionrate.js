import Image from "next/image";

export default function completionrate() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg p-4">
      <h3 className="text-gray-800 font-semibold text-lg">Completion Rate</h3>
      <div className="flex items-center mt-4">
        <p className="text-gray-500 text-sm flex-1">
          Completion Rate menunjukkan perbandingan antara pelatihan yang sudah
          diselesaikan dan diikuti
        </p>

        <div className="relative w-24 h-24 ml-4">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-500"
            style={{
              clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)",
              transform: "rotate(248.4deg)",
            }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-800">69%</span>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 flex items-center justify-center">
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

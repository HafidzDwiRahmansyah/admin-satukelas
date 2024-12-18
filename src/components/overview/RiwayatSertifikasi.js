import Image from "next/image";

export default function RiwayatSertifikasi() {
  return (
    <div className="p-4">
      <h3 className="py-3">
        <b>Riwayat Sertifikasi yang Diikuti</b>
      </h3>
      <table className="w-full rounded-md">
        <thead>
          <tr className="bg-white">
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              No
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Judul Program
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Nama Anggota
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Rombel
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Tanggal Pendaftaran
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">1</td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Sertifikasi: Brevet Pajak AB
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Adhi Prasetyo
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              Grup Pajak
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              01 Jan 2023 12:00 WIB
            </td>
            <td className="fs-14 poppins-reguler ">
              {/* <div className="w-full max-w-2xl mx-auto mt-8">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        15%
                      </h2>
                      <div className="relative h-64 bg-gray-100 rounded-lg p-4">
                        <canvas id="lineChart"></canvas>
                      </div>
                    </div> */}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">2</td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Sertifikasi: Brevet Pajak AB
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Donita Primi Muliebris...
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              Grup Pajak
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              14 Des 2023 14:00 WIB
            </td>
            <td className="fs-14 poppins-reguler">
              {/* <div className="w-full max-w-2xl mx-auto mt-8">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        15%
                      </h2>
                      <div className="relative h-64 bg-gray-100 rounded-lg p-4">
                        <canvas id="lineChart"></canvas>
                      </div>
                    </div> */}
            </td>
          </tr>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">3</td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Sertifikasi: Brevet Pajak AB
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Firkan Dinansyah
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              Grup Pajak
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              03 Des 2023 15:21 WIB
            </td>
            <td className="fs-14 poppins-reguler">
              {/* <div className="w-full max-w-2xl mx-auto mt-8">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        15%
                      </h2>
                      <div className="relative h-64 bg-gray-100 rounded-lg p-4">
                        <canvas id="lineChart"></canvas>
                      </div>
                    </div> */}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">4</td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Sertifikasi: Brevet Pajak AB
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Gabriel Alfarizie
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              Grup Pajak
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              10 Des 2023 14:00 WIB
            </td>
            <td className="fs-14 poppins-reguler">
              {/* <div className="w-full max-w-2xl mx-auto mt-8">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        15%
                      </h2>
                      <div className="relative h-64 bg-gray-100 rounded-lg p-4">
                        <canvas id="lineChart"></canvas>
                      </div>
                    </div> */}
            </td>
          </tr>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">5</td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Sertifikasi: Brevet Pajak C
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center text-blue-400">
              Muammar Farouk
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              Grup Pajak
            </td>
            <td className="px-4 py-2 fs-14 poppins-reguler text-center">
              03 Des 2023 13:22 WIB
            </td>
            <td className="fs-14 poppins-reguler">
              {/* <div className="w-full max-w-2xl mx-auto mt-8">
                      <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        15%
                      </h2>
                      <div className="relative h-64 bg-gray-100 rounded-lg p-4">
                        <canvas id="lineChart"></canvas>
                      </div>
                    </div> */}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center">
        <a
          className="mx-auto poppins-reguler fs-14 py-2 text-blue-400"
          href="">
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
}

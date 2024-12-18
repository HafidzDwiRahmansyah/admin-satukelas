import Image from "next/image";

export default function AnggotaTerbaik() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 w-100" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h3 className="py-3 poppins-semibold">
            <b>Anggota Terbaik</b>
          </h3>
          <table className="min-w-full rounded">
            <thead>
              <tr className="bg-white">
                <th className="border-b border-gray-400 px-2 py-2 text-left fs-14 poppins-medium">
                  No
                </th>
                <th className="border-b border-gray-400 px-2 py-2 text-left fs-14 poppins-medium">
                  Nama Anggota
                </th>
                <th className="border-b border-gray-400 py-2 fs-14 poppins-medium">
                  Pelatihan Selesai
                </th>
                <th className="border-b border-gray-400 px-2 py-2 text-left fs-14 poppins-medium">
                  Performa Test
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="ps-4 py-2 poppins-medium fs-14">1</td>
                <td className="px-2 py-2 text-blue-400 fs-14 poppins-reguler">
                  Gabriel Alfarizie
                </td>
                <td className="text-center py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="ps-5 py-2 flex items-center poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>50%</span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="ps-4 py-2 poppins-medium fs-14">2</td>
                <td className="px-2 py-2 text-blue-400 fs-14 poppins-reguler">
                  Arifa Trinugraheni
                </td>
                <td className="py-2 poppins-reguler fs-14 text-center">
                  50
                </td>
                <td className="ps-5 py-2 flex items-center poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>15%</span>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="ps-4 py-2 poppins-medium fs-14">3</td>
                <td className="px-2 py-2 text-blue-400 fs-14 poppins-reguler">
                  Donita Primi Mul...
                </td>
                <td className="py-2 poppins-reguler fs-14 text-center">
                  34
                </td>
                <td className="ps-5 py-2 flex items-center poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>15%</span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="ps-4 py-2 poppins-medium fs-14">4</td>
                <td className="px-2 py-2 text-blue-400 fs-14 poppins-reguler">
                  <a href="/data&analitik/firkan-dinansyah">Firkan Dinansyah</a>
                </td>
                <td className="py-2 poppins-reguler fs-14 text-center">
                  23
                </td>
                <td className="ps-5 py-2 flex items-center poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>15%</span>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="ps-4 py-2 poppins-medium fs-14">5</td>
                <td className="px-2 py-2 text-blue-400 fs-14 poppins-reguler">
                  Adhi Prasetyo
                </td>
                <td className="py-2 poppins-reguler fs-14 text-center">
                  20
                </td>
                <td className="ps-5 py-2 flex items-center poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>15%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
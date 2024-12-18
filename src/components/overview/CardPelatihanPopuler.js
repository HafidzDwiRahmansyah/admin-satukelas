import Image from "next/image";

export default function PelatihanPopuler() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 w-100" style={{ maxWidth: "900px" }}>
        <div className="card-body">
          <table className="min-w-full rounded">
            <thead>
              <tr className="bg-white">
                <th className="border-b border-gray-400 px-4 py-2 text-left fs-14 poppins-medium">
                  No
                </th>
                <th className="border-b border-gray-400 px-4 py-2 text-left fs-14 poppins-medium">
                  Judul Pelatihan
                </th>
                <th className="border-b border-gray-400 px-4 py-2 text-left fs-14 poppins-medium">
                  Diikuti Oleh
                </th>
                <th className="border-b border-gray-400 px-4 py-2 text-left fs-14 poppins-medium">
                  Diselesaikan
                </th>
                <th className="border-b border-gray-400 px-4 py-2 text-left fs-14 poppins-medium">
                  Performa Test
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="px-4 py-2 poppins-medium fs-14">1</td>
                <td className="px-4 py-2 text-blue-400 fs-14 poppins-reguler">
                  Akutansi Perpajakan Pa...
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="px-4 py-2 flex items-center space-x-2 poppins-reguler fs-14">
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
                <td className="px-4 py-2 poppins-medium fs-14">2</td>
                <td className="px-4 py-2 text-blue-400 fs-14 poppins-reguler">
                  Pajak Penghasilan (PPh)...
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="px-4 py-2 flex items-center space-x-2 poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>23%</span>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-2 poppins-medium fs-14">3</td>
                <td className="px-4 py-2 text-blue-400 fs-14 poppins-reguler">
                  Listening - Booking a col...
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  50
                </td>
                <td className="px-4 py-2 flex items-center space-x-2 poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>30%</span>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 poppins-medium fs-14">4</td>
                <td className="px-4 py-2 text-blue-400 fs-14 poppins-reguler">
                  Pajak Penghasilan (PPh)...
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  32
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  30
                </td>
                <td className="px-4 py-2 flex items-center space-x-2 poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>25%</span>
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-2 poppins-medium fs-14">5</td>
                <td className="px-4 py-2 text-blue-400 fs-14 poppins-reguler">
                  Risk Management
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  20
                </td>
                <td className="text-center px-4 py-2 poppins-reguler fs-14">
                  20
                </td>
                <td className="px-4 py-2 flex items-center space-x-2 poppins-reguler fs-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 4l6 10H6z"></path>
                  </svg>
                  <span>30%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

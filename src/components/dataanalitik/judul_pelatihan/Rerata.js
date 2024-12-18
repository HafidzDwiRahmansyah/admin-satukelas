import Image from "next/image"

export default function Rerata() {
    return (
        <div className="card bg-white shadow rounded-md p-4" style={{ width: "280px"}}>
            <div className="card-body">
                <h3 className="poppins-semibold fs-14">Rerata Waktu Penyelesaian</h3>
                <div className="flex py-4">
                    <Image
                        className="img-fluid"
                        alt="icons clock green"
                        src="images/icons/clock_green.svg"
                        width={30}
                        height={30} />
                    <h3 className="poppins-bold fs-36 text-green-800 ps-4">2j32m</h3>
                </div>
                <p className="fs-12 poppins-regular text-gray-400">Nilai didapatkan dari rata-rata waktu penyelesaian pelatihan.</p>
            </div>
        </div>
    )
}
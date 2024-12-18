import Image from "next/image";

export default function Nilairatarata() {
    return (
        <div className="card bg-white rounded-md shadow p-4">
            <div className="card-body">
                <h3 className="poppins-semibold fs-14">Nilai Rata-Rata</h3>
                <div className="flex gap-4 py-4">
                    <Image 
                    className="img-fluid"
                    alt="icons pre-test"
                    src="images/icons/pre.svg"
                    width={42}
                    height={42}
                    />
                    <div className="text">
                        <p className="poppins-bold fs-14">70</p>
                        <p className="poppins-regular fs-12">Pre-test</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Image 
                    className="img-fluid"
                    alt="icons pre-test"
                    src="images/icons/post.svg"
                    width={42}
                    height={42}
                    />
                    <div className="text">
                        <p className="poppins-bold fs-14">76</p>
                        <p className="poppins-regular fs-12">Post-test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
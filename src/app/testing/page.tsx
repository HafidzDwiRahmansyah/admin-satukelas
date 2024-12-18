import Image from "next/image"
import Card3tabs from "@/components/dataanalitik/detail_anggota/Card3tabs";
export default function Testing() {
    return (
        <div className="container">
            <div className="card rounded-md bg-white p-4">
                <div className="card-body flex gap-4">
                    <Card3tabs />
                </div>
            </div>
        </div>
    )
}
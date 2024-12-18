import Image from "next/image";

export default function Cardpelatihan() {
  return (
    <div className="flex justify-between items-center w-full h-20 bg-white rounded-md">
      <div className="navbar p-4 rounded-lg shadow col-span-2">
        <h2 className="text-xl fs-14 font-semibold">Total Anggota</h2>
        <p>This is the content for the second column.</p>
      </div>

      <div className="navbar p-4 rounded-lg shadow col-span-2">
        <h2 className="text-xl fs-14 font-semibold">Pelatihan Diikuti</h2>
        <p>This is the content for the third column.</p>
      </div>
    </div>
  );
}

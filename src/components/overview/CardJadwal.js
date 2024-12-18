"use client";

import React, { useState } from "react";
import Image from "next/image";

const CalendarCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const schedules = {
    "2024-01-12": [
      {
        time: "09.00",
        title: "Jadwal Webinar ",
        link: "Aspek Akuntansi pada Rumah Sakit",
      },
    ],
    "2024-01-17": [
      {
        time: "09.00",
        title: "Jadwal Webinar",
        link: "Aspek Akuntansi pada Rumah Sakit",
      },
      {
        time: "15.00",
        title: "Jadwal Live Consultation",
        link: "Withholding Tax",
      },
    ],
  };

  const getMonthYear = (date) => {
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("id-ID", options);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  // Dapatkan jumlah hari dalam bulan dan tanggal sebelumnya/berikutnya
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    const dates = [];

    // Tambahkan tanggal dari bulan sebelumnya
    const prevMonthDays = new Date(year, month, 0).getDate(); // Hari terakhir bulan sebelumnya
    const prevMonthSlots = firstDay; // Menentukan jumlah slot dari bulan sebelumnya
    for (let i = prevMonthSlots; i > 0; i--) {
      dates.push({
        day: prevMonthDays - i + 1,
        isCurrentMonth: false,
      });
    }

    // Tambahkan tanggal bulan ini
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      dates.push({ day: i, isCurrentMonth: true });
    }

    // Tambahkan tanggal bulan berikutnya jika diperlukan untuk mengisi grid
    const totalSlots = 35; // Total 35 slot (7 hari x 5 baris)
    const remainingSlots = totalSlots - dates.length;
    for (let i = 1; i <= remainingSlots; i++) {
      dates.push({ day: i, isCurrentMonth: false });
    }

    return dates;
  };

  // Saat tanggal diklik
  const handleDateClick = (day, isCurrentMonth) => {
    if (day && isCurrentMonth) {
      const selected = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      setSelectedDate(selected);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row navbar border-0 rounded-lg overflow-hidden gap-2">
      {/* Kolom Kalender */}
      <div className="w-full p-6 navbar ms-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="poppins-bold">{getMonthYear(currentDate)}</h3>
          <div className="flex items-center content-align-center gap-5">
            <button
              onClick={handlePreviousMonth}
              className="text-gray-500 hover:text-black poppins-bold fs-20">
              <Image
                alt="left icons"
                src="/images/icons/left.svg"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={handleNextMonth}
              className="text-gray-500 hover:text-black poppins-bold fs-20">
              <Image
                alt="left icons"
                src="/images/icons/right.svg"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <hr className="py-2" />
        <div className="grid grid-cols-7 gap-2">
          {/* Header Hari */}
          {["M", "S", "S", "R", "K", "J", "S"].map((day, index) => (
            <span key={index} className="font-semibold ps-4 text-gray-500">
              {day}
            </span>
          ))}
          {/* Tanggal */}
          {getDaysInMonth(currentDate).map((date, index) => {
            const isToday =
              date && date.isCurrentMonth
                ? `${currentDate.getFullYear()}-${String(
                  currentDate.getMonth() + 1
                ).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`
                : null;

            // Cek jika hari Minggu
            const isSunday = date
              ? new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                date.day
              ).getDay() === 0
              : false;

            // Cek jika tanggal memiliki jadwal
            const hasSchedule =
              date?.isCurrentMonth &&
              schedules[
              `${currentDate.getFullYear()}-${String(
                currentDate.getMonth() + 1
              ).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`
              ];

            return (
              <div
                key={index}
                onClick={() => handleDateClick(date?.day, date?.isCurrentMonth)}
                className={`relative h-10 w-10 flex items-center justify-center rounded-full ${date?.isCurrentMonth
                  ? "cursor-pointer hover:bg-blue-500 hover:text-white"
                  : "text-gray-300"
                  } ${isToday === selectedDate && date?.isCurrentMonth
                    ? "border-2 border-blue-500 text-black"
                    : ""
                  } ${isSunday ? "text-red-500" : ""}`} // Warna merah untuk hari Minggu
              >
                {/* Tanggal */}
                {date?.day || ""}
                {/* Point Hijau */}
                {hasSchedule && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Kolom Jadwal */}
      <div className="w-full p-6">
        <h3 className="font-semibold text-lg mb-4">
          Jadwal{" "}
          {selectedDate
            ? new Date(selectedDate).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            : ""}
        </h3>
        <ul>
          {selectedDate && schedules[selectedDate] ? (
            schedules[selectedDate].map((schedule, index) => (
              <li
                key={index}
              >
                <a href="#" className="flex items-center justify-between py-3" >
                  <div className="flex items-center gap-2">
                    <span className="h-10 w-1 bg-green-500 rounded-full"></span>
                    <div>
                      <p className="poppins-regular fs-14 text-gray-600">{schedule.time}<span className="px-1 text-gray-300">|</span>
                        {schedule.title}
                      </p>
                      <p className="text-blue-600 poppins-semibold fs-14 hover:underline">
                        {schedule.link}
                      </p>
                    </div>
                  </div>
                  <Image
                    className="img-fluid items-center mx-end"
                    alt="icons right"
                    src="/images/icons/right-small.svg"
                    width={16}
                    height={16} />
                </a>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center pt-8">
              <Image
                className="img-fluid"
                width={180}
                height={180}
                alt=""
                src="/images/notclass.svg"
              />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CalendarCard;

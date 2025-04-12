import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NewPage() {
  const isOn = useSelector((state) => state.light.isOn);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800">
      Chiroq holati:{" "}
      <span className={isOn ? "text-yellow-500" : "text-gray-600"}>
        {isOn ? "YONIQ" : "O'CHIQ"}
      </span>
    </h1>
      <Link
        to="/"
        className="mt-4 text-blue-600 underline hover:text-blue-800"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";


export default function App() {
  const isOn = useSelector((state) => state.light.isOn);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-gray-100 to-gray-200 px-6">
  <div className="flex items-center gap-4">
    <Lightbulb
      size={48}
      className={`transition duration-300 ${
        isOn ? "text-yellow-400" : "text-gray-400"
      }`}
    />
    <h1 className="text-4xl font-bold text-gray-800">
      Chiroq holati:{" "}
      <span className={isOn ? "text-yellow-500" : "text-gray-600"}>
        {isOn ? "YONIQ" : "O'CHIQ"}
      </span>
    </h1>
  </div>

  <div className="flex flex-wrap gap-4 justify-center">
    <button
      onClick={() => dispatch({ type: "TURN_ON" })}
      className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition duration-200"
    >
      Yoqish
    </button>
    <button
      onClick={() => dispatch({ type: "TURN_OFF" })}
      className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition duration-200"
    >
      O'chirish
    </button>
    <button
      onClick={() => dispatch({ type: "TOGGLE" })}
      className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition duration-200"
    >
      Teskari qilish
    </button>
  </div>

  <Link
    to="/newPage"
    className="text-blue-600 text-lg font-medium underline hover:text-blue-800 transition duration-200"
  >
    /newPage sahifasiga o'tish
  </Link>
</div>
  );
}
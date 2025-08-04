import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const UserCard = ({ userData }) => {
  const { theme } = useContext(MyStore);

  return (
    <div
      className={`flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto 
      p-4 rounded-xl shadow-md transition-colors duration-300
      ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="text-5xl mb-3">👤</div>
      <h2 className="text-xl font-bold mb-1 break-words text-center">
        {userData?.username}
      </h2>
      <p
        className={`mb-1 break-words text-center transition-colors duration-300
        ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        {userData?.email}
      </p>
    </div>
  );
};

export default UserCard;

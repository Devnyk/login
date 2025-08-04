import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="card flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <div className="text-5xl mb-3">👤</div>
      <h2 className="text-xl font-bold mb-1 break-words text-center">
        {userData?.username}
      </h2>
      <p className="text-gray-500 mb-1 break-words text-center">
        {userData?.email}
      </p>
    </div>
  );
};

export default UserCard;

import React from "react";

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = String(minutes).padStart(2, "0");

  return (
    <div className="flex items-center">
      <span>{`${day} ${month} ${year}`}</span>
      <div className="w-[8px] h-[8px] rounded-full bg-[#353535] mx-2"></div>
      <span>{`${formattedHours}:${formattedMinutes} ${period}`}</span>
    </div>
  );
}

function MessageCard({ message, date }) {
  return (
    <div className="bg-white mb-5 rounded-xl shadow-xl lg:px-10 px-4 w-full lg:py-5  py-3">
      <span className="font-roboto lg:text-[18px] text-[13px]">{message}</span>
      <div className="flex text-nowrap w-full mt-2 items-end font-roboto lg:text-[18px] text-[13.59px] font-medium justify-end">
        {formatDate(date)}
      </div>
    </div>
  );
}

export default MessageCard;

import React from "react";

function ProfileCard({
  smallScreen = false,
  setCurrentNote = () => {},
  notesData = { name: "Ritik Joshi", color: "red" },
  onClick = () => {},
  showBg = false,
  textColor = "black",
  hover = true,
}) {
  return (
    <div
      onClick={() => onClick(notesData)}
      className={`flex ${showBg ? "bg-[#2F2F2F2B]" : ""} ${
        hover ? "hover:bg-gray-100" : ""
      } w-full cursor-pointer items-center justify-start p-2 rounded-xl gap-5 px-5`}
    >
      {
        smallScreen && <img src="/back.png" className="w-[15.58px] h-[11.15px]" onClick={()=>setCurrentNote(undefined)} alt="back"/>
      }
      <div
        className="text-white flex items-center justify-center text-center rounded-full h-[68.9px] w-[68.9px]"
        style={{
          backgroundColor: notesData?.color,
        }}
      >
        <span className="font-medium text-[23px] tracking-wider">
          {notesData?.name
            ? (notesData.name.split(" ")[0][0].toUpperCase() || "") +
              (notesData.name.split(" ")[1]?.[0].toUpperCase() || "")
            : ""}
        </span>
      </div>
      <span className={`font-roboto text-${textColor} text-[24px] font-medium`}>
        {notesData?.name}
      </span>
    </div>
  );
}

export default ProfileCard;

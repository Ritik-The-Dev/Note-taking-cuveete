import React from "react";
import ProfileCard from "./ProfileCard";
import { MdOutlineAdd } from "react-icons/md";

function Sidebar({ notesData, currentNote, createNewNote, setCurrentNote }) {
  return (
    <div className="flex bg-white items-end justify-end lg:w-[25vw] md:w-[35vw] w-screen relative">
      <div className="w-full flex flex-col items-center  justify-start">
        <div className="mt-10 mb-10">
          <span className="font-roboto text-[35px] text-black font-medium">
            Pocket Notes
          </span>
        </div>
        <div className="h-[80vh] w-full flex flex-col items-start px-5 justify-start gap-5 overflow-y-auto">
          {notesData.map((notes, index) => (
            <ProfileCard
              showBg={currentNote?.name === notes?.name}
              onClick={setCurrentNote}
              key={index}
              notesData={notes}
            />
          ))}
        </div>
      </div>
      <div
        onClick={createNewNote}
        className="lg:w-[83px] w-[75px] text-white absolute bottom-5 right-5 flex items-center justify-center font-roboto font-medium lg:text-[70px] text-[40px] hover:bg-opacity-90 cursor-pointer z-50 lg:h-[83px] h-[75px] bg-[#16008B] rounded-full"
      >
        <MdOutlineAdd />
      </div>
    </div>
  );
}

export default Sidebar;

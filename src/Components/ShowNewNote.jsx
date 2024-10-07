import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function ShowNewNote({ createNewNoteData, setShowNewNote }) {
  const [name, setName] = useState("");
  const [currentColor, setColor] = useState("#B38BFA");
  const modalRef = useRef(null);

  const AllColors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  useEffect(() => {
    // Function to handle clicks outside of the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowNewNote(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowNewNote]);

  return (
    <div className="flex items-center bg-black bg-opacity-50 z-[100] absolute justify-center w-screen h-screen">
      <div
        ref={modalRef}
        className="lg:w-[740px] rounded-xl md:w-[500px] w-[90vw] relative lg:h-[317px] md:h-[55vh] h-[60vh]  bg-white p-5 px-10 flex flex-col items-start justify-start gap-5"
      >
        <div className="w-full items-end justify-end absolute right-5 flex">
          <IoClose
            onClick={() => setShowNewNote(false)}
            className="text-[1.2rem] cursor-pointer rounded-full bg-gray-200 hover:bg-opacity-50 p-1 w-[30px] h-[30px]"
          />
        </div>
        <span className="text-nowrap font-roboto font-medium text-[29px]">
          Create New Group
        </span>
        <div className="lg:flex-row md:flex-col flex-col flex lg:gap-10 gap-2">
          <span className="text-nowrap font-roboto font-medium text-[29px]">
            Group Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoFocus
            className="px-5 py-2 outline-none rounded-full lg:w-[435px] md:w-[335px] w-[70vw] h-[51px] border-2 font-roboto text-[23px]"
          />
        </div>
        <div className="lg:flex-row md:flex-col flex-col flex lg:gap-10 gap-2">
          <span className="text-nowrap font-roboto font-medium text-[29px]">
            Choose Color
          </span>
          <div className="flex items-center justify-center lg:gap-5 md:gap-5 gap-2">
            {AllColors.map((color) => (
              <div
                className={`w-[40px] h-[40px] cursor-pointer rounded-full ${
                  color === currentColor ? "border-2 border-black" : ""
                }`}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => setColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full flex mt-5 items-end justify-end">
          <button
            onClick={() => {
              if (!name.trim()) return alert("Name can't be empty");
              createNewNoteData(name.trim(), currentColor);
              setColor("");
              setName("");
            }}
            className={`${
              name.trim() ? "" : "bg-opacity-50"
            } hover:bg-opacity-80 bg-[#001F8B]  text-white w-[154px] h-[38px] rounded-xl text-[20px] font-roboto`}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowNewNote;

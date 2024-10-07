import ProfileCard from "./ProfileCard";
import { IoSendSharp } from "react-icons/io5";
import MessageCard from "./MessageCard";

function MessageComponent({
  smallScreen,
  setCurrentNote,
  notesData,
  addNotes,
  InputNotes,
  setInputNotes,
}) {
  return (
    <div className="w-full h-full bg-[#DAE5F5] flex flex-col justify-between items-center">
      <div className="w-full bg-[#001F8B] py-5 h-[12vh] flex items-center  justify-center">
        <ProfileCard
          setCurrentNote={setCurrentNote}
          smallScreen={smallScreen}
          hover={false}
          textColor="white"
          notesData={notesData}
        />
      </div>
      <div className="h-[63vh] w-full overflow-y-auto">
        <div className="h-full w-full lg:mt-10 mt-5 flex flex-col lg:px-10 px-2">
          {notesData.notes.map((details) => (
            <MessageCard
              message={details?.message || ""}
              date={details?.date || Date.now()}
            />
          ))}
        </div>
      </div>
      <div className="lg:h-[25vh] h-[20vh] bg-[#001F8B] mt-2 lg:px-10 px-3 py-5 w-full">
        <div className="bg-white w-full h-full rounded-xl flex items-end justify-between p-2 py-5">
          <textarea
            value={InputNotes}
            onChange={(e) => setInputNotes(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && InputNotes.trim()) {
                e.preventDefault();
                addNotes();
              }
            }}
            type="text"
            autoFocus
            placeholder="Enter your text here"
            className="lg:px-10 px-2 text-start outline-none font-normal lg:text-[29px] text-[18px] text-[#9A9A9A] h-full lg:py-5 py-2 w-[90%]"
            style={{ resize: "none" }}
          />
          <div className="flex items-end justify-end px-5">
            <IoSendSharp
              onClick={InputNotes.trim() ? addNotes : undefined}
              className={`lg:w-[35px] w-[21px] cursor-pointer lg:h-[29px] h-[18px] ${
                InputNotes.trim() ? "text-[#001F8B]" : "text-[#ABABAB]"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;

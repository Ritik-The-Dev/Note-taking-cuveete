import React from "react";

function EmptySide() {
  return (
    <div className="w-full h-full bg-[#DAE5F5] flex justify-center">
      <div className="flex gap-2 items-center justify-center w-full flex-col">
        <img
          src="/empty.png"
          alt="Image"
          className="w-[626px] h-[313px]"
        />
        <span className="font-bold text-[50px]">Pocket Notes</span>
        <span className="font-medium text-[22px] max-w-[650px] leading-tight">Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
        </div>
        <span className="flex items-center bottom-10 font-normal text-[22px] gap-2 absolute justify-center text-nowrap"><img src="/lock.svg" className="w-[17px] h-[21px]"/>end-to-end encrypted</span>
    </div>
  );
}

export default EmptySide;

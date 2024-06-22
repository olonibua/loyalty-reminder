import React, { useState } from "react";
import "./DocumentItem.css";

const DocumentItem = ({ title, description, reminder, index }) => {
  const [hoverStyle, setHoverStyle] = useState({});

  const handleMouseEnter = () => {
    const randomX = Math.random() * 10 - 5; // random value between -5 and 5
    const randomY = Math.random() * 10 - 5; // random value between -5 and 5
    setHoverStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      boxShadow: `0 20px 30px rgba(0, 0, 0, 0.2)`,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle({});
  };

  return (
    <div
      style={hoverStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={index}
      className="document bg-white shadow-lg mb-4  rounded-[12px] p-5 w-full"
    >
      <section className="flex justify-center">
        <h3 className="bg-black rounded-full items-center flex text-white w-[50px] h-[50px] justify-center font-[600]">
          ID: {reminder.serviceId}
        </h3>
      </section>
      <div className="mt-2 flex justify-between text-[14px]">
        <label className="font-[700] text-[#8a8a8a]">Client's Mail:</label>
        <span className="font-[700]">{reminder.userEmail || null}</span>
      </div>

      <div className="mt-1 flex justify-between text-[14px]">
        <label className="font-[700] text-[#8a8a8a]">
          Service Interval Duration:{" "}
        </label>
        <span className="font-[700]">
          {" "}
          {reminder.returnPeriodQuantity} {reminder.returnPeriodType}
        </span>
      </div>
      <div className="mt-1 flex justify-between text-[14px]">
        <label className="font-[700] text-[#8a8a8a]">
          Notification Lead Time:{" "}
        </label>
        <span className="font-[700]">
          {" "}
          {reminder.reminderLeadTimeQuantity} {reminder.reminderLeadTimeType}{" "}
          {reminder.reminderTiming}{" "}
        </span>
      </div>
      <div className="grid text-center mt-2 text-[14px]">
        {/* <label className="font-[700] text-[#8a8a8a]">Message:</label> */}
        <p className="border mt-1 p-1 rounded-lg font-[700]">
          {reminder.reminderMessage}
        </p>
      </div>
    </div>
  );
};

export default DocumentItem;

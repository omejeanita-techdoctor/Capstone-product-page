import React from "react";
import { BsArrowDown } from "react-icons/bs";
import image from "../assets/images/image.png";

const AdminProfile = () => {
  return (
    <div className=" flex gap-2">
      <div className="bg-yellow-300 w-[65px] h-[65px] rounded-full ">
        <img src={image} alt="adminPic" className="w-full rounded-full" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <p className="text-[#2A2A2C] text-[23px] whitespace-nowrap">
            Denim Pro
          </p>
          <BsArrowDown className="pl-2 text-[#9C9C9C]" />
        </div>

        <p className="text-4 text-[#9C9C9C]">Admin</p>
      </div>
    </div>
  );
};

export default AdminProfile;

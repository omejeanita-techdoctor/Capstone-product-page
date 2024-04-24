import { BiCalendar, BiNotification } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { CgNotifications } from "react-icons/cg";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdNotifications, MdNotificationsActive, MdOutlineEditNotifications } from "react-icons/md";
import AdminProfile from "./AdminProfile";
import { FaClock } from "react-icons/fa";
import { PiPlusLight } from "react-icons/pi";

function Header() {
  return (
    <>
      <div className="py-[37px] pl-[77px] pr-[30px] gap-[39px] flex-col flex   bg-[#FAFAFF] ">
        <div className="flex gap-4 items-center justify-between flex-shrink-0">
          <strong className="text-[24px]">Stock</strong>
          <div className="w-[577px] flex items-center gap-2 py-2 pr-0 pl-2 rounded-[24px] border-[0.5px] border-[#828282] bg-[#FCFCFC]">
            <BsSearch className="font-light text-[14px]" />
            <input
              type="search"
              name=""
              className="w-[355px] p-1 text-4"
              placeholder="search"
            />
          </div>
          <div className="w-[22px] h-[22px]  ">
            <MdNotificationsActive className="absolute text-white bg-green-300 border-black  outline-1" />
            <div className="w-1 h-1 top-[1.2px] -right-[8.7px] relative rounded-full bg-[#F3012D]"></div>
          </div>
          <AdminProfile />
        </div>
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center  flex-shrink-0">
            <div className="text-3 flex gap-1 p-2.5 items-center">
              <BiCalendar />
              <p className="">28/03/2024</p>
            </div>
            <div className="text-3 flex gap-1 p-2.5 items-center">
              <FaClock />
              <p className="">6:30PM</p>
            </div>
          </div>
          <div className="cursor-pointer px-8 py-2 w-[158px] justify-center flex items-center gap-4 rounded-md text-[14px] text-white bg-[#0315BD]">
            <PiPlusLight />
            <p>Add New</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

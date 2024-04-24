import React from "react";
import logo from "../assets/images/Frame 1000011614.svg";
import NavItem from "./NavItem";
import category from "../assets/images/category.svg";
import briefcase from "../assets/images/briefcase.svg";
import logout from "../assets/images/logout.svg";
import settings from "../assets/images/settings.svg";
import support from "../assets/images/support.svg";
const SideNav = () => {
  return (
    <div className="py-[32px] pl-[48px] flex flex-col gap-8  justify-between pr-[42px] h-full w-[320px]">
      <div className="flex items-center gap-1 mb-[18px]">
        <div className="w-[43px] h-[47px]">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <p className="text-[33px] text-[#2A2A2C]">StockAce</p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="hover:bg-[#E1E4FF] active:bg-[#E1E4FF] focus:outline-none focus:ring focus:ring-[#E1E4FF]"><NavItem icon={category} navTitle={"Overview"} /></div>
        <div className="hover:bg-[#E1E4FF] active:bg-[#E1E4FF] focus:outline-none focus:ring focus:ring-[#E1E4FF]"><NavItem icon={briefcase} navTitle={"New Product"} /></div>
       <div className="hover:bg-[#E1E4FF] active:bg-[#E1E4FF] focus:outline-none focus:ring focus:ring-[#E1E4FF]"><NavItem icon={briefcase} navTitle={"Products"} /></div>
      </div>
      <div className="w-full flex flex-col gap-6 ">
        <NavItem icon={support} navTitle={"Help Centre"} />
        <NavItem icon={settings} navTitle={"Settings"} />
      </div>
      <div className="w-full flex flex-col gap-6 ">
        <NavItem icon={logout} navTitle={"Log out"} />
      </div>
    </div>
  );
};

export default SideNav;

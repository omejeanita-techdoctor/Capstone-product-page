import React from "react";

const NavItem = ({ icon, navTitle }) => {
  return (
    <div className="py-3 flex items-center gap-4 w-full">
      <div className="w-6 h-6">
        <img src={icon} alt="" className="w-full" />
      </div>
      <p className="text-[20px] font-normal text-[#505153]">{navTitle}</p>
    </div>
  );
};

export default NavItem;

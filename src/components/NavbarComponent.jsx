import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div className="w-[25%] lg:w-full font-poppins flex items-center justify-center">
      <NavLink
        to={props.href}
        className="text-silver w-[90%] flex flex-col lg:flex-row lg:py-2 lg:px-4 items-center justify-center gap-1 lg:bg-white/5 lg:rounded-lg hover:text-white duration-300"
      >
        <span className="text-[20px]">{props.icon}</span>
        <p className="text-[12px] font-semibold">{props.title}</p>
      </NavLink>
    </div>
  );
};

export default NavbarComponent;

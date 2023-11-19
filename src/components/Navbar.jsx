import React from "react";
import NavbarComponent from "./NavbarComponent";

import { BiHomeAlt } from "react-icons/bi";
import { BiUserVoice } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-[70px] w-full flex justify-between bg-navbar fixed bottom-0 left-0 items-center z-[5] px-5 lg:top-0 lg:flex-col lg:h-[90%] lg:w-[20vw] lg:justify-center lg:gap-6 lg:pt-6">
      <NavbarComponent href="/" icon={<BiHomeAlt />} title="Discover" />
      <NavbarComponent
        href="/topartists"
        icon={<BiUserVoice />}
        title="Top Artists"
      />
      <NavbarComponent
        href="/topsongs"
        icon={<BsMusicNoteBeamed />}
        title="Top Songs"
      />
    </div>
  );
};

export default Navbar;

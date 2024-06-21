import React from 'react';
import SetThemeBtn from "@/components/SetThemeBtn";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import Admin from "@/components/Admin";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 z-10 grid h-24 w-full grid-cols-6 place-items-center transition-colors duration-100 bg-secondary dark:bg-secondary-dark">
      <div className="col-span-1"/>
      <div className="col-span-2 justify-self-start text-2xl font-bold">
        <h1>1K6M0S1</h1>
      </div>
      <div className="col-span-2 justify-self-end">
        <SetThemeBtn/>
      </div>
      <div className="col-span-1">
        <Admin/>
      </div>
    </nav>
  );
};

export default Navbar;
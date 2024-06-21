"use client"

import React, {useContext} from 'react';
import SetThemeBtn from "@/components/SetThemeBtn";
import Admin from "@/components/Admin";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 z-10 grid h-20 w-full grid-cols-9 place-items-center transition-colors duration-100 bg-secondary dark:bg-secondary-dark">
      <div/>
      <div className="text-3xl font-bold"><Link href="/">1K6M0S1</Link></div>
      <div className="col-span-3 flex justify-self-start grid-cols-3 gap-6 ml-16">
        <div className="flex justify-center items-center">
          <Link href="/">Blog</Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">Portfolio</Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">About</Link>
        </div>
      </div>
      <div className="col-span-2 text-2xl font-bold">
      </div>
      <div><SetThemeBtn/></div>
      <div><Admin/></div>
    </nav>
  );
};

export default Navbar;
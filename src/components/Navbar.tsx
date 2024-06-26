"use client"

import React from 'react';
import SetThemeBtn from "@/components/SetThemeBtn";
import Admin from "@/components/Admin";
import Link from "next/link";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/*Desktop*/}
      <div className="hidden md:block">
        <nav
          className="fixed top-0 z-10 grid h-20 w-full grid-cols-9 place-items-center transition-colors duration-100 bg-secondary dark:bg-secondary-dark">
          <div/>
          <div className="text-3xl font-bold"><Link href="/">1K6M0S1</Link></div>
          <div className="col-span-3 ml-16 flex grid-cols-3 gap-6 justify-self-start">
            <div className="flex items-center justify-center">
              <Link href="/">Blog</Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/">Portfolio</Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/">About</Link>
            </div>
          </div>
          <div className="col-span-2 text-2xl font-bold">
          </div>
          <div><SetThemeBtn/></div>
          <div><Admin/></div>
        </nav>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <nav
          className="fixed top-0 z-10 grid h-20 w-full grid-cols-3 place-items-center transition-colors duration-100 bg-secondary dark:bg-secondary-dark">
          <div className="text-3xl font-bold ml-10"><Link href="/">1K6M0S1</Link></div>
          <div/>
          <div className="justify-self-end mr-10">
            <Sheet>
              <SheetTrigger><Menu className="h-8 w-8"></Menu></SheetTrigger>
              <SheetContent className="w-1/2 bg-primary dark:bg-primary-dark border-none">
                <SheetHeader>
                  <SheetTitle><Link href="/">Blog</Link></SheetTitle>
                  <SheetTitle><Link href="/">Portfolio</Link></SheetTitle>
                  <SheetTitle><Link href="/">About</Link></SheetTitle>
                  <div>
                    <SetThemeBtn/>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
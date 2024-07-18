"use client"

import React from 'react';
import SetThemeBtn from "@/components/SetThemeBtn";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
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
              <Link href={"/blog"} className="hover:text-description">Blog</Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href={"/portfolio"} className="hover:text-description">Portfolio</Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href={"/about"} className="hover:text-description">About</Link>
            </div>
          </div>
          <div className="col-span-2 text-2xl font-bold">
          </div>
          <div><SetThemeBtn/></div>
        </nav>
      </div>

      {/*Mobile*/}
      <div className="block md:hidden">
        <nav
          className="fixed top-0 z-10 grid h-20 w-full grid-cols-3 place-items-center transition-colors duration-0 bg-secondary dark:bg-secondary-dark">
          <div className="text-3xl font-bold ml-10"><Link href="/">1K6M0S1</Link></div>
          <div/>
          <div className="justify-self-end mr-10">
            <Sheet>
              <SheetTrigger><Menu className="h-8 w-8"></Menu></SheetTrigger>
              <SheetContent className="w-1/2 bg-primary dark:bg-primary-dark border-none">
                <SheetHeader className="mb-2">
                  <SheetTitle className="text-xl">Menu</SheetTitle>
                </SheetHeader>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col mb-5">
                  <SheetClose asChild className="mb-1">
                    <Link href={"/blog"} className="hover:text-description">Blog</Link>
                  </SheetClose>
                  <SheetClose asChild className="mb-1">
                    <Link href={"/portfolio"} className="hover:text-description">Portfolio</Link>
                  </SheetClose>
                  <SheetClose asChild className="mb-1">
                    <Link href={"/about"} className="hover:text-description">About</Link>
                  </SheetClose>
                </div>
                <div>
                  <SetThemeBtn/>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
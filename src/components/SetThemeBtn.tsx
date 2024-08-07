"use client"

import {useTheme} from "next-themes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import React, {useEffect} from "react";
import {Laptop, Moon, Sun} from "lucide-react";

const SetThemeBtn = () => {
  const {systemTheme, theme, setTheme} = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex rounded-lg p-2 outline-none transition-colors bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark">
        {
          theme === "light"
            ? <Sun className="dark:text-primary"/>
            : theme === "dark"
              ? <Moon className="dark:text-primary"/>
              : <Laptop className="dark:text-primary"/>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex justify-between rounded-xl border-0 p-1 transition-colors bg-popover dark:bg-popover-dark">
        <DropdownMenuItem
          className="h-10 w-10 cursor-pointer justify-between rounded-lg bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark"
          onClick={() => setTheme("light")}>
          <Sun/>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="h-10 w-10 cursor-pointer justify-between rounded-lg bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark"
          onClick={() => setTheme("dark")}>
          <Moon/>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="h-10 w-10 cursor-pointer justify-between rounded-lg bg-popover hover:bg-primary dark:bg-popover-dark dark:hover:bg-primary-dark"
          onClick={() => setTheme("system")}>
          <Laptop/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};

export default SetThemeBtn;
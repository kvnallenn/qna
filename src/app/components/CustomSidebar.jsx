import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const CustomSidebar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              className="text-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="flex justify-center items-center w-full">
                <img src="/logo/logo.png" alt="Logo" className="w-14 h-13" />
              </div>
            </SheetTitle>
            <div className="flex flex-col items-start p-3 space-y-3 text-sm">
              <div className="font-Inter">HOME</div>
              <div className="font-Inter">ABOUT</div>
              <div className="font-Inter">CONTACT</div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CustomSidebar;

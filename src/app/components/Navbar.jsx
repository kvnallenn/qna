"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import CustomSidebar from "./CustomSidebar";
import LoginPage from "./LoginPage";

export const Navbar = () => {
  return (
    <>
      <div className="p-5 max-h-fit bg-violetCanva">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5 text-white font-bold mx-3">
            <div className="mr-0">
              <img src="/logo/logo.png" alt="Logo" className="w-13 h-9" />
            </div>
            <div className="hidden lg:flex font-carter">QnA</div>
          </div>
          <div
            className="block lg:hidden text-white font-carter text-xl"
            id="logo-label"
          >
            QnA
          </div>
          <div className="flex grow ml-10 max-w-xl space-x-2 hidden lg:flex">
            <Input
              className="text-black bg-white font-Inter"
              type="text"
              placeholder="Search"
            />
            <Button variant="outline" className="bg-white text-black font-bold font-Inter" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </div>
          <div className="flex space-x-2 mx-3 hidden lg:flex">
            <LoginPage />
            <Button className="bg-white text-black font-bold font-Inter hover:bg-gray-200" type="submit">
              Sign up
            </Button>
          </div>
          <div className="flex space-x-2 mx-3 block lg:hidden">
            <CustomSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

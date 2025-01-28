import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="p-5 max-h-fit bg-violetCanva">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex space-x-5 text-white font-bold mx-3">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div className="flex grow max-w-xl space-x-2">
            <Input className="text-black bg-white" type="text" placeholder="Search" />
            <Button className="bg-white text-black font-bold" type="submit">Subscribe</Button>
          </div>
          <div className="flex space-x-2 mx-3">
            <Button className="bg-white text-black font-bold" type="submit">Login</Button>
            <Button className="bg-white text-black font-bold" type="submit">Sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

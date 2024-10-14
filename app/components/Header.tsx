"use client";
import React from "react"; 
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [navitems, showNavItems] = useState<boolean>(false);

  return (
    <>
      <header className="bg-gray-100 shadow-lg p-2 justify-between items-center fixed top-0 z-10 w-full md:flex">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold ml-5">My CV</h2>
          <IoIosMenu
            size={40}
            className="cursor-pointer md:hidden"
            onClick={() => showNavItems((prevState) => !prevState)}
          />
        </div>
        <div
          className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${
            navitems ? "block" : "hidden"
          }`}
        >
          <ScrollLink
            to={"Home"}
            className="block md:inline-block cursor-pointer hover:text-[16.5px] "
          >
            Home
          </ScrollLink>
          <ScrollLink
            to={"About"}
            className="block md:inline-block cursor-pointer hover:text-[16.5px]"
          >
            About
          </ScrollLink>
          <ScrollLink
            to={'Projects'}
            className="block md:inline-block cursor-pointer hover:text-[16.5px]"
          >
            Projects
          </ScrollLink>
        </div>
      </header>
    </>
  );
}

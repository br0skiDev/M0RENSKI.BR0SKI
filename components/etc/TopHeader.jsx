import React from "react";

import Image from "next/image";
import Link from "next/link";
import NavSocials from "./NavSocials";

const TopHeader = () => {
  return (
    <div className="w-11/12 flex items-center justify-between pt-[40px]">
      <h1 className="text-mainblue text-logo select-none">Morenski.BR0SKI</h1>
      <ul className="hidden md:block text-white/80 space-x-[40px] ul-text mr-[70px]">
        <Link className="hover:text-mainblue font-bold" href={"/docs"}>
          Docs
        </Link>
        <Link className="hover:text-mainblue" href={"/about"}>
          About
        </Link>
        <Link className="hover:text-mainblue" href={"/pricing"}>
          Pricing
        </Link>
        <Link className="hover:text-mainblue" href={"/contact"}>
          Contact
        </Link>
      </ul>
      <div className="">
        <NavSocials 
          color="text-mainblue"
          size="medium"
          />
      </div>
    </div>
  );
};

export default TopHeader;

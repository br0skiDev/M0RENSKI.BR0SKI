import React from "react";
import Link from "next/link";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


const NavSocials = ({color, size}) => {
  return (
    <div className={`${color} flex space-x-[10px]`}>
      <Link href={"https://www.linkedin.com/"} target="_blank">
        <LinkedInIcon 
          fontSize={size}
          className="hover:text-white"
        />
      </Link>
      <Link href={"https://www.twitter.com/"} target="_blank">
        <XIcon 
          className="hover:text-white"
          fontSize={size}
        />
      </Link>
      <Link href={"https://www.instagram.com/"} target="_blank">
        <InstagramIcon 
          className="hover:text-white"
          fontSize={size}
        />
      </Link>
    </div>
  );
};

export default NavSocials;

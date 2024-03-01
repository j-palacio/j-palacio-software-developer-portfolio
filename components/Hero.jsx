import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import Devlmg from "./Devlmg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section>
      <div className="container mx auto">
        <div>
          {/* text */}  
          <div>text</div>
          {/* image */}  
          <div>image</div>
        </div>
        {/* icon */}
        <div className='hidden md:flex'>
            <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

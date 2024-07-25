'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Shoes"
            >
               <div className="flex flex-col space-y-4  transform motion-safe:hover:scale-110 ">
               <HoveredLink href="/Shoes">All Shoes</HoveredLink>
            <HoveredLink href="/Sport">
              sport Shoes
            </HoveredLink>
            <HoveredLink href="/Sneakers">
            Sneakers Shoes
            </HoveredLink>
            <HoveredLink href="/Formal">
              Formal shoes
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
    
  )
}

export default Navbar
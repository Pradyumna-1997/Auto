'use client';

import { NAV_LINKS } from "@/constants"

import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import Hamburger from 'hamburger-react'




const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

 
  const Hlist = () => {
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>

  }

  
  

  return (   
    
      <nav className="flexBetween max-container padding-container sticky top-0 z-30 py-5 bg-white">
        <span className="hidden lg:flex">
        <Link href="/" >
          <Image src="/AutoLogo.png" alt="logo" width={300} height={75} />
        </Link>
        </span>
        <div className="flexCenter lg:hidden">
          <Button 
            type="button"
            title="Login"
            icon="/Slogo.png"
            variant="btn_ablue"
          />
        </div>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-ayellow flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_ablue"
          />
        </div>
        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />

        <Hamburger onToggle={toggled => {
    if (toggled) {
      {Hlist}
      
    } else {
       // close a menu
    }
  }} />
      
        
        
      </nav>
      
  )
}

export default Navbar
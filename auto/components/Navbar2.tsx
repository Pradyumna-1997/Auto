'use client';

import React, { useState } from "react";

import "./Navbar.css";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Button from "./Button";


export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex max-container padding-container sticky top-0 z-30 py-2 bg-ablue">
      <div className="right-0 lg:hidden">
          <Button 
            type="button"
            title="Login"
            icon="/Slogo.png"
            variant="btn_ablue"
          />
        </div>
      
      <div className="menu px-16" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger  size={100}/>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
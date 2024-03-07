'use client';

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import "./Navbar.css";
import Link from "next/link";
import Hamburger from "hamburger-react";



import { ConfigProvider, Select } from "antd";


 const Navbar = () => {
  var loc= 'location';
  const [menuOpen, setMenuOpen] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    loc== ('${value}')
  };
  const Locations = [
    'Bang','Mum'
]
  

  return (
    <nav className="flex max-container padding-container sticky top-0 z-30 py-4 bg-ablue px-2">
      {/* <div className="right-0 lg:hidden">
          <Button 
            type="button"
            title="Login"
            icon="/Slogo.png"
            variant="btn_ablue"
          />
        </div> */}
        <div className="left-0">
        <ConfigProvider
  theme={{
    components: {
      Select: {
        /* here is your component tokens */
      },
    },
  }}
>

        <Select
      defaultValue="Select Location"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Guwahati', label: 'Guwahati' },
        { value: 'Gurgaon', label: 'Gurgaon', disabled: true },
      ]}
      
    />
    </ConfigProvider>
        </div>
      
      <div className="menu px-16" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger  size={100}/>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        {/* <li>
          <Link href="/Contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar
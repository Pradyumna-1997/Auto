'use client';

import React, { useState, useEffect } from 'react';

import "./Navbar.css";
import Link from "next/link";
import Hamburger from "hamburger-react";

import {  Select } from "antd";
const { Option } = Select;



interface DataItem {
  id: number;
  name: string;
}

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [cities, setCities] = useState<DataItem[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}customer/location/getallcities`);
        const data: DataItem[] = await response.json();

        setCities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (value: string) => {
    const selectedCity = cities.find((city) => city.name === value);
    if (selectedCity) {
      setSelectedCityId(selectedCity.id);
      // You can now use selectedCityId in other parts of your code
      console.log('Selected City ID:', selectedCityId);
    }
  };

  
  

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
        <div className="right-0 lg:hidden">
          
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a city"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        onChange={handleCityChange}
      >
        {cities.map((city) => (
          <Option key={city.id} value={city.name}>
            {city.name}
          </Option>
        ))}
      </Select>
    
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
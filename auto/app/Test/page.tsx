
import { Select } from "antd";
import React from 'react';



export default function ServicesTab() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  
    return (
           
      <h1 className= "font-bold text-ablue text-2xl">
        <div className="center">
        <Select
      defaultValue="Slect Location"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
        </div>
      </h1>
    );
  }
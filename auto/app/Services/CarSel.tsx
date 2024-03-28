'use client';

import React, { useState } from 'react';
import { Select, Space } from 'antd';



const BrandData = ["Maruti", "BMW"];
const fuel=["Petrol","Diesel","CNG"]
const modelData = {
  Maruti: ['800', 'A star', 'Alto'],
  BMW: ['1 Series', '220 Sport', '3Series'],

};

type modelName = keyof typeof modelData;

const CarSel = () => {
  const [Brands, setBrands] = useState(modelData[BrandData[0] as modelName]);
  const [Model, setmodel] = useState(modelData[BrandData[0] as modelName][0]);
  const [Fuel, setfuel] = useState("");

  const handleBrandChange = (value: modelName) => {
    setBrands(modelData[value]);
    setmodel(modelData[value][0]);
  };

  const onmodelChange = (value: modelName) => {
    setmodel(value);
  };
  const onfuelChange = (value: modelName) => {
    setfuel(value);
  };

  return (
 
    <Space wrap>
           <h1 className= "font-bold text-ablue text-2xl">Select Brand and Car Model Here</h1>
           <div className="flex w-full flex-row">
      <Select
        placeholder="Select Brand here"
        style={{ width: 120}}
        onChange={handleBrandChange}
        options={BrandData.map((Brand) => ({ label: Brand, value: Brand }))}
      />
      <Select
        style={{ width: 120 }}
        placeholder="Select Model here"
        onChange={onmodelChange}
        options={Brands.map((model) => ({ label: model, value: model }))}
      />
      <Select
        style={{ width: 120 }}
        placeholder="Select Fuel here"
        onChange={onfuelChange}
        options={fuel.map((fuel) => ({ label: fuel, value: fuel }))}
      />
      </div>
    </Space>
  );
};

export default CarSel;
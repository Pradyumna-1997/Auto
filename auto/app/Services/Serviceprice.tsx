'use client';

import React, { useState } from 'react';
import { Select, Space } from 'antd';



const BrandData = ["Maruti", "BMW"];


const modelData = {
  Maruti: ['800', 'A star', 'Alto'],
  BMW: ['1 Series', '220 Sport', '3Series'],
};

type modelName = keyof typeof modelData;

const CarSel = () => {
  const [Brands, setBrands] = useState(modelData[BrandData[0] as modelName]);
  const [Secondmodel, setmodel] = useState(modelData[BrandData[0] as modelName][0]);

  const handleBrandChange = (value: modelName) => {
    setBrands(modelData[value]);
    setmodel(modelData[value][0]);
  };

  const onmodelChange = (value: modelName) => {
    setmodel(value);
  };

  return (
 
    <Space wrap>
           <h1 className= "font-bold text-ablue text-2xl">Select Brand and Car Model Here</h1>
           <div className="flex w-full flex-row">
      <Select
        //defaultValue="Select Brand here"
        style={{ width: 180 }}
        onChange={handleBrandChange}
        options={BrandData.map((Brand) => ({ label: Brand, value: Brand }))}
      />
      <Select
        style={{ width: 180 }}
        //defaultValue="Select Model here"
        onChange={onmodelChange}
        options={Brands.map((model) => ({ label: model, value: model }))}
      />
      </div>
    </Space>
  );
};

export default CarSel;
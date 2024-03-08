'use client';

import React, { useState } from 'react';
import { Select, Space } from 'antd';

const provinceData = ["Maruti", "BMW"];

const cityData = {
  Maruti: ['800', 'A star', 'Alto'],
  BMW: ['1 Series', '220 Sport', '3Series'],
};

type CityName = keyof typeof cityData;

const CarSel = () => {
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0] as CityName][0]);

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };

  return (
 
    <Space wrap>
           <h1 className= "font-bold text-ablue text-2xl">Select Brand and Car Model Here</h1>
           <div className="flex w-full flex-row">
      <Select
        defaultValue="Select Brand here"
        style={{ width: 180 }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({ label: province, value: province }))}
      />
      <Select
        style={{ width: 180 }}
        defaultValue="Select Model here"
        onChange={onSecondCityChange}
        options={cities.map((city) => ({ label: city, value: city }))}
      />
      </div>
    </Space>
  );
};

export default CarSel;
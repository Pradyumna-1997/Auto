
import Services from "@/components/Services";
import React from 'react';
import CarSel from "./CarSel";
import Serviceprice from "./Serviceprice";


export default function ServicesTab () {
  
    return (
      
      
      <h1 className= "font-bold text-ablue text-2xl">
        <CarSel />
        <Serviceprice />
        <Services/>
      </h1>
    );
  }
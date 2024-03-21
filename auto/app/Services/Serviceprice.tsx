'use client';

import React, { useState, useEffect } from 'react';
import { Button, Col, Image, Row, notification } from 'antd';

import axios from "axios";

interface MakeItem {
  id: number;
  name: string;
  // Add any other attributes you expect in the response
}
interface ModelItem {
  id: number;
  name: string;
  // Add any other attributes you expect in the response
}

const Serviceprice: React.FC = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [data, setData] = useState<MakeItem[]>([]);
  const [models, setModel] = useState<ModelItem[]>([]);
  
  const [selectedId, setSelectedId] = useState<number | null>(1);

  useEffect(() => {
    const fetchMake = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}core/getAllMake`);
        const fetchedData: ModelItem[] = await response.json();
        

        setData(fetchedData);
        const extractedIds = fetchedData.map((item) => item.id);
        setIds(extractedIds);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMake();

  }, []);

  const closeAllNotifications = () => {
    notification.destroy(); // Close all notifications
  };

  
  const handleMakeClick = async (id2: number) => {
    closeAllNotifications;
    setSelectedId(id2);
    console.log('Seleted brand ID',id2)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}core/getModel?makeId=${id2}`);
      const fetchedData: MakeItem[] = await response.json();

      setModel(fetchedData);
    } catch (error) {
        console.error('Error fetching data:', error);
      }

    notification.info({
      message: `Brand number ${id2} clicked`,
      description: (
        <div>
        <Row gutter={[16, 16]} justify="start">
        {models.map((item, index) => (
          <div key={index} 
          //style={{ height: '20%' } }
          >
            <Col key={index} 
            //xs={3} sm={3} md={3} lg={3} xl={3}
            >
              {item.name}        
        </Col>
          </div>
        ))}
      </Row>
      </div>),
      // <ul>
      // {models.map((item, index) => (
      //   <li key={index}>{item.name}</li>
      // ))}
      // </ul>),
      duration: 3, // Automatically close the notification after 3 seconds
    });
  };
 
  

  const handleShowIds = () => {
    notification.info({
      message: 'Select Your Brand',
      description: (
        <div>
        <Row gutter={[16, 16]} justify="start">
        {data.map((item, index) => (
          <div key={index} 
          style={{ width: '20%', height: '20%' } }
          >
            <Col key={index} 
            //</div>xs={24} sm={12} md={8} lg={6} xl={4}
            >
            <img src={`https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/${item.id}.jpeg`} 
            alt={`Image ${item.id}`}              
            onClick={() => handleMakeClick(item.id)} 
            //onClick={closeAllNotifications}
          />
        </Col>
          </div>
        ))}
      </Row>
      </div>
      ),
      duration: 0, // Keep the notification open until manually closed
    });
  };

  return (
    <div className="sticky top-20">
    {/* <Button type="primary" onClick={handleShowIds}> */}
    <Button
        onClick={handleShowIds}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
       Click here to Select Car to be Serviced
      </Button>
  </div>
  );
};

export default Serviceprice;
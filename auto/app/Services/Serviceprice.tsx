'use client';

import React, { useState, useEffect } from 'react';
import { Button, Col, Image, Row, notification } from 'antd';

interface DataItem {
  id: number;
  name: string;
  // Add any other attributes you expect in the response
}

const Serviceprice: React.FC = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}core/getAllMake`);
        const fetchedData: DataItem[] = await response.json();

        setData(fetchedData);
        const extractedIds = fetchedData.map((item) => item.id);
        setIds(extractedIds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowIds = () => {
    notification.info({
      message: 'IDs',
      description: (
        // <div>
        //   <ul className="list-style: none flex-row">
        //   {data.map((item, index) => (
        //     <li>
        //     <div key={index} 
        //     style={{ width: '20%', height: '20%' } }
        //     >
        //       <Image src={`https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/${item.id}.jpeg`} 
        //       alt={`Image ${item.id}`}              
        //       //onClick={() => handleImageClick(item.id)} 
        //     />
        //     </div>
        //     </li>
            
        //   ))}
        //   </ul>
        // </div>
        <div>
        <Row gutter={[16, 16]} justify="start">
        {data.map((item, index) => (
          <div key={index} 
          style={{ width: '20%', height: '20%' } }
          >
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Image src={`https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/MAKE_MODEL/MAKE/${item.id}.jpeg`} 
            alt={`Image ${item.id}`}              
            //onClick={() => handleImageClick(item.id)} 
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
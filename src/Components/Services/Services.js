import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('../courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            {/* Page Title */}
            <h1 style={{fontSize: '50px', color: '#41464b', padding: '20px 0 40px'}}>Our Services</h1>
           <Container>
               <Row>
                    {
                        services.map( service => <Service 
                            key={service.id}
                            data = {service}                    
                            ></Service>)
                    }
               </Row>
           </Container>
        </div>
    );
};

export default Services;
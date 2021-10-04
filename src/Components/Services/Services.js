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
            <h4>Our Total Services: {services.length}</h4>
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
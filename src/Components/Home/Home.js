import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Body from '../Body/Body';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('../courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            <Body></Body>
            <Container>
               <Row>
               {
                services.slice(0,4).map( service => <HomeServices 
                    key={service.id}
                    data = {service}                    
                    ></HomeServices>)
            }
               </Row>
           </Container>
        </div>
    );
};

export default Home;
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {  ServiceContext } from '../../App';
import Body from '../Body/Body';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    //Use Of Context API
    const getTitle = useContext(ServiceContext);
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('../courses.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            <Body></Body>
            <div className="services">
               <h1>{getTitle}</h1>
            </div>
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
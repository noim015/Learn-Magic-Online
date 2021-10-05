import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect( () => {
        fetch('../reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    },[])
    return (
        <div>
            {/* Page Title */}
            <h1 style={{fontSize: '50px', color: '#41464b', padding: '20px 0 40px'}}>Reviews Of Our Beloved Clients</h1>
            <Container>
               <Row>
               {
                reviews.map( review => <Review 
                    key={review.id}
                    data = {review}                    
                    ></Review>)
            }
               </Row>
           </Container>
        </div>
    );
};

export default Reviews;
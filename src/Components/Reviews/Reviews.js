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
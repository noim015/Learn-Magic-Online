import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Review = (props) => {
    const {title,reviewer,img,reviewingDay} = props.data;
    return (
        <div>
            <Card className="text-center" style={{marginTop:'25px'}}>           
            <Card.Header>Reviews</Card.Header>
            <Card.Body>
            <Card.Img style={{width:'90px'}} variant="top" src={img} />
                <Card.Title>{title}</Card.Title> 
                <Card.Text>
                -{reviewer}
                </Card.Text>  
            </Card.Body>
            <Card.Footer className="text-muted">{reviewingDay}</Card.Footer>
            </Card>
        </div>
    );
};

export default Review;
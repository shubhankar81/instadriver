import React from 'react';
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap'

import hiredriver from '../images/hiredriver.svg';
import searchdriver from '../images/searchdriver.svg';
import calldriver from '../images/calldriver.svg';

const arrayImg = [ searchdriver, calldriver, hiredriver]
const CardDetail = (props) => {
    console.log("this s", props)
    return <React.Fragment ><CardGroup className="divDetail">
                {props.data ? props.data.map((_detail, index) => {
                    return <Card key={index}>
                            <Card.Img variant="top" src={arrayImg[index]} height="80" width="50" />
                            <Card.Body>
                                <Card.Title>{_detail.title}</Card.Title>
                                <Card.Text>
                                    {_detail.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                }) : ""}
                
            </CardGroup>
            
            </React.Fragment>
}
export default CardDetail;
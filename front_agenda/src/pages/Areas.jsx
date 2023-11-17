import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import List from '../components/areas/List'

function Areas(){
    return(
        <Container>
            <Row>
                <Col xs='12'>
                    <List></List>
                </Col>
            </Row>
        </Container>
    )
}

export default Areas
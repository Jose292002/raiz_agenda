import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

function Login() {
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>   
                                    <Form.Control type="email" name="email" placeholder="your@email.com"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Password
                                    </Form.Label>   
                                    <Form.Control type="Password" name="password" placeholder="************"></Form.Control>
                                </Form.Group>
                                <Button>Log in</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
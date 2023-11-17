import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import List from '../components/users/List'
import Create from '../components/users/Modals/Create'
function Users() {
    const [showUserModal,setShowUserModal]=useState(false)
    const closeModal=(user)=>{
        setShowUserModal(false)
    }
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h1>Users</h1>
                </Col>
            </Row>
            <Row>
                <Col xz='12' className='d-flex justify-content-end my-2'>
                    <Button variant='primary' onClick={()=> setShowUserModal(true)}>Create</Button>
                    <Create show={showUserModal} onClose={closeModal}></Create>
                </Col>
                <Col xs='12'>
                    <List></List>
                </Col>
            </Row>
        </Container>
    )
}

export default Users
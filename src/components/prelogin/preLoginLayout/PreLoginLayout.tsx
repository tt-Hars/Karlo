import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router';

function PreLoginLayout(){

    return (
        <Container className="PreLogin">
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default PreLoginLayout;
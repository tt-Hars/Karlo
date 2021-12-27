import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.scss';

function Header() {

    return (
        <div className="Header">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>Header</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
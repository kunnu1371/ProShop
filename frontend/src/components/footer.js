import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>Copyright &copy; ProShop</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer

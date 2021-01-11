import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <footer id="main-footer" className="text-center p-4">
      <Container>
        <Row>
          <Col>
            <p>Copyright &copy; <span>{new Date().getFullYear()}</span> Glozzom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

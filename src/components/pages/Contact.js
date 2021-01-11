import React, { Fragment } from 'react'
import { Container, Row, Col, Card, CardBody, FormGroup, Input, Button } from 'reactstrap'
import { images } from '../../images/exports'

const Contact = () => {
  return (
    <Fragment>
      <header id="page-header">
        <Container>
          <Row>
            <Col md="6" className="m-auto text-center">
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="contact" className="py-3">
        <Container>
          <Row>
            <Col md="4">
              <Card className="p-4">
                <CardBody>
                  <h4>Get In Touch</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vero.</p>
                  <h4>Address</h4>
                  <p>14 London Road</p>
                  <h4>Email</h4>
                  <p>test@email.com</p>
                  <h4>Phone</h4>
                  <p>111228</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="p-4">
                <CardBody>
                  <h3 className="text-center">Please fill out this form</h3>
                  <hr/>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="First Name" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="Email" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="Phone Number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <textarea className="form-control" placeholder="Message"></textarea>
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Button block color="danger" outline>Submit</Button>
                      </FormGroup>                    
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="staff" className="py-5 text-center bg-dark text-white">
        <Container>
          <h1>Our Staff</h1>
          <hr/>
          <Row>
            <Col md="3">
              <img src={images[6].value.default} alt="Jane Doe Glozzom" className="img-fluid mb-2 rounded-circle"/>
              <h4>Jane Doe</h4>
              <small>Marketing Manager</small>
            </Col>
            <Col md="3">
              <img src={images[7].value.default} alt="Jane Doe Glozzom" className="img-fluid mb-2 rounded-circle"/>
              <h4>Joanne Smith</h4>
              <small>Managing Director</small>
            </Col>
            <Col md="3">
              <img src={images[8].value.default} alt="Jane Doe Glozzom" className="img-fluid mb-2 rounded-circle"/>
              <h4>John Doe</h4>
              <small>Chief Executive Officer</small>
            </Col>
            <Col md="3">
              <img src={images[9].value.default} alt="Jane Doe Glozzom" className="img-fluid mb-2 rounded-circle"/>
              <h4>James Collins</h4>
              <small>Chief Technology Officer</small>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Contact

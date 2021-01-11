import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Collapse, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

const Services = () => {
  const [openCardOne, setopenCardOne] = useState(false)
  const [openCardTwo, setopenCardTwo] = useState(false)
  const [openCardThree, setopenCardThree] = useState(false)
  const [openCardFour, setopenCardFour] = useState(false)
  const [openCardFive, setopenCardFive] = useState(false)
  const [openCardSix, setopenCardSix] = useState(false)


  const toggle = () => setopenCardOne(!openCardOne)
  const toggleCardTwo = () => setopenCardTwo(!openCardTwo)
  const toggleCardThree = () => setopenCardThree(!openCardThree)
  const toggleCardFour = () => setopenCardFour(!openCardFour)
  const toggleCardFive = () => setopenCardFive(!openCardFive)
  const toggleCardSix = () => setopenCardSix(!openCardSix)


  return (
    <Fragment>
      <header id="page-header">
        <Container>
          <Row>
            <Col md="6" className="m-auto text-center">
              <h1>Our Services</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="services" className="py-5">
        <Container>
          <Row>
            <Col md="4">
              <Card className="text-center">
                <CardHeader className="text-white bg-dark">
                  <h3>Service Plan 1</h3>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <h4>£59.99/Month</h4>
                    <CardText>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nulla.</p>
                    </CardText>
                    <ListGroup>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature One</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Two</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Three</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Four</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Five</ListGroupItem>
                    </ListGroup>
                    <Button block color="danger" className="mt-2">Get It!</Button>
                  </CardTitle>
                </CardBody>
                <CardFooter className="text-muted">1 Year Plan</CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="text-center">
                <CardHeader className="text-white bg-dark">
                  <h3>Service Plan 2</h3>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <h4>£29.99/Month</h4>
                    <CardText>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nulla.</p>
                    </CardText>
                    <ListGroup>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature One</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Two</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Three</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Four</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Five</ListGroupItem>
                    </ListGroup>
                    <Button block color="danger" className="mt-2">Get It!</Button>
                  </CardTitle>
                </CardBody>
                <CardFooter className="text-muted">6 Months Plan</CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="text-center">
                <CardHeader className="text-white bg-dark">
                  <h3>Service Plan 3</h3>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <h4>£19.99/Month</h4>
                    <CardText>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nulla.</p>
                    </CardText>
                    <ListGroup>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature One</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Two</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Three</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Four</ListGroupItem>
                      <ListGroupItem> <i className="fas fa-check"></i> Feature Five</ListGroupItem>
                    </ListGroup>
                    <Button block color="danger" className="mt-2">Get It!</Button>
                  </CardTitle>
                </CardBody>
                <CardFooter className="text-muted">3 Months Plan</CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="faq" className="p-5 bg-dark text-white">
        <Container>
          <h1 className="text-center">Frequently Asked Questions</h1>
          <hr/>
          <Row>
            <Col md="6">
              <Card onClick={toggle}>
                <CardHeader>
                  <h5 className="mb-0 text-dark card-pointer">Question One</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardOne}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
              <Card className="mt-3 card-pointer" onClick={toggleCardTwo}>
                <CardHeader>
                  <h5 className="mb-0 text-dark">Question Two</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardTwo}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
              <Card className="mt-3 card-pointer" onClick={toggleCardThree}>
                <CardHeader>
                  <h5 className="mb-0 text-dark">Question Three</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardThree}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
            </Col>
            <Col md="6">
              <Card className="card-pointer" onClick={toggleCardFour}>
                <CardHeader>
                  <h5 className="mb-0 text-dark">Question Four</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardFour}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
              <Card className="mt-3 card-pointer" onClick={toggleCardFive}>
                <CardHeader>
                  <h5 className="mb-0 text-dark">Question Five</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardFive}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
              <Card className="mt-3 card-pointer" onClick={toggleCardSix}>
                <CardHeader>
                  <h5 className="mb-0 text-dark">Question Six</h5>
                </CardHeader>
              </Card>
              <Collapse isOpen={openCardSix}>
                <CardBody>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero quod voluptatibus magnam sequi necessitatibus tempora laborum modi vitae facilis fugiat suscipit, perferendis impedit voluptates, animi aliquid ea ex, at ad dicta mollitia sunt earum! Officia beatae obcaecati culpa placeat.
                </CardBody>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Services

import React, { Fragment } from 'react'
import { Container, Row, Col, CardColumns, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

const Blog = () => {
  return (
    <Fragment>
      <header id="page-header">
        <Container>
          <Row>
            <Col md="6" className="m-auto text-center">
              <h1>Read Our Blog</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="blog" className="py-5">
        <Container>
          <Row>
            <Col>
              <CardColumns>
                <Card>
                  <CardImg src="https://source.unsplash.com/random/300*200" className="img-fluid" top />
                  <CardBody>
                    <CardTitle>
                      <h4 className="card-title">Blog Post One</h4>
                      <small className="text-muted">Written by Beng on 05/21</small>
                      <hr/>
                      <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem odio unde dignissimos similique pariatur optio modi incidunt animi. Repellat veritatis quis voluptatum id nulla facere eaque magni nisi doloribus!</CardText>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card className="p-3">
                  <blockquote className="card-blockquote card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non, delectus nostrum exercitationem animi esse!</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">Someone Famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </Card>
                <Card>
                  <CardImg src="https://source.unsplash.com/random/300*202" className="img-fluid" top />
                  <CardBody>
                    <CardTitle>
                      <h4 className="card-title">Blog Post Two</h4>
                      <small className="text-muted">Written by Banyeezy on 05/21</small>
                      <hr/>
                      <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem odio unde dignissimos similique pariatur optio modi incidunt animi. Repellat veritatis quis voluptatum id nulla facere eaque magni nisi doloribus!</CardText>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card className="p-3 bg-danger">
                  <blockquote className="card-blockquote card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non, delectus nostrum exercitationem animi esse!</p>
                    <footer className="blockquote-footer">
                      <small className="text-white">Someone Famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </Card>
                <Card>
                  <CardImg src="https://source.unsplash.com/random/300*201" className="img-fluid" top />
                  <CardBody>
                    <CardTitle>
                      <h4 className="card-title">Blog Post Three</h4>
                      <small className="text-muted">Written by Jay on 04/21</small>
                      <hr/>
                      <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem odio unde dignissimos similique pariatur optio modi incidunt animi. Repellat veritatis quis voluptatum id nulla facere eaque magni nisi doloribus!</CardText>
                    </CardTitle>
                  </CardBody>
                </Card>
                <Card className="p-3">
                  <blockquote className="card-blockquote card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non, delectus nostrum exercitationem animi esse!</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">Someone Famous in <cite title="Source Title">Source Title</cite></small>
                    </footer>
                  </blockquote>
                </Card>
              </CardColumns>
            </Col>
            {/* <Col md="4"></Col>
            <Col md="4"></Col> */}
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Blog

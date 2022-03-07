import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class Feature extends Component {
      render() {
    return (
      <React.Fragment>
        <section className="section" id="feature">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb-5">
                  <h2 className="">Dual Range Slider</h2>
                </div>
              </Col>
            </Row>
            <Container>
                <Row className="justify-content-center">
                   <Col lg={6}>
                      <p className="text-muted float-start mb-3">Current Age</p>
                   </Col>
                   <Col lg={6}>
                      <p className="text-muted float-end mb-3">Planned Retirement Age</p>
                   </Col>
                </Row>
            </Container>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
import React, { Component } from "react";
import { Col, Container, Row, FormGroup, Input } from "reactstrap";

export default class Result extends Component {
      render() {
    return (
      <React.Fragment>
        <section className="section" id="result">
          <Container>
          <Row className="align-items-center justify-content-center mt-3">
                   <Col md={6}>
                        <FormGroup className="app-label">
                          <Input name="current age" id="current age" type="number" className="form-control" />
                        </FormGroup>
                   </Col>
                   <Col md={6}>
                       <FormGroup className="app-label">
                          <Input name="planned age" id="planned age" type="number" className="form-control" />
                        </FormGroup>
                   </Col>
           </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}